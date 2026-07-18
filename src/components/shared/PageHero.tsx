import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  body: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  sub?: string;
  image?: { label: string; dimensions: string; src?: string; alt?: string };
}

export default function PageHero({ eyebrow, headline, body, ctaPrimary, ctaSecondary, sub, image }: PageHeroProps) {
  return (
    <section className="bg-hero-bg text-hero-text">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className={image ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-lite mb-6">
              {eyebrow}
            </p>
            <h1
              className="font-display font-bold text-hero-text leading-[1.06] mb-7"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              {headline}
            </h1>
            <p className="text-lg leading-relaxed text-hero-text/80 max-w-xl mb-10">
              {body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center h-12 px-6 rounded bg-ochre text-hero-text font-medium text-base transition-colors hover:bg-ochre-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
              >
                {ctaPrimary.label}
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center h-12 px-6 rounded border border-hero-text/30 text-hero-text font-medium text-base transition-colors hover:bg-hero-text/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
            {sub && (
              <p className="font-mono text-[11px] text-hero-text/50 tracking-[0.06em]">{sub}</p>
            )}
          </div>

          {image && (
            <div className="hidden lg:block">
              {image.src ? (
                <div className="relative w-full aspect-16/10 rounded overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt ?? ""}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 0px"
                  />
                </div>
              ) : (
                <Placeholder label={image.label} dimensions={image.dimensions} ratio="16/10" />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
