import { getTranslations } from "next-intl/server";
import NumberedStepper from "@/components/shared/NumberedStepper";

interface Step {
  number: string;
  title: string;
  body: string;
}

export default async function ProcessSection() {
  const t = await getTranslations("Consulting.process");
  const steps = t.raw("steps") as Step[];

  return (
    <NumberedStepper
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      steps={steps}
    />
  );
}
