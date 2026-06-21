import { getTranslations } from "next-intl/server";
import CredibilityBlock from "@/components/shared/CredibilityBlock";

export default async function BackgroundSection() {
  const t = await getTranslations("About.background");

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-14">
          {t("eyebrow")}
        </p>

        <div className="max-w-2xl space-y-5 text-base text-taupe leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <CredibilityBlock text={t("credibilityText")} />
      </div>
    </section>
  );
}
