"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";

export interface ServiceItem {
  tag: string;
  title: string;
  body: string;
  bullets?: string[];
}

interface ServiceRowProps {
  item: ServiceItem;
  Panel: ComponentType<{ className?: string }>;
  onActivate: () => void;
}

export default function ServiceRow({ item, Panel, onActivate }: ServiceRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = rowRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setActive(true);
          onActivate();
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rowRef} className="relative grid grid-cols-[34px_1fr] gap-x-5 mb-16 last:mb-0">
      <div className="relative">
        <span
          aria-hidden="true"
          className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-[1.5px] transition-colors duration-500 ${
            active
              ? "border-ochre-lite bg-ochre-lite shadow-[0_0_6px_2px_var(--color-ochre-lite)]"
              : "border-taupe bg-paper"
          }`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-3 inline-block">
            {item.tag}
          </span>
          <h3 className="font-display font-semibold text-ink text-xl leading-snug mb-2.5">
            {item.title}
          </h3>
          <p className="text-[14.5px] text-taupe leading-relaxed max-w-md mb-3.5">
            {item.body}
          </p>
          {item.bullets && item.bullets.length > 0 && (
            <ul className="space-y-1.5" role="list">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-taupe">
                  <span
                    aria-hidden="true"
                    className="mt-[0.35rem] shrink-0 w-1 h-1 rounded-full bg-ochre-deep"
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={`bg-hero-bg aspect-[4/3] flex items-center justify-center transition-all duration-700 ${
            active ? "opacity-100 translate-y-0" : "opacity-55 translate-y-1.5"
          }`}
        >
          <Panel className="w-[82%] h-[82%]" />
        </div>
      </div>
    </div>
  );
}
