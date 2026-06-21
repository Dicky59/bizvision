interface BadgePillCloudProps {
  eyebrow: string;
  audienceLabel: string;
  audience: string;
  projectsLabel: string;
  pills: string[];
}

export default function BadgePillCloud({ eyebrow, audienceLabel, audience, projectsLabel, pills }: BadgePillCloudProps) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-14">
          {eyebrow}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2
              className="font-display font-bold text-ink leading-tight mb-5"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              {audienceLabel}
            </h2>
            <p className="text-base text-taupe leading-relaxed">{audience}</p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-ink text-lg mb-6">
              {projectsLabel}
            </h3>
            <ul className="flex flex-wrap gap-2.5" role="list">
              {pills.map((pill, i) => (
                <li
                  key={i}
                  className="border border-bone bg-surface rounded-full px-4 py-1.5 text-sm text-taupe"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
