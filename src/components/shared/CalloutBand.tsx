interface CalloutBandProps {
  eyebrow: string;
  heading: string;
  bullets: string[];
}

export default function CalloutBand({ eyebrow, heading, bullets }: CalloutBandProps) {
  return (
    <section className="bg-surface border-y border-bone py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
              {eyebrow}
            </p>
            <h2
              className="font-display font-bold text-ink leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              {heading}
            </h2>
          </div>

          <ul className="space-y-4 pt-2" role="list">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-taupe leading-relaxed">
                <span className="mt-[0.45rem] shrink-0 w-1.5 h-1.5 rounded-full bg-ochre-deep" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
