import type { Metadata } from "next";
import HeroSection from "@/components/ai-automation/HeroSection";
import AgentsExplainerSection from "@/components/ai-automation/AgentsExplainerSection";
import BusinessValueSection from "@/components/ai-automation/BusinessValueSection";
import UseCasesSection from "@/components/ai-automation/UseCasesSection";
import SecureDeploymentSection from "@/components/ai-automation/SecureDeploymentSection";
import ProcessSection from "@/components/ai-automation/ProcessSection";
import CtaSection from "@/components/ai-automation/CtaSection";

export function generateMetadata(): Metadata {
  return {
    title: "AI & Intelligent Automation — BizVision",
    description:
      "Agentic workflows, AI assistants, and automation tools built securely for real business use. Practical AI that ships — no hype.",
    alternates: {
      canonical: "/ai-automation",
      languages: { en: "/ai-automation" },
    },
    openGraph: {
      title: "AI & Intelligent Automation — BizVision",
      description:
        "Agentic workflows, AI assistants, and automation tools built securely for real business use. Practical AI that ships — no hype.",
      url: "/ai-automation",
    },
    twitter: {
      title: "AI & Intelligent Automation — BizVision",
      description:
        "Agentic workflows, AI assistants, and automation tools built securely for real business use. Practical AI that ships — no hype.",
    },
  };
}

export default function AiAutomationPage() {
  return (
    <>
      <HeroSection />
      <AgentsExplainerSection />
      <BusinessValueSection />
      <UseCasesSection />
      <SecureDeploymentSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
