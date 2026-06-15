import { getTranslations } from "next-intl/server";

interface ServiceItem {
  title: string;
  body: string;
  bullets?: string[];
}

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="bg-surface py-20 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text mb-6">
          {t("eyebrow")}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight max-w-3xl mb-4"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          {t("heading")}
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-14">
          {t("subhead")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-paper rounded p-7 border border-line flex flex-col gap-3"
            >
              <h3 className="font-display font-semibold text-ink text-xl leading-snug">
                {item.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">{item.body}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="space-y-1.5 mt-1" role="list">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-[0.35rem] shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
