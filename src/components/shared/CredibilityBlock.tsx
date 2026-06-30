import Image from "next/image";

interface CredibilityBlockProps {
  text: string;
}

export default function CredibilityBlock({ text }: CredibilityBlockProps) {
  return (
    <div className="mt-16 pt-10 border-t border-bone flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden ring-4 ring-bone ring-offset-2 ring-offset-paper">
        <Image
          src="/illustrations/cv-pic.png"
          alt="Pekka Laine — BizVision"
          width={64}
          height={64}
          className="w-16 h-16 object-cover object-top"
        />
      </div>
      <p className="text-base text-taupe leading-relaxed max-w-lg">{text}</p>
    </div>
  );
}
