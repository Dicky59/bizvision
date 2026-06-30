import type { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import BackgroundSection from "@/components/about/BackgroundSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import WorkingModelSection from "@/components/about/WorkingModelSection";
import ContactSection from "@/components/about/ContactSection";
import ProcessSection from "@/components/about/ProcessSection";
import CtaSection from "@/components/about/CtaSection";

export function generateMetadata(): Metadata {
  return {
    title: "About BizVision — Senior Engineering Partner",
    description:
      "BizVision is a one-person consultancy: the engineer you talk to designs, builds, and ships your system. Based in Helsinki.",
    alternates: {
      canonical: "/about",
      languages: { en: "/about" },
    },
    openGraph: {
      title: "About BizVision — Senior Engineering Partner",
      description:
        "BizVision is a one-person consultancy: the engineer you talk to designs, builds, and ships your system. Based in Helsinki.",
      url: "/about",
    },
    twitter: {
      title: "About BizVision — Senior Engineering Partner",
      description:
        "BizVision is a one-person consultancy: the engineer you talk to designs, builds, and ships your system. Based in Helsinki.",
    },
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
