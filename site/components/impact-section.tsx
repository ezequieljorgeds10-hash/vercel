import { HandHeart, PiggyBank, CalendarClock, Users } from "lucide-react";
import { campaign, formatBRL } from "@/lib/campaign";
import { Reveal } from "@/components/reveal";

export function ImpactSection() {
  const stats = [
    {
      icon: HandHeart,
      value: "1",
      label: "Vida sendo salva",
    },
    {
      icon: PiggyBank,
      value: formatBRL(campaign.raised),
      label: "Arrecadado até agora",
    },
    {
      icon: CalendarClock,
      value: `${campaign.daysLeft}`,
      label: "Dias restantes",
    },
    {
      icon: Users,
      value: `${campaign.supporters}`,
      label: "Apoiadores",
    },
  ];

  return (
    <section className="mx-auto -mt-10 max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
              <stat.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-3 font-display text-2xl font-800 text-foreground">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
