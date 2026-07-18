"use client";

import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";
import { faqs } from "@/lib/campaign";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-sm font-600 uppercase tracking-wide text-primary">
            Dúvidas
          </span>
          <h2 className="mt-2 font-display text-3xl font-800 text-balance text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-600 text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#doar"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-700 text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Doe e ajude Joaquim a voltar a andar
          </a>
        </div>
      </div>
    </section>
  );
}
