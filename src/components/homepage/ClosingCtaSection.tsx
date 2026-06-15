import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ClosingCtaSection() {
  const t = await getTranslations("HomePage.closingCta");

  return (
    <section className="bg-hero-bg text-hero-text py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-hero mb-6">
          {t("eyebrow")}
        </p>
        <h2
          className="font-display font-bold text-hero-text leading-tight max-w-2xl mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          {t("heading")}
        </h2>
        <p className="text-lg text-hero-text/80 leading-relaxed max-w-xl mb-3">
          {t("body")}
        </p>
        <p className="text-lg text-hero-text/65 leading-relaxed max-w-xl mb-12">
          {t("sub")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-6 rounded bg-accent text-ink font-medium text-base transition-colors hover:bg-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hero"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
