import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AlternatingRows from "@/components/shared/AlternatingRows";
import OperationalTriageDiagram from "@/components/illustrations/OperationalTriageDiagram";

interface RawItem {
  title: string;
  body: string;
  imagePlaceholderLabel: string;
}

const CodeReviewIllustration = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/illustrations/code-review.svg"
      alt="Automated code review in CI/CD — code editor with review annotations"
      width={480}
      height={371}
      className="w-full max-w-md"
      priority={false}
    />
  </div>
);

const MindMapIllustration = () => (
  <div className="flex items-center justify-center">
    <Image
      src="/illustrations/mind-map.svg"
      alt="Internal knowledge assistant — mind map of connected information"
      width={480}
      height={371}
      className="w-full max-w-md"
      priority={false}
    />
  </div>
);

export default async function UseCasesSection() {
  const t = await getTranslations("AiAutomation.useCases");
  const rawItems = t.raw("items") as RawItem[];

  const rows = rawItems.map((item, i) => ({
    title: item.title,
    body: item.body,
    imagePlaceholderLabel: item.imagePlaceholderLabel,
    illustration:
      i === 0 ? <CodeReviewIllustration /> :
      i === 1 ? <MindMapIllustration /> :
      i === 2 ? <OperationalTriageDiagram /> :
      undefined,
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
