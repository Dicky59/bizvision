import { getTranslations } from "next-intl/server";
import { ScanSearch, Cloud, BrainCircuit, Users, FileText } from "lucide-react";
import { LucideIcon } from "lucide-react";
import IconGrid from "@/components/shared/IconGrid";

const iconMap: Record<string, LucideIcon> = {
  ScanSearch,
  Cloud,
  BrainCircuit,
  Users,
  FileText,
};

interface RawItem {
  icon: string;
  title: string;
  body: string;
}

export default async function WhereIHelpSection() {
  const t = await getTranslations("Consulting.whereIHelp");
  const rawItems = t.raw("items") as RawItem[];

  const items = rawItems.map((item) => ({
    Icon: iconMap[item.icon] ?? ScanSearch,
    title: item.title,
    body: item.body,
  }));

  return (
    <IconGrid
      eyebrow={t("eyebrow")}
      items={items}
      background="paper"
    />
  );
}
