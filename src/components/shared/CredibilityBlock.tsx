import Placeholder from "@/components/ui/Placeholder";

interface CredibilityBlockProps {
  text: string;
}

export default function CredibilityBlock({ text }: CredibilityBlockProps) {
  return (
    <div className="mt-16 pt-10 border-t border-bone flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden">
        <Placeholder label="Developer headshot" dimensions="64×64" ratio="1/1" className="w-16 h-16" />
      </div>
      <p className="text-base text-taupe leading-relaxed max-w-lg">{text}</p>
    </div>
  );
}
