import { getTranslations } from "next-intl/server";
import { Zap, Code2, Search, BarChart3 } from "lucide-react";
import { LucideIcon } from "lucide-react";
import IconGrid from "@/components/shared/IconGrid";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Code2,
  Search,
  BarChart3,
};

interface RawItem {
  icon: string;
  title: string;
  body: string;
}

export default async function BusinessValueSection() {
  const t = await getTranslations("AiAutomation.businessValue");
  const rawItems = t.raw("items") as RawItem[];

  const items = rawItems.map((item) => ({
    Icon: iconMap[item.icon] ?? Zap,
    title: item.title,
    body: item.body,
  }));

  return (
    <IconGrid
      eyebrow={t("eyebrow")}
      items={items}
      background="surface"
    />
  );
}
