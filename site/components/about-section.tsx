import Image from "next/image";
import { PlayCircle, Hospital, Pill, FlaskConical, Bandage } from "lucide-react";
import { useOfFunds } from "@/lib/campaign";
import { Reveal } from "@/components/reveal";

const fundsIcons = {
  hospital: Hospital,
  pill: Pill,
  flask: FlaskConical,
  bandage: Bandage,
} as const;

const gallery = [
  { src: "/images/joaquim-1.png", alt: "Joaquim recebendo atendimento veterinário" },
  { src: "/images/joaquim-2.png", alt: "Joaquim descansando com meias protetoras" },
  { src: "/images/joaquim-3.png", alt: "Retrato de Joaquim com olhar esperançoso" },
  { src: "/images/recanto.png", alt: "Instalações do Recanto Anjos Peludos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-600 uppercase tracking-wide text-primary">
          Sobre o projeto
        </span>
        <h2 className="mt-2 font-display text-3xl font-800 text-balance text-foreground sm:text-4xl">
          A história do Joaquim
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Quando encontramos Joaquim, a cena era devastadora. Ele havia sido
          abandonado após sofrer agressões brutais que causaram uma grave
          fratura em sua coluna. Sem forças, ele se arrastava usando apenas as
          patas dianteiras. Mesmo diante de tanta dor, Joaquim ainda demonstrava
          vontade de viver — e não podíamos deixá-lo naquela situação.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <Reveal className="grid grid-cols-2 gap-3">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-secondary p-5">
            <h3 className="font-display text-lg font-700 text-secondary-foreground">
              O diagnóstico
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Após a avaliação veterinária, recebemos a confirmação que mais
              temíamos: Joaquim sofreu uma fratura na coluna. A boa notícia é que
              existe esperança — segundo o veterinário, ele pode voltar a andar,
              mas precisa realizar a cirurgia o quanto antes.
            </p>
          </div>

          <a
            href="#doar"
            className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border"
            aria-label="Assista ao vídeo institucional"
          >
            <Image
              src="/images/joaquim-3.png"
              alt="Vídeo institucional sobre o resgate de Joaquim"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/30" />
            <PlayCircle
              className="relative h-16 w-16 text-background drop-shadow-lg transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>

      {/* Use of funds */}
      <div className="mt-16">
        <Reveal className="text-center">
          <h3 className="font-display text-2xl font-800 text-foreground sm:text-3xl">
            Para onde sua doação vai
          </h3>
          <p className="mt-2 text-muted-foreground">
            Todos os recursos serão destinados exclusivamente ao tratamento de
            Joaquim.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useOfFunds.map((item, i) => {
            const Icon = fundsIcons[item.icon];
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-display text-base font-700 text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
