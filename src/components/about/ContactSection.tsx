import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ContactSection() {
  const t = await getTranslations("About.contact");

  return (
    <section id="contact" className="bg-paper py-20 lg:py-28 border-t border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-14">
          {t("eyebrow")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-semibold text-ink text-xl leading-snug mb-3">
                {t("whoHeading")}
              </h2>
              <p className="text-base text-taupe leading-relaxed">{t("whoBody")}</p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-ink text-xl leading-snug mb-3">
                {t("prepHeading")}
              </h3>
              <p className="text-base text-taupe leading-relaxed">{t("prepBody")}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-3">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${t("email")}`}
                className="font-display font-semibold text-ink text-xl underline underline-offset-4 decoration-bone hover:decoration-ochre-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep"
              >
                {t("email")}
              </a>
            </div>

            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center h-12 px-6 rounded bg-ochre text-ink font-medium text-base transition-colors hover:bg-ochre-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep self-start"
            >
              {t("ctaLabel")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
