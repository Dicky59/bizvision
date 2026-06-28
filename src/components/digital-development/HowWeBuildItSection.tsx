import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AlternatingRows from "@/components/shared/AlternatingRows";

interface RawItem {
  title: string;
  body: string;
  highlighted: boolean;
  linkLabel?: string;
  linkHref?: string;
  imagePlaceholderLabel: string;
}

const ProcessIllustration = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/illustrations/process.svg"
      alt="AI-accelerated engineering — workflow process diagram"
      width={500}
      height={537}
      className="w-full max-w-sm"
      priority={false}
    />
  </div>
);

const ArchitectureIllustration = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/illustrations/progressive-web-app.svg"
      alt="Clean, scalable architecture — desktop and mobile app diagram"
      width={548}
      height={357}
      className="w-full max-w-sm"
      priority={false}
    />
  </div>
);

const SecurityIllustration = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/illustrations/security-on.svg"
      alt="Security and compliance — shield with checkmark"
      width={400}
      height={276}
      className="w-full max-w-sm"
      priority={false}
    />
  </div>
);

export default async function HowWeBuildItSection() {
  const t = await getTranslations("DigitalDevelopment.howWeBuildIt");
  const rawItems = t.raw("items") as RawItem[];

  const rows = rawItems.map((item, i) => ({
    title: item.title,
    body: item.body,
    highlighted: item.highlighted,
    imagePlaceholderLabel: item.imagePlaceholderLabel,
    ...(item.linkLabel && item.linkHref
      ? { link: { label: item.linkLabel, href: item.linkHref } }
      : {}),
    ...(i === 0 ? { illustration: <ProcessIllustration /> } : {}),
    ...(i === 1 ? { illustration: <ArchitectureIllustration /> } : {}),
    ...(i === 2 ? { illustration: <SecurityIllustration /> } : {}),
  }));

  return (
    <AlternatingRows
      eyebrow={t("eyebrow")}
      rows={rows}
      background="surface"
    />
  );
}
