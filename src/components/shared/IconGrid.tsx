import { LucideIcon } from "lucide-react";

interface IconGridItem {
  Icon: LucideIcon;
  title: string;
  body: string;
}

interface IconGridProps {
  eyebrow: string;
  items: IconGridItem[];
  background?: "paper" | "surface";
}

export default function IconGrid({ eyebrow, items, background = "surface" }: IconGridProps) {
  const bg = background === "paper" ? "bg-paper" : "bg-surface";

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-14">
          {eyebrow}
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
          {items.map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="shrink-0 mt-0.5">
                <item.Icon size={22} className="text-ochre-deep" aria-hidden="true" />
              </div>
              <div>
                <dt className="font-display font-semibold text-ink text-lg leading-snug mb-2">
                  {item.title}
                </dt>
                <dd className="text-base text-taupe leading-relaxed">{item.body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
