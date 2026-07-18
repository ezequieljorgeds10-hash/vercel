"use client";

import { useEffect, useRef, useState } from "react";

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => setWidth(value), 150);
            observer.unobserve(entry.target);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`h-3 w-full overflow-hidden rounded-full bg-secondary ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso da arrecadação"
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
