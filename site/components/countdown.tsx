"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  daysLeft: number;
};

function getTarget(daysLeft: number) {
  const target = new Date();
  target.setDate(target.getDate() + daysLeft);
  target.setHours(23, 59, 59, 0);
  return target.getTime();
}

export function Countdown({ daysLeft }: CountdownProps) {
  const [target] = useState(() => getTarget(daysLeft));
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const total = remaining ?? 0;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  const items = [
    { label: "Dias", value: days },
    { label: "Horas", value: hours },
    { label: "Min", value: minutes },
    { label: "Seg", value: seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3" aria-label="Tempo restante da campanha">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-w-[3.5rem] flex-col items-center rounded-xl bg-secondary px-2 py-2 sm:min-w-[4rem] sm:px-3"
        >
          <span className="font-display text-xl font-700 tabular-nums text-primary sm:text-2xl">
            {remaining === null ? "--" : String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
