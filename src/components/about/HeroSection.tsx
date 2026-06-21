import { getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";

export default async function HeroSection() {
  const t = await getTranslations("About.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      headline={t("headline")}
      body={t("body")}
      ctaPrimary={{ label: t("ctaPrimary"), href: "/about#contact" }}
    />
  );
}
