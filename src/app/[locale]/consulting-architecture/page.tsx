import type { Metadata } from "next";
import HeroSection from "@/components/consulting-architecture/HeroSection";
import WhereIHelpSection from "@/components/consulting-architecture/WhereIHelpSection";
import ComparisonSection from "@/components/consulting-architecture/ComparisonSection";
import PublicSectorSection from "@/components/consulting-architecture/PublicSectorSection";
import ProcessSection from "@/components/consulting-architecture/ProcessSection";
import CtaSection from "@/components/consulting-architecture/CtaSection";

export function generateMetadata(): Metadata {
  return {
    title: "Technical Consulting & Architecture — BizVision",
    description:
      "Senior technical judgment for teams that need direction. Architecture reviews, technical strategy, and engineering leadership — Helsinki.",
    alternates: {
      canonical: "/consulting-architecture",
      languages: { en: "/consulting-architecture" },
    },
    openGraph: {
      title: "Technical Consulting & Architecture — BizVision",
      description:
        "Senior technical judgment for teams that need direction. Architecture reviews, technical strategy, and engineering leadership — Helsinki.",
      url: "/consulting-architecture",
    },
    twitter: {
      title: "Technical Consulting & Architecture — BizVision",
      description:
        "Senior technical judgment for teams that need direction. Architecture reviews, technical strategy, and engineering leadership — Helsinki.",
    },
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
