"use client";

import { useState } from "react";
import { Heart, Menu, X, PawPrint } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Campanha", href: "#doar" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-700 text-foreground">
              Recanto Anjos Peludos
            </span>
            <span className="text-xs text-muted-foreground">Instituto do Amor</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#doar"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-600 text-accent-foreground shadow-sm transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Doar Agora
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-500 text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#doar"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-600 text-accent-foreground"
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
                Doar Agora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
