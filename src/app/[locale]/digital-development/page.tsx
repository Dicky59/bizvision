import type { Metadata } from "next";
import HeroSection from "@/components/digital-development/HeroSection";
import WhatWeBuildSection from "@/components/digital-development/WhatWeBuildSection";
import HowWeBuildItSection from "@/components/digital-development/HowWeBuildItSection";
import WhoItsForSection from "@/components/digital-development/WhoItsForSection";
import ProcessSection from "@/components/digital-development/ProcessSection";
import CtaSection from "@/components/digital-development/CtaSection";

export function generateMetadata(): Metadata {
  return {
    title: "Web, Mobile & UI/UX Development — BizVision",
    description:
      "Integrated web applications, mobile apps, and interface design — built as one system. Modern stack, accessible, and ready to scale.",
    alternates: {
      canonical: "/digital-development",
      languages: { en: "/digital-development" },
    },
    openGraph: {
      title: "Web, Mobile & UI/UX Development — BizVision",
      description:
        "Integrated web applications, mobile apps, and interface design — built as one system. Modern stack, accessible, and ready to scale.",
      url: "/digital-development",
    },
    twitter: {
      title: "Web, Mobile & UI/UX Development — BizVision",
      description:
        "Integrated web applications, mobile apps, and interface design — built as one system. Modern stack, accessible, and ready to scale.",
    },
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
