import Link from "next/link";
import { type ReactNode } from "react";
import Placeholder from "@/components/ui/Placeholder";

export interface FeatureRow {
  title: string;
  body: string;
  link?: { label: string; href: string };
  highlighted?: boolean;
  imagePlaceholderLabel: string;
  illustration?: ReactNode;
}

interface AlternatingRowsProps {
  eyebrow: string;
  rows: FeatureRow[];
  background?: "paper" | "surface";
  id?: string;
}

export default function AlternatingRows({ eyebrow, rows, background = "paper", id }: AlternatingRowsProps) {
  const bg = background === "surface" ? "bg-surface" : "bg-paper";

  return (
    <section id={id} className={`${bg} py-20 lg:py-28`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-16">
          {eyebrow}
        </p>

        <div className="space-y-20 lg:space-y-28">
          {rows.map((row, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  imageLeft ? "" : "lg:[&>*:first-child]:order-last"
                }`}
              >
                <div>
                  {row.illustration ?? (
                    <Placeholder
                      label={row.imagePlaceholderLabel}
                      dimensions="800×500"
                      ratio="16/10"
                    />
                  )}
                </div>

                <div className={row.highlighted ? "border-l-2 border-ochre pl-6" : ""}>
                  <h3
                    className="font-display font-bold text-ink leading-tight mb-4"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                  >
                    {row.title}
                  </h3>
                  <p className="text-base text-taupe leading-relaxed mb-5">{row.body}</p>
                  {row.link && (
                    <Link
                      href={row.link.href}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ochre-deep hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep"
                    >
                      {row.link.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
