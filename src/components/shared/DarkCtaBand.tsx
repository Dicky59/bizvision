import Image from "next/image";
import Link from "next/link";

interface DarkCtaBandProps {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  headshot?: { src: string; alt: string };
}

export default function DarkCtaBand({ eyebrow, heading, body, ctaLabel, ctaHref, headshot }: DarkCtaBandProps) {
  return (
    <section className="bg-hero-bg text-hero-text py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
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
              className="inline-flex items-center justify-center h-12 px-6 rounded bg-ochre text-hero-text font-medium text-base transition-colors hover:bg-ochre-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
            >
              {ctaLabel}
            </Link>
          </div>

          {headshot && (
            <div className="mt-12 lg:mt-0 lg:pt-2 shrink-0">
              <Image
                src={headshot.src}
                alt={headshot.alt}
                width={96}
                height={96}
                className="rounded-full object-cover object-top ring-2 ring-ochre-lite/40"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
