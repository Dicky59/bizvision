interface ServicePanelProps {
  className?: string;
}

const lineStyle = { stroke: "var(--color-hero-text)" };
const accentStyle = { stroke: "var(--color-ochre-lite)" };
const accentFillStyle = { fill: "var(--color-ochre-lite)" };

export function AiAgentsPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={className}>
      <circle cx="30" cy="60" r="6" strokeWidth="1.5" style={accentStyle} />
      <circle cx="80" cy="30" r="6" strokeWidth="1.5" style={lineStyle} />
      <circle cx="80" cy="90" r="6" strokeWidth="1.5" style={lineStyle} />
      <circle cx="132" cy="60" r="7" style={accentFillStyle} />
      <path d="M36 60 L74 32" strokeWidth="1.2" style={lineStyle} />
      <path d="M36 60 L74 88" strokeWidth="1.2" style={lineStyle} />
      <path d="M86 30 L126 56" strokeWidth="1.2" style={accentStyle} />
      <path d="M86 90 L126 64" strokeWidth="1.2" style={accentStyle} />
    </svg>
  );
}

export function WebDevPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={className}>
      <rect x="20" y="24" width="120" height="72" strokeWidth="1.2" style={lineStyle} />
      <line x1="20" y1="38" x2="140" y2="38" strokeWidth="1" style={lineStyle} />
      <circle cx="28" cy="31" r="2" style={accentFillStyle} />
      <polyline
        points="32,84 52,68 68,76 88,50 108,60 128,44"
        strokeWidth="1.6"
        style={accentStyle}
      />
      <line x1="32" y1="90" x2="128" y2="90" strokeWidth="1" style={lineStyle} />
    </svg>
  );
}

export function MobileDevPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={className}>
      <rect x="60" y="14" width="40" height="92" rx="4" strokeWidth="1.4" style={lineStyle} />
      <line x1="66" y1="26" x2="94" y2="26" strokeWidth="1.4" style={accentStyle} />
      <rect x="66" y="38" width="28" height="14" strokeWidth="1" style={lineStyle} />
      <rect x="66" y="56" width="28" height="6" style={accentFillStyle} />
      <rect x="66" y="66" width="18" height="6" strokeWidth="1" style={lineStyle} />
      <circle cx="80" cy="98" r="3" strokeWidth="1.2" style={lineStyle} />
    </svg>
  );
}

export function UiUxPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={className}>
      <rect x="20" y="20" width="52" height="34" strokeWidth="1.2" style={lineStyle} />
      <rect x="20" y="60" width="52" height="34" strokeWidth="1.2" style={lineStyle} />
      <rect x="80" y="20" width="60" height="74" strokeWidth="1.4" style={accentStyle} />
      <line x1="88" y1="32" x2="132" y2="32" strokeWidth="1" style={lineStyle} />
      <line x1="88" y1="44" x2="120" y2="44" strokeWidth="1" style={lineStyle} />
      <path d="M100 70 L112 82 L134 58" strokeWidth="1.6" style={accentStyle} />
    </svg>
  );
}
