import {
  PawPrint,
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { campaign } from "@/lib/campaign";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Campanha", href: "#doar" },
  { label: "Perguntas frequentes", href: "#doar" },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/" },
];

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-700">{campaign.org}</p>
              <p className="text-xs text-background/60">Instituto do Amor</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            Resgatamos, cuidamos e damos uma nova chance a animais em situação de
            vulnerabilidade. Juntos, transformamos histórias de dor em histórias
            de amor.
          </p>

          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary"
              >
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-wide">
            Links rápidos
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-background/70 transition-colors hover:text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-700 uppercase tracking-wide">
            Contato
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              contato@recantoanjospeludos.org
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              (62) 90000-0000
            </li>
            <li className="mt-2 flex items-center gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              CNPJ: {campaign.cnpj}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-background/60 md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} {campaign.org}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
              Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Campanha verificada
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
