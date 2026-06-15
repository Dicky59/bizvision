import { getTranslations } from "next-intl/server";

interface WhyItem {
  title: string;
  body: string;
  bullets: string[];
}

export default async function WhySection() {
  const t = await getTranslations("HomePage.why");
  const items = t.raw("items") as WhyItem[];

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text mb-12">
          {t("eyebrow")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-14">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-8 h-px bg-accent" aria-hidden="true" />
              <h3
                className="font-display font-semibold text-ink leading-snug"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
              >
                {item.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">{item.body}</p>
              <ul className="space-y-1.5" role="list">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-[0.35rem] shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
