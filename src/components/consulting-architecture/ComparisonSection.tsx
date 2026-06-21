import { getTranslations } from "next-intl/server";

export default async function ComparisonSection() {
  const t = await getTranslations("Consulting.comparison");

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-14">
          {t("eyebrow")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-bone">
          <div className="pb-10 md:pb-0 md:pr-12 lg:pr-20">
            <h2 className="font-display font-semibold text-ink text-xl leading-snug mb-4">
              {t("leftHeading")}
            </h2>
            <p className="text-base text-taupe leading-relaxed">{t("leftBody")}</p>
          </div>

          <div className="pt-10 md:pt-0 md:pl-12 lg:pl-20">
            <h2 className="font-display font-semibold text-ink text-xl leading-snug mb-4">
              {t("rightHeading")}
            </h2>
            <p className="text-base text-taupe leading-relaxed">{t("rightBody")}</p>
          </div>
        </div>

        <p className="mt-12 pt-10 border-t border-bone text-base text-taupe leading-relaxed max-w-2xl italic">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
