import { setRequestLocale } from "next-intl/server";
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
