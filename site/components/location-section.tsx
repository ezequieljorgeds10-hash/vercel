import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { campaign, formatBRL } from "@/lib/campaign";
import { Reveal } from "@/components/reveal";

export function LocationSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/recanto.png"
            alt="Instalações do Recanto Anjos Peludos em Goiânia"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm font-600 text-foreground shadow">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {campaign.location}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-sm font-600 uppercase tracking-wide text-primary">
            Transparência total
          </span>
          <h2 className="mt-2 font-display text-3xl font-800 text-balance text-foreground sm:text-4xl">
            Onde ficamos e como usamos os recursos
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Todos os recursos arrecadados serão destinados exclusivamente ao
            tratamento de Joaquim.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            <Info label="Organização" value={campaign.org} />
            <Info label="Campanha" value={campaign.title} />
            <Info label="Meta total" value={formatBRL(campaign.goal)} />
            <Info label="Arrecadado" value={formatBRL(campaign.raised)} />
          </dl>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-600 text-secondary-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Campanha Verificada · {campaign.activeSince}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="text-xs font-600 uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-600 text-foreground">{value}</dd>
    </div>
  );
}
