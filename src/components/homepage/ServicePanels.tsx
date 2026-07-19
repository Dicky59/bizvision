interface ServicePanelProps {
  className?: string;
}

const lineStyle = { stroke: "var(--color-hero-text)" };
const lineFillStyle = { fill: "var(--color-hero-text)" };
const accentStyle = { stroke: "var(--color-ochre-lite)" };
const accentFillStyle = { fill: "var(--color-ochre-lite)" };
const mutedStyle = { stroke: "var(--color-taupe)" };
const mutedFillStyle = { fill: "var(--color-taupe)" };
const blueStyle = { stroke: "var(--color-icon-blue)" };
const blueFillStyle = { fill: "var(--color-icon-blue)" };
const cyanStyle = { stroke: "var(--color-icon-cyan)" };
const cyanFillStyle = { fill: "var(--color-icon-cyan)" };
const inkFillStyle = { fill: "var(--color-ink)" };
const nodeStyle = { fill: "var(--color-hero-text)", stroke: "var(--color-icon-blue)" };

export function AiAgentsPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" className={className}>
      <rect x="75" y="50" width="50" height="50" rx="6" style={blueStyle} strokeWidth="2" />
      <rect x="83" y="58" width="34" height="34" rx="3" style={cyanStyle} strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="100" cy="75" r="5" style={lineFillStyle} />
      <circle cx="30" cy="35" r="8" style={accentStyle} strokeWidth="1.5" />
      <circle cx="30" cy="35" r="3" style={accentFillStyle} />
      <circle cx="30" cy="115" r="8" style={lineStyle} strokeWidth="1.5" opacity="0.6" />
      <circle cx="30" cy="115" r="3" style={blueFillStyle} />
      <circle cx="170" cy="75" r="10" style={cyanStyle} strokeWidth="2" />
      <path d="M166 75 H174 M170 71 V79" style={cyanStyle} strokeWidth="1.5" />
      <path d="M38 35 H60 V60 H75" style={accentStyle} strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M38 115 H60 V90 H75" style={blueStyle} strokeWidth="1.5" />
      <path d="M125 75 H160" style={lineStyle} strokeWidth="2" />
      <line x1="100" y1="15" x2="100" y2="35" style={mutedStyle} strokeWidth="1" />
      <circle cx="100" cy="15" r="1.5" style={mutedFillStyle} />
      <line x1="100" y1="115" x2="100" y2="135" style={mutedStyle} strokeWidth="1" />
      <circle cx="135" cy="135" r="1.5" style={mutedFillStyle} />
    </svg>
  );
}

export function WebDevPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" className={className}>
      <rect x="20" y="25" width="160" height="100" rx="6" style={lineStyle} strokeWidth="2" />
      <line x1="20" y1="48" x2="180" y2="48" style={lineStyle} strokeWidth="1.5" />
      <circle cx="32" cy="36.5" r="3" style={blueFillStyle} />
      <circle cx="44" cy="36.5" r="3" style={accentFillStyle} />
      <circle cx="56" cy="36.5" r="3" style={mutedFillStyle} />
      <rect x="32" y="60" width="36" height="52" rx="3" style={mutedStyle} strokeWidth="1.5" />
      <line x1="38" y1="70" x2="62" y2="70" style={lineStyle} strokeWidth="1.5" opacity="0.5" />
      <line x1="38" y1="80" x2="54" y2="80" style={lineStyle} strokeWidth="1.5" opacity="0.5" />
      <rect x="78" y="60" width="90" height="22" rx="3" style={{ ...inkFillStyle, stroke: "var(--color-icon-blue)" }} strokeWidth="1" />
      <path d="M84 74 L102 66 L120 72 L138 64 L156 70 L164 63" style={cyanStyle} strokeWidth="2" fill="none" />
      <rect x="78" y="90" width="42" height="22" rx="3" style={accentStyle} strokeWidth="1.5" />
      <circle cx="89" cy="101" r="3" style={accentFillStyle} />
      <line x1="98" y1="101" x2="112" y2="101" style={lineStyle} strokeWidth="1.5" />
      <rect x="126" y="90" width="42" height="22" rx="3" style={lineStyle} strokeWidth="1" opacity="0.7" />
      <line x1="134" y1="97" x2="160" y2="97" style={lineStyle} strokeWidth="1" />
      <line x1="134" y1="104" x2="152" y2="104" style={blueStyle} strokeWidth="1" />
    </svg>
  );
}

