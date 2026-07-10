import { getTranslations } from "next-intl/server";
import ProjectPortfolio from "@/components/homepage/ProjectPortfolio";

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

        <ProjectPortfolio
          screenshots={{
            left: { src: "/portfolio/dashboard.png", alt: "SaaS dashboard project" },
            center: { src: "/portfolio/ai-coding-agent.png", alt: "AI coding agent dashboard" },
            right: { src: "/portfolio/mobile.png", alt: "Mobile app project" },
          }}
        />
      </div>
    </section>
  );
}
