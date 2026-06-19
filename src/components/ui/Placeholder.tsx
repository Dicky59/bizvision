interface PlaceholderProps {
  label: string;
  dimensions?: string;
  ratio?: string;
  className?: string;
}

export default function Placeholder({
  label,
  dimensions,
  ratio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded border border-dashed border-bone bg-taupe/5 ${className}`}
      style={{ aspectRatio: ratio }}
      aria-hidden="true"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-taupe text-center px-4 select-none">
        {label}
        {dimensions && <>{" · "}{dimensions}</>}
      </p>
    </div>
  );
}
