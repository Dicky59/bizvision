import { getTranslations } from "next-intl/server";
import AlternatingRows from "@/components/shared/AlternatingRows";

interface RawItem {
  title: string;
  body: string;
  imagePlaceholderLabel: string;
}

export default async function UseCasesSection() {
  const t = await getTranslations("AiAutomation.useCases");
  const rawItems = t.raw("items") as RawItem[];

  const rows = rawItems.map((item) => ({
    title: item.title,
    body: item.body,
    imagePlaceholderLabel: item.imagePlaceholderLabel,
  }));

  return (
    <AlternatingRows
      id="use-cases"
      eyebrow={t("eyebrow")}
      rows={rows}
      background="paper"
    />
  );
}
