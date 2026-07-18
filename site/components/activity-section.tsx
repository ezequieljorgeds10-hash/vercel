import { Clock, CircleDot } from "lucide-react";
import { recentDonations, updates, formatBRL } from "@/lib/campaign";
import { Reveal } from "@/components/reveal";

export function ActivitySection() {
  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        {/* Recent donations */}
        <Reveal>
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-3 w-3">
              <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <h2 className="font-display text-2xl font-800 text-foreground">
              Doações recentes
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {recentDonations.map((d, i) => (
              <li
                key={`${d.name}-${i}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-sm font-700 text-primary">
                    {d.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="font-600 text-foreground">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.time}</p>
                  </div>
                </div>
                <span className="font-display font-700 text-primary">
                  {formatBRL(d.value)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Updates timeline */}
        <Reveal delay={120}>
          <div className="mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-display text-2xl font-800 text-foreground">
              Atualizações da campanha
            </h2>
          </div>
          <ol className="relative flex flex-col gap-6 border-l border-border pl-6">
            {updates.map((u) => (
              <li key={u.title} className="relative">
                <CircleDot
                  className="absolute -left-[1.9rem] top-0.5 h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs font-600 uppercase tracking-wide text-accent">
                  {u.tag}
                </span>
                <h3 className="mt-1 font-display text-base font-700 text-foreground">
                  {u.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {u.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
