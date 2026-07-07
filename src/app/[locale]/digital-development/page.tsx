import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/digital-development/HeroSection";
import WhatWeBuildSection from "@/components/digital-development/WhatWeBuildSection";
import HowWeBuildItSection from "@/components/digital-development/HowWeBuildItSection";
import WhoItsForSection from "@/components/digital-development/WhoItsForSection";
import ProcessSection from "@/components/digital-development/ProcessSection";
import CtaSection from "@/components/digital-development/CtaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

const PATH = "/digital-development";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DigitalDevelopment.meta" });
  const title = t("title");
  const description = t("description");
  const canonical = locale === "en" ? PATH : `/fi${PATH}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: PATH, fi: `/fi${PATH}`, "x-default": PATH },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === "fi" ? "fi_FI" : "en_GB",
    },
    twitter: { title, description },
  };
}

export default function DigitalDevelopmentPage() {
  return (
    <>
      <HeroSection />
      <WhatWeBuildSection />
      <HowWeBuildItSection />
      <WhoItsForSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
