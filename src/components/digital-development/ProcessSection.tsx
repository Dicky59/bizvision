import { getTranslations } from "next-intl/server";
import NumberedStepper from "@/components/shared/NumberedStepper";
import CredibilityBlock from "@/components/shared/CredibilityBlock";

interface Step {
  number: string;
  title: string;
  body: string;
}

export default async function ProcessSection() {
  const t = await getTranslations("DigitalDevelopment.process");
  const steps = t.raw("steps") as Step[];

  return (
    <NumberedStepper
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      steps={steps}
    >
      <CredibilityBlock text={t("credibility")} />
    </NumberedStepper>
  );
}
