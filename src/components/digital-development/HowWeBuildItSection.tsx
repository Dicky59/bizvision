import { getTranslations } from "next-intl/server";
import AlternatingRows from "@/components/shared/AlternatingRows";

interface RawItem {
  title: string;
  body: string;
  highlighted: boolean;
  linkLabel?: string;
  linkHref?: string;
  imagePlaceholderLabel: string;
}

export default async function HowWeBuildItSection() {
  const t = await getTranslations("DigitalDevelopment.howWeBuildIt");
  const rawItems = t.raw("items") as RawItem[];

  const rows = rawItems.map((item) => ({
    title: item.title,
    body: item.body,
    highlighted: item.highlighted,
    imagePlaceholderLabel: item.imagePlaceholderLabel,
    ...(item.linkLabel && item.linkHref
      ? { link: { label: item.linkLabel, href: item.linkHref } }
      : {}),
  }));

  return (
    <AlternatingRows
      eyebrow={t("eyebrow")}
      rows={rows}
      background="surface"
    />
  );
}
