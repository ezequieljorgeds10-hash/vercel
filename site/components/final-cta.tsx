"use client";

import { Heart, Facebook, Instagram, MessageCircle, Share2 } from "lucide-react";

const shareUrl = "https://recanto-anjos-peludos.example.org";
const shareText = "Ajude Joaquim a voltar a andar ❤️";

const shareLinks = [
  {
    label: "Compartilhar no Facebook",
    icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  },
  {
    label: "Compartilhar no WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
];

export function FinalCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display text-3xl font-800 text-balance sm:text-4xl">
          Agora ele precisa conhecer algo diferente: a compaixão.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
          Joaquim já conheceu a fome, a violência e o abandono. Sua contribuição
          pode ser a diferença entre uma vida de dor e uma nova oportunidade de
          caminhar novamente. Cada doação importa. Cada compartilhamento ajuda.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#doar"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-700 text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Doar agora
          </a>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/90">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              Compartilhe:
            </span>
            {shareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
              >
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
