export default function OperationalTriageDiagram() {
  return (
    <svg
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Operational triage workflow: incoming requests are classified, routed, and pre-filled by AI to cut manual handling time"
      className="w-full h-auto rounded"
      style={{ background: "#F1F4F6" }}
    >
      <defs>
        <marker
          id="triage-arrow"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#0F4E53" fillOpacity="0.65" />
        </marker>
      </defs>

      {/* Background */}
      <rect width="520" height="380" fill="#F1F4F6" />

      {/* Eyebrow */}
      <text
        x="12"
        y="24"
        fontFamily="'JetBrains Mono', 'IBM Plex Mono', monospace"
        fontSize="11"
        letterSpacing="1.5"
        fill="#0F4E53"
      >
        {"// OPERATIONAL TRIAGE"}
      </text>

      {/* ── INPUT BOXES ─────────────────────────────────────────────── */}

      {/* Box 1 — Email */}
      <rect x="8" y="48" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <rect x="18" y="64" width="22" height="16" rx="2" fill="none" stroke="#0F4E53" strokeWidth="1.5" />
      <polyline points="18,64 29,73 40,64" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="52" y="78" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Email</text>
      <text x="52" y="94" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">Inbound message</text>

      {/* Box 2 — Web Form */}
      <rect x="8" y="152" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <rect x="18" y="167" width="22" height="26" rx="2" fill="none" stroke="#0F4E53" strokeWidth="1.5" />
      <line x1="22" y1="174" x2="36" y2="174" stroke="#0F4E53" strokeWidth="1.2" />
      <line x1="22" y1="180" x2="36" y2="180" stroke="#0F4E53" strokeWidth="1.2" />
      <line x1="22" y1="186" x2="30" y2="186" stroke="#0F4E53" strokeWidth="1.2" />
      <text x="52" y="182" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Web Form</text>
      <text x="52" y="198" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">Submission</text>

      {/* Box 3 — Support Ticket */}
      <rect x="8" y="256" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <text x="29" y="298" fontFamily="monospace" fontSize="20" fontWeight="700" fill="#0F4E53" textAnchor="middle">#</text>
      <text x="52" y="286" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Support Ticket</text>
      <text x="52" y="302" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">System request</text>

      {/* ── CONNECTORS: Inputs → AI Engine ──────────────────────────── */}
      <path d="M 146 82 C 154 82 154 186 162 186" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />
      <path d="M 146 186 H 162" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />
      <path d="M 146 290 C 154 290 154 186 162 186" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />

      {/* ── AI ENGINE ───────────────────────────────────────────────── */}
      <rect x="162" y="36" width="196" height="282" rx="8" fill="#121A20" stroke="#5FC2C9" strokeWidth="1.5" />

      {/* Engine header label */}
      <text
        x="260"
        y="57"
        fontFamily="'JetBrains Mono', 'IBM Plex Mono', monospace"
        fontSize="12"
        fontWeight="700"
        fill="#5FC2C9"
        textAnchor="middle"
        letterSpacing="2"
      >
        AI TRIAGE ENGINE
      </text>
      <line x1="180" y1="67" x2="340" y2="67" stroke="#5FC2C9" strokeWidth="0.5" strokeOpacity="0.35" />

      {/* Step 1 — Classify */}
      <rect x="178" y="75" width="162" height="60" rx="5" fill="#1A252E" />
      <circle cx="197" cy="105" r="11" fill="#5FC2C9" fillOpacity="0.15" stroke="#5FC2C9" strokeWidth="1" strokeOpacity="0.45" />
      <text x="197" y="110" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700" fill="#5FC2C9" textAnchor="middle">01</text>
      <text x="218" y="100" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="white">Classify</text>
      <text x="218" y="116" fontFamily="system-ui, sans-serif" fontSize="10" fill="#7E919D">Type, topic &amp; urgency</text>

      {/* Step 2 — Route */}
      <rect x="178" y="145" width="162" height="60" rx="5" fill="#1A252E" />
      <circle cx="197" cy="175" r="11" fill="#5FC2C9" fillOpacity="0.15" stroke="#5FC2C9" strokeWidth="1" strokeOpacity="0.45" />
      <text x="197" y="180" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700" fill="#5FC2C9" textAnchor="middle">02</text>
      <text x="218" y="170" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="white">Route</text>
      <text x="218" y="186" fontFamily="system-ui, sans-serif" fontSize="10" fill="#7E919D">Team, queue &amp; priority</text>

      {/* Step 3 — Pre-fill */}
      <rect x="178" y="215" width="162" height="60" rx="5" fill="#1A252E" />
      <circle cx="197" cy="245" r="11" fill="#5FC2C9" fillOpacity="0.15" stroke="#5FC2C9" strokeWidth="1" strokeOpacity="0.45" />
      <text x="197" y="250" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700" fill="#5FC2C9" textAnchor="middle">03</text>
      <text x="218" y="240" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="white">Pre-fill</text>
      <text x="218" y="256" fontFamily="system-ui, sans-serif" fontSize="10" fill="#7E919D">Draft response &amp; fields</text>

      {/* ── CONNECTORS: AI Engine → Outputs ─────────────────────────── */}
      <path d="M 358 186 C 366 186 366 82 374 82" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />
      <path d="M 358 186 H 374" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />
      <path d="M 358 186 C 366 186 366 290 374 290" fill="none" stroke="#0F4E53" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#triage-arrow)" />

      {/* ── OUTPUT BOXES ────────────────────────────────────────────── */}

      {/* Out 1 — Urgent */}
      <rect x="374" y="48" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <rect x="374" y="48" width="4" height="68" rx="2" fill="#0F4E53" />
      <text x="388" y="78" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Urgent</text>
      <text x="388" y="94" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">Pre-filled · Escalated</text>

      {/* Out 2 — Standard */}
      <rect x="374" y="152" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <rect x="374" y="152" width="4" height="68" rx="2" fill="#55636B" />
      <text x="388" y="182" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Standard</text>
      <text x="388" y="198" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">Pre-filled · Queued</text>

      {/* Out 3 — Routine */}
      <rect x="374" y="256" width="138" height="68" rx="6" fill="white" stroke="#D7DEE2" strokeWidth="1.5" />
      <rect x="374" y="256" width="4" height="68" rx="2" fill="#B5C3CB" />
      <text x="388" y="286" fontFamily="'Schibsted Grotesk', system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#1A232B">Routine</text>
      <text x="388" y="302" fontFamily="system-ui, sans-serif" fontSize="10" fill="#55636B">Auto-resolved</text>

      {/* ── BOTTOM STAT ─────────────────────────────────────────────── */}
      <line x1="12" y1="342" x2="508" y2="342" stroke="#D7DEE2" strokeWidth="1" />
      <text
        x="260"
        y="362"
        fontFamily="'JetBrains Mono', 'IBM Plex Mono', monospace"
        fontSize="10"
        letterSpacing="0.5"
        fill="#55636B"
        textAnchor="middle"
      >
        60–80% less manual handling  ·  Zero-touch for routine requests
      </text>
    </svg>
  );
}
