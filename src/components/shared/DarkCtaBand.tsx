import Link from "next/link";

interface DarkCtaBandProps {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function DarkCtaBand({ eyebrow, heading, body, ctaLabel, ctaHref }: DarkCtaBandProps) {
  return (
    <section className="bg-hero-bg text-hero-text py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-lite mb-6">
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold text-hero-text leading-tight max-w-2xl mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          {heading}
        </h2>
        <p className="text-lg text-hero-text/80 leading-relaxed max-w-xl mb-12">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center h-12 px-6 rounded bg-ochre text-ink font-medium text-base transition-colors hover:bg-ochre-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
