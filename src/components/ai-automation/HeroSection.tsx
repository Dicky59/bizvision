import { getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";

export default async function HeroSection() {
  const t = await getTranslations("AiAutomation.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      headline={t("headline")}
      body={t("body")}
      ctaPrimary={{ label: t("ctaPrimary"), href: "/contact" }}
      ctaSecondary={{ label: t("ctaSecondary"), href: "#use-cases" }}
      sub={t("sub")}
      image={{ label: "AI and agentic workflows — abstract flow motif, not robots", dimensions: "1600×1000" }}
    />
  );
}
