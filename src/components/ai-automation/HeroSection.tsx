import PageHero from "@/components/shared/PageHero";
import { getTranslations } from "next-intl/server";

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
      image={{
        src: "/illustrations/data-extraction.svg",
        alt: "",
        label: "AI & intelligent automation hero — abstract intelligence visual",
        dimensions: "1600×1000",
      }}
    />
  );
}
