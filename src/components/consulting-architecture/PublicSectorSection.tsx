import { getTranslations } from "next-intl/server";
import CalloutBand from "@/components/shared/CalloutBand";

export default async function PublicSectorSection() {
  const t = await getTranslations("Consulting.publicSector");
  const bullets = t.raw("bullets") as string[];

  return (
    <CalloutBand
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      bullets={bullets}
    />
  );
}
