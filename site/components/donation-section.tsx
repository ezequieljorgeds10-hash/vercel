"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  Heart,
  QrCode,
  CreditCard,
  Barcode,
  CheckCircle2,
  X,
  Loader2,
  PawPrint,
} from "lucide-react";
import { donationTiers, formatBRL } from "@/lib/campaign";

type PaymentMethod = "pix" | "cartao" | "boleto";

const paymentOptions: { id: PaymentMethod; label: string; icon: typeof QrCode }[] = [
  { id: "pix", label: "Pix", icon: QrCode },
  { id: "cartao", label: "Cartão de Crédito", icon: CreditCard },
  { id: "boleto", label: "Boleto", icon: Barcode },
];

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, "($1");
  if (digits.length <= 6)
    return digits.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (digits.length <= 10)
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

function maskCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function DonationSection() {
  const [selectedTier, setSelectedTier] = useState<number | null>(50);
  const [customValue, setCustomValue] = useState("");
  const [method, setMethod] = useState<PaymentMethod>("pix");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const amount = useMemo(() => {
    if (customValue) {
      const parsed = Number(customValue.replace(",", "."));
      return Number.isFinite(parsed) ? parsed : 0;
    }
    return selectedTier ?? 0;
  }, [customValue, selectedTier]);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (amount <= 0) next.amount = "Escolha ou informe um valor válido.";
    if (!name.trim()) next.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Informe um e-mail válido.";
    if (phone.replace(/\D/g, "").length < 10)
      next.phone = "Informe um telefone válido.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulated payment integration
    setTimeout(() => {
      setSubmitting(false);
      setConfirmed(true);
    }, 1600);
  }

  return (
    <section id="doar" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-wide text-primary">
            Faça sua doação
          </span>
          <h2 className="mt-2 font-display text-3xl font-800 text-balance text-foreground sm:text-4xl">
            O impacto da sua doação
          </h2>
          <p className="mt-3 text-muted-foreground">
            Qualquer valor faz diferença na vida de Joaquim. Escolha uma opção
            abaixo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Tiers */}
          <div className="grid gap-3 sm:grid-cols-2">
            {donationTiers.map((tier) => {
              const active = selectedTier === tier.value && !customValue;
              return (
                <button
                  key={tier.value}
                  type="button"
                  onClick={() => {
                    setSelectedTier(tier.value);
                    setCustomValue("");
                  }}
                  className={`flex flex-col rounded-2xl border p-5 text-left transition-all ${
                    active
                      ? "border-primary bg-card shadow-md ring-2 ring-primary"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                  aria-pressed={active}
                >
                  <span className="flex items-center gap-2 font-display text-2xl font-800 text-primary">
                    <PawPrint className="h-5 w-5" aria-hidden="true" />
                    {formatBRL(tier.value)}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </span>
                </button>
              );
            })}

            <div className="sm:col-span-2">
              <label
                htmlFor="custom-value"
                className="mb-1 block text-sm font-600 text-foreground"
              >
                Outro valor
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  R$
                </span>
                <input
                  id="custom-value"
                  inputMode="decimal"
                  placeholder="Digite um valor"
                  value={customValue}
                  onChange={(e) => {
                    setCustomValue(e.target.value.replace(/[^\d.,]/g, ""));
                    setSelectedTier(null);
                  }}
                  className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
          >
            <fieldset>
              <legend className="mb-2 text-sm font-600 text-foreground">
                Forma de pagamento
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {paymentOptions.map((opt) => {
                  const active = method === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setMethod(opt.id)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-600 transition-colors ${
                        active
                          ? "border-primary bg-secondary text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                      aria-pressed={active}
                    >
                      <opt.icon className="h-5 w-5" aria-hidden="true" />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-4 grid gap-4">
              <Field
                id="name"
                label="Nome completo"
                value={name}
                onChange={setName}
                error={errors.name}
                placeholder="Seu nome"
                autoComplete="name"
              />
              <Field
                id="email"
                label="E-mail"
                type="email"
                value={email}
                onChange={setEmail}
                error={errors.email}
                placeholder="voce@email.com"
                autoComplete="email"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="phone"
                  label="Telefone"
                  value={phone}
                  onChange={(v) => setPhone(maskPhone(v))}
                  error={errors.phone}
                  placeholder="(00) 00000-0000"
                  inputMode="tel"
                  autoComplete="tel"
                />
                <Field
                  id="cpf"
                  label="CPF (opcional)"
                  value={cpf}
                  onChange={(v) => setCpf(maskCPF(v))}
                  placeholder="000.000.000-00"
                  inputMode="numeric"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-600 text-foreground"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Deixe uma mensagem de apoio"
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            {errors.amount && (
              <p className="mt-3 text-sm text-accent">{errors.amount}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-700 text-accent-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Processando...
                </>
              ) : (
                <>
                  <Heart className="h-5 w-5" aria-hidden="true" />
                  Doar {amount > 0 ? formatBRL(amount) : "agora"}
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Ambiente seguro. Seus dados são protegidos e não compartilhados.
            </p>
          </form>
        </div>
      </div>

      {confirmed && (
        <ConfirmationModal
          amount={amount}
          method={method}
          name={name}
          onClose={() => setConfirmed(false)}
        />
      )}
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "decimal";
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-600 text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring/30 ${
          error ? "border-accent" : "border-border focus:border-primary"
        }`}
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}

function ConfirmationModal({
  amount,
  method,
  name,
  onClose,
}: {
  amount: number;
  method: PaymentMethod;
  name: string;
  onClose: () => void;
}) {
  const methodLabel =
    paymentOptions.find((o) => o.id === method)?.label ?? "Pix";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>

        <h3
          id="confirm-title"
          className="mt-4 font-display text-2xl font-800 text-foreground"
        >
          Obrigado{name ? `, ${name.split(" ")[0]}` : ""}! ❤️
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Sua doação de{" "}
          <strong className="text-primary">{formatBRL(amount)}</strong> via{" "}
          {methodLabel} foi registrada. Você aproxima Joaquim da recuperação.
          O comprovante será enviado por e-mail.
        </p>

        {method === "pix" && (
          <div className="mt-5 rounded-xl bg-secondary p-4">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-lg border border-border bg-card">
              <QrCode className="h-16 w-16 text-foreground" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Escaneie o QR Code para concluir o pagamento via Pix.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-700 text-primary-foreground"
        >
          Concluir
        </button>
      </div>
    </div>
  );
}
