import { getTranslations } from "next-intl/server";

export default async function GuaranteesSection() {
  const t = await getTranslations("HomePage.guarantees");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-surface py-20 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text mb-6">
          {t("eyebrow")}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight mb-12"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          {t("heading")}
        </h2>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 bg-paper rounded border border-line"
            >
              <span
                className="mt-[0.35rem] shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm text-ink leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