export function MobileDevPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" className={className}>
      <path d="M30 20 L50 40 M170 130 L150 110" style={mutedStyle} strokeWidth="1" opacity="0.4" />
      <rect x="65" y="16" width="70" height="118" rx="14" style={lineStyle} strokeWidth="2.5" />
      <rect x="71" y="24" width="58" height="102" rx="8" style={mutedStyle} strokeWidth="1" />
      <rect x="88" y="20" width="24" height="4" rx="2" style={lineFillStyle} />
      <rect x="78" y="34" width="44" height="26" rx="4" style={blueFillStyle} opacity="0.9" />
      <circle cx="88" cy="44" r="4" style={cyanFillStyle} />
      <line x1="96" y1="41" x2="114" y2="41" style={lineStyle} strokeWidth="1.5" />
      <line x1="96" y1="47" x2="108" y2="47" style={lineStyle} strokeWidth="1" />
      <rect x="78" y="68" width="44" height="14" rx="3" style={accentStyle} strokeWidth="1.2" />
      <circle cx="112" cy="75" r="3" style={accentFillStyle} />
      <line x1="84" y1="75" x2="100" y2="75" style={lineStyle} strokeWidth="1" />
      <rect x="78" y="88" width="44" height="14" rx="3" style={lineStyle} strokeWidth="1" opacity="0.5" />
      <circle cx="84" cy="95" r="2" style={blueFillStyle} />
      <line x1="90" y1="95" x2="114" y2="95" style={lineStyle} strokeWidth="1" opacity="0.6" />
      <circle cx="99" cy="119" r="3" style={lineStyle} strokeWidth="1" />
    </svg>
  );
}

export function UiUxPanel({ className }: ServicePanelProps) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" className={className}>
      <rect x="25" y="25" width="65" height="45" rx="4" style={lineStyle} strokeWidth="1.5" opacity="0.6" />
      <circle cx="42" cy="47.5" r="5.5" style={accentFillStyle} />
      <line x1="56" y1="44" x2="80" y2="44" style={lineStyle} strokeWidth="1.5" opacity="0.4" />
      <line x1="56" y1="51" x2="72" y2="51" style={mutedStyle} strokeWidth="1.5" />

      <rect x="25" y="80" width="65" height="45" rx="4" style={lineStyle} strokeWidth="1.5" opacity="0.6" />
      <rect x="36" y="93" width="43" height="7" rx="1.5" style={blueFillStyle} opacity="0.8" />
      <rect x="36" y="105" width="28" height="5" rx="1" style={mutedFillStyle} opacity="0.5" />

      <rect x="105" y="25" width="70" height="100" rx="5" style={blueStyle} strokeWidth="2" />

      <line x1="117" y1="40" x2="163" y2="40" style={lineStyle} strokeWidth="1.5" />
      <line x1="117" y1="52" x2="147" y2="52" style={mutedStyle} strokeWidth="1.5" />

      <path
        d="M123 88 L136 101 L161 74"
        style={cyanStyle}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="105" cy="25" r="2.5" style={nodeStyle} strokeWidth="1" />
      <circle cx="175" cy="25" r="2.5" style={nodeStyle} strokeWidth="1" />
      <circle cx="105" cy="125" r="2.5" style={nodeStyle} strokeWidth="1" />
      <circle cx="175" cy="125" r="2.5" style={nodeStyle} strokeWidth="1" />
    </svg>
  );
}
