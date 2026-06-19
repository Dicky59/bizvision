import { getTranslations } from "next-intl/server";
import { Code2, Smartphone, Paintbrush, Bot } from "lucide-react";

interface ServiceItem {
  title: string;
  body: string;
  bullets?: string[];
}

const icons = [Code2, Smartphone, Paintbrush, Bot] as const;

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="bg-paper py-20 lg:py-28 border-y border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
          {t("eyebrow")}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight max-w-3xl mb-4"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          {t("heading")}
        </h2>
        <p className="text-lg text-taupe leading-relaxed max-w-2xl mb-14">
          {t("subhead")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-surface rounded p-7 border border-bone flex flex-col gap-4"
              >
                {Icon && (
                  <Icon
                    size={22}
                    className="text-ochre-deep shrink-0"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-display font-semibold text-ink text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-taupe leading-relaxed">{item.body}</p>
                {item.bullets && item.bullets.length > 0 && (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
