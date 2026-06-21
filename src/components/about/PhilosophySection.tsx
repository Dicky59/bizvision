import { getTranslations } from "next-intl/server";
import { Layers, Code2, BrainCircuit, MessageSquare } from "lucide-react";
import { LucideIcon } from "lucide-react";
import IconGrid from "@/components/shared/IconGrid";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Code2,
  BrainCircuit,
  MessageSquare,
};

interface RawItem {
  icon: string;
  title: string;
  body: string;
}

export default async function PhilosophySection() {
  const t = await getTranslations("About.philosophy");
  const rawItems = t.raw("items") as RawItem[];

  const items = rawItems.map((item) => ({
    Icon: iconMap[item.icon] ?? Layers,
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
