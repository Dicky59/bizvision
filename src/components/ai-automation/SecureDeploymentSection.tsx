import { getTranslations } from "next-intl/server";
import CalloutBand from "@/components/shared/CalloutBand";

export default async function SecureDeploymentSection() {
  const t = await getTranslations("AiAutomation.secureDeployment");
  const bullets = t.raw("bullets") as string[];

  return (
    <CalloutBand
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      bullets={bullets}
    />
  );
}
