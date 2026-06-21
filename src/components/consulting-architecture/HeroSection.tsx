import { getTranslations } from "next-intl/server";
import PageHero from "@/components/shared/PageHero";

export default async function HeroSection() {
  const t = await getTranslations("Consulting.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      headline={t("headline")}
      body={t("body")}
      ctaPrimary={{ label: t("ctaPrimary"), href: "/about" }}
      ctaSecondary={{ label: t("ctaSecondary"), href: "/digital-development" }}
      sub={t("sub")}
    />
  );
}
