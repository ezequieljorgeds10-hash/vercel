"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/campaign";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  const active = testimonials[index];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-600 uppercase tracking-wide text-primary">
          Depoimentos
        </span>
        <h2 className="mt-2 font-display text-3xl font-800 text-balance text-foreground sm:text-4xl">
          Quem faz essa história acontecer
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <Quote
            className="absolute right-6 top-6 h-10 w-10 text-secondary"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src={active.image}
                alt={`Foto de ${active.name}`}
                fill
                loading="lazy"
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-pretty leading-relaxed text-foreground">
                &ldquo;{active.text}&rdquo;
              </p>
              <p className="mt-4 font-display font-700 text-foreground">
                {active.name}
              </p>
              <p className="text-sm text-muted-foreground">{active.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
