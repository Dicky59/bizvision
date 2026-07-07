import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/homepage/HeroSection";
import ProblemSection from "@/components/homepage/ProblemSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import WhySection from "@/components/homepage/WhySection";
import ClientsSection from "@/components/homepage/ClientsSection";
import ProcessSection from "@/components/homepage/ProcessSection";
import GuaranteesSection from "@/components/homepage/GuaranteesSection";
import ExperienceSection from "@/components/homepage/ExperienceSection";
import ClosingCtaSection from "@/components/homepage/ClosingCtaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.meta" });
  const title = t("title");
  const description = t("description");
  const canonical = locale === "en" ? "/" : "/fi";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: "/", fi: "/fi", "x-default": "/" },
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

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhySection />
      <ClientsSection />
      <ProcessSection />
      <GuaranteesSection />
      <ExperienceSection />
      <ClosingCtaSection />
    </>
  );
}
