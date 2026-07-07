import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/about/HeroSection";
import BackgroundSection from "@/components/about/BackgroundSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import WorkingModelSection from "@/components/about/WorkingModelSection";
import ContactSection from "@/components/about/ContactSection";
import ProcessSection from "@/components/about/ProcessSection";
import CtaSection from "@/components/about/CtaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

const PATH = "/about";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });
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

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <BackgroundSection />
      <PhilosophySection />
      <WorkingModelSection />
      <ContactSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
