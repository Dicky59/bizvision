import HeroSection from "@/components/ai-automation/HeroSection";
import AgentsExplainerSection from "@/components/ai-automation/AgentsExplainerSection";
import BusinessValueSection from "@/components/ai-automation/BusinessValueSection";
import UseCasesSection from "@/components/ai-automation/UseCasesSection";
import SecureDeploymentSection from "@/components/ai-automation/SecureDeploymentSection";
import ProcessSection from "@/components/ai-automation/ProcessSection";
import CtaSection from "@/components/ai-automation/CtaSection";

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
