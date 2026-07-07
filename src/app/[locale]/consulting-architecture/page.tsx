import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/consulting-architecture/HeroSection";
import WhereIHelpSection from "@/components/consulting-architecture/WhereIHelpSection";
import ComparisonSection from "@/components/consulting-architecture/ComparisonSection";
import PublicSectorSection from "@/components/consulting-architecture/PublicSectorSection";
import ProcessSection from "@/components/consulting-architecture/ProcessSection";
import CtaSection from "@/components/consulting-architecture/CtaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

const PATH = "/consulting-architecture";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Consulting.meta" });
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

export default function ConsultingArchitecturePage() {
  return (
    <>
      <HeroSection />
      <WhereIHelpSection />
      <ComparisonSection />
      <PublicSectorSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
