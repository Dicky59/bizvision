"use client";

import { useState } from "react";
import ServiceRow, { type ServiceItem } from "./ServiceRow";
import { AiAgentsPanel, WebDevPanel, MobileDevPanel, UiUxPanel } from "./ServicePanels";

const panels = [AiAgentsPanel, WebDevPanel, MobileDevPanel, UiUxPanel] as const;

interface ServicesTraceProps {
  items: ServiceItem[];
}

export default function ServicesTrace({ items }: ServicesTraceProps) {
  const [activeCount, setActiveCount] = useState(0);
  const fillPct = items.length > 0 ? (activeCount / items.length) * 100 : 0;

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-[5px] top-2.5 bottom-2.5 w-px bg-bone"
      />
      <div
        aria-hidden="true"
        className="absolute left-[5px] top-2.5 w-px bg-ochre shadow-[0_0_8px_var(--color-ochre-lite)] transition-[height] duration-1000 ease-out"
        style={{ height: `${fillPct}%` }}
      />

      {items.map((item, i) => (
        <ServiceRow
          key={item.tag}
          item={item}
          Panel={panels[i] ?? panels[0]}
          onActivate={() => setActiveCount((c) => c + 1)}
        />
      ))}
    </div>
  );
}
