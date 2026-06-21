import { getTranslations } from "next-intl/server";
import { Monitor, Smartphone, Palette } from "lucide-react";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Palette,
};

interface RawItem {
  icon: string;
  title: string;
  bullets: string[];
}

export default async function WhatWeBuildSection() {
  const t = await getTranslations("DigitalDevelopment.whatWeBuild");
  const rawItems = t.raw("items") as RawItem[];

  const items = rawItems.map((item) => ({
    Icon: iconMap[item.icon] ?? Monitor,
    title: item.title,
    bullets: item.bullets,
  }));

  return (
    <FeatureCardGrid
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      items={items}
      quote={t("quote")}
    />
  );
}
