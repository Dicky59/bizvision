interface AgentLoopDiagramProps {
  ariaLabel: string;
}

export default function AgentLoopDiagram({ ariaLabel }: AgentLoopDiagramProps) {
  return (
    <figure
      role="img"
      aria-label={ariaLabel}
      className="w-full"
    >
      <svg
        viewBox="0 108 420 190"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
        focusable="false"
      >
        {/* Node styles via inline — avoids Tailwind purge of dynamic SVG classes */}
        <defs>
          <style>{`
            .node-box { fill: var(--color-surface); stroke: var(--color-bone); stroke-width: 1.5; rx: 6; }
            .node-label { font-family: var(--font-display); font-size: 13px; fill: var(--color-ink); font-weight: 600; text-anchor: middle; dominant-baseline: middle; }
            .arrow { stroke: var(--color-ochre-deep); stroke-width: 1.5; fill: none; marker-end: url(#arrowhead); }
            .loop-arrow { stroke: var(--color-ochre); stroke-width: 1.5; fill: none; stroke-dasharray: 4 3; marker-end: url(#arrowhead-loop); }
            .node-sub { font-family: var(--font-mono); font-size: 11px; fill: var(--color-taupe); text-anchor: middle; dominant-baseline: middle; }
          `}</style>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--color-ochre-deep)" />
          </marker>
          <marker id="arrowhead-loop" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="var(--color-ochre)" />
          </marker>
        </defs>

        {/* Input node */}
        <rect x="10" y="130" width="90" height="44" rx="6" className="node-box" />
        <text x="55" y="152" className="node-label">Input</text>

        {/* Arrow: Input → Reason */}
        <line x1="100" y1="152" x2="152" y2="152" className="arrow" />

        {/* Reason node */}
        <rect x="154" y="118" width="110" height="68" rx="6" className="node-box" />
        <text x="209" y="147" className="node-label">Reason</text>
        <text x="209" y="163" className="node-sub">plan · decide</text>

        {/* Arrow: Reason → Act */}
        <line x1="264" y1="152" x2="316" y2="152" className="arrow" />

        {/* Act node */}
        <rect x="318" y="118" width="90" height="68" rx="6" className="node-box" />
        <text x="363" y="147" className="node-label">Act</text>
        <text x="363" y="163" className="node-sub">tools · APIs</text>

        {/* Arrow: Act → Check (down then left) */}
        <path d="M363,186 L363,230 L209,230 L209,186" className="arrow" />

        {/* Check node sits below Reason, centered on the loop-back path */}
        <rect x="154" y="236" width="110" height="44" rx="6" className="node-box" />
        <text x="209" y="258" className="node-label">Check</text>

        {/* Loop-back arrow from Check up to Reason (dashed ochre) */}
        <path d="M154,258 L80,258 L80,152 L154,152" className="loop-arrow" />

        {/* Loop label */}
        <text x="42" y="206" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fill: "var(--color-ochre)", textAnchor: "middle" }}>repeat</text>
      </svg>
    </figure>
  );
}
