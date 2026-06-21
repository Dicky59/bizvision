import { getTranslations } from "next-intl/server";
import BadgePillCloud from "@/components/shared/BadgePillCloud";

export default async function WhoItsForSection() {
  const t = await getTranslations("DigitalDevelopment.whoItsFor");
  const pills = t.raw("pills") as string[];

  return (
    <BadgePillCloud
      eyebrow={t("eyebrow")}
      audienceLabel={t("audienceLabel")}
      audience={t("audience")}
      projectsLabel={t("projectsLabel")}
      pills={pills}
    />
  );
}
