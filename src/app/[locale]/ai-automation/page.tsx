import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/ai-automation/HeroSection";
import AgentsExplainerSection from "@/components/ai-automation/AgentsExplainerSection";
import BusinessValueSection from "@/components/ai-automation/BusinessValueSection";
import UseCasesSection from "@/components/ai-automation/UseCasesSection";
import SecureDeploymentSection from "@/components/ai-automation/SecureDeploymentSection";
import ProcessSection from "@/components/ai-automation/ProcessSection";
import CtaSection from "@/components/ai-automation/CtaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

const PATH = "/ai-automation";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AiAutomation.meta" });
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
