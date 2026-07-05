import { getTranslations } from "next-intl/server";
import DarkCtaBand from "@/components/shared/DarkCtaBand";

export default async function CtaSection() {
  const t = await getTranslations("AiAutomation.closingCta");

  return (
    <DarkCtaBand
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      body={t("body")}
      ctaLabel={t("cta")}
      ctaHref="/about#contact"
    />
  );
}
