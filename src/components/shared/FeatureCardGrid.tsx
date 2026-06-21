import { LucideIcon } from "lucide-react";

interface CardItem {
  Icon: LucideIcon;
  title: string;
  bullets: string[];
}

interface FeatureCardGridProps {
  eyebrow: string;
  heading: string;
  items: CardItem[];
  quote?: string;
}

export default function FeatureCardGrid({ eyebrow, heading, items, quote }: FeatureCardGridProps) {
  return (
    <section className="bg-paper py-20 lg:py-28 border-y border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight max-w-3xl mb-14"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface rounded p-7 border border-bone flex flex-col gap-4"
            >
              <item.Icon size={22} className="text-ochre-deep shrink-0" aria-hidden="true" />
              <h3 className="font-display font-semibold text-ink text-xl leading-snug">
                {item.title}
              </h3>
              {item.bullets.length > 0 && (
                <ul className="space-y-1.5 mt-1" role="list">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-taupe">
                      <span className="mt-[0.35rem] shrink-0 w-1 h-1 rounded-full bg-ochre-deep" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {quote && (
          <p className="mt-12 text-base text-taupe italic border-l-2 border-ochre pl-5 max-w-2xl">
            {quote}
          </p>
        )}
      </div>
    </section>
  );
}
