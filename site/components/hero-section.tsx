import Image from "next/image";
import { Heart, ShieldCheck, MapPin } from "lucide-react";
import { campaign, formatBRL } from "@/lib/campaign";
import { ProgressBar } from "@/components/progress-bar";
import { Countdown } from "@/components/countdown";

export function HeroSection() {
  const percent = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-foreground"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/joaquim-hero.png"
          alt="Joaquim, cachorro resgatado, deitado olhando para a câmera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-20">
        <div className="text-background">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-600 text-primary-foreground">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Campanha Verificada
          </span>

          <h1 className="mt-5 font-display text-3xl font-800 leading-tight text-balance sm:text-4xl md:text-5xl">
            Ele foi espancado e abandonado. Agora Joaquim precisa de nós para
            voltar a andar.
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-background/80 sm:text-base">
            Joaquim sofreu maus-tratos, teve a coluna fraturada e hoje luta
            contra a dor todos os dias. Precisamos arrecadar{" "}
            {formatBRL(campaign.goal)} para custear sua cirurgia e dar a ele a
            chance de voltar a andar.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#doar"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-700 text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Heart className="h-5 w-5" aria-hidden="true" />
              Fazer Doação
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-background/80">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {campaign.location}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-xl sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-600 uppercase tracking-wide text-muted-foreground">
                Arrecadado
              </p>
              <p className="font-display text-3xl font-800 text-primary">
                {formatBRL(campaign.raised)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-600 uppercase tracking-wide text-muted-foreground">
                Meta
              </p>
              <p className="font-display text-lg font-700 text-foreground">
                {formatBRL(campaign.goal)}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <ProgressBar value={percent} />
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="font-700 text-primary">{percent}% da meta</span>
              <span className="text-muted-foreground">
                {campaign.supporters} apoiadores
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-secondary p-4">
            <p className="mb-3 text-xs font-600 uppercase tracking-wide text-secondary-foreground">
              Tempo restante
            </p>
            <Countdown daysLeft={campaign.daysLeft} />
          </div>

          <a
            href="#doar"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-700 text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Quero Ajudar
          </a>
        </div>
      </div>
    </section>
  );
}
