import { getTranslations } from "next-intl/server";
import Placeholder from "@/components/ui/Placeholder";

export default async function ExperienceSection() {
  const t = await getTranslations("HomePage.experience");

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-12">
          {t("eyebrow")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <p className="font-display font-semibold text-ink text-lg leading-snug mb-1">
              {t("heading")}
            </p>
            <p className="text-base text-taupe leading-relaxed">
              {t("body")}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-display font-semibold text-ink text-lg leading-snug mb-1">
              {t("projectTypesLabel")}
            </p>
            <p className="text-base text-taupe leading-relaxed">
              {t("projectTypesBody")}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-display font-semibold text-ink text-lg leading-snug mb-1">
              {t("approachLabel")}
            </p>
            <p className="text-base text-taupe leading-relaxed">
              {t("approachBody")}
            </p>
          </div>
        </div>

        <Placeholder
          label="Project Portfolio"
          dimensions="1600×900"
          ratio="16/9"
        />
      </div>
    </section>
  );
}
