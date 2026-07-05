import PageHero from "@/components/shared/PageHero";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("DigitalDevelopment.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      headline={t("headline")}
      body={t("body")}
      ctaPrimary={{ label: t("ctaPrimary"), href: "/about#contact" }}
      ctaSecondary={{ label: t("ctaSecondary"), href: "/ai-automation" }}
      sub={t("sub")}
      image={{
        src: "/illustrations/programming.svg",
        alt: "",
        label: "Digital development hero — abstract engineering visual",
        dimensions: "1600×1000",
      }}
    />
  );
}
