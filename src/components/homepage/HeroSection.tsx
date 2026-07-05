import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("HomePage.hero");

  return (
    <section className="bg-hero-bg text-hero-text min-h-[92vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32 w-full">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-lite mb-6">
          {t("eyebrow")}
        </p>
        <h1
          className="font-display font-bold text-hero-text leading-[1.06] max-w-4xl mb-7"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)" }}
        >
          {t("headline")}
        </h1>
        <p className="text-lg leading-relaxed text-hero-text/80 max-w-2xl mb-3">
          {t("subhead")}
        </p>
        <p className="text-lg leading-relaxed text-hero-text/65 max-w-2xl mb-12">
          {t("body")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about#contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded bg-ochre text-ink font-medium text-base transition-colors hover:bg-ochre-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
          >
            {t("ctaPrimary")}
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center h-12 px-6 rounded border border-hero-text/30 text-hero-text font-medium text-base transition-colors hover:bg-hero-text/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-lite"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
