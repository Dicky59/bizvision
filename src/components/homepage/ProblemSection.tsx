import { getTranslations } from "next-intl/server";

export default async function ProblemSection() {
  const t = await getTranslations("HomePage.problem");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text mb-6">
          {t("eyebrow")}
        </p>
        <p className="font-display font-bold text-ink leading-tight max-w-2xl mb-10"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
          {t("lead")}
        </p>
        <ul className="space-y-3 max-w-xl" role="list">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-ink leading-relaxed">
              <span className="mt-[0.35rem] shrink-0 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
