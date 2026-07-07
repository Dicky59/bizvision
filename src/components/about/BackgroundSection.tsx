import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function BackgroundSection() {
  const t = await getTranslations("About.background");

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">
          {/* Headshot */}
          <div className="w-40 sm:w-48 lg:w-full mx-auto lg:mx-0">
            <div className="rounded-xl border border-bone bg-bone/40 p-3">
              <div className="relative aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src="/illustrations/cv-pic.png"
                  alt="Pekka Laine — BizVision founder"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 220px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="mt-4 text-center lg:text-left">
              <p className="text-ink font-medium">{t("founderName")}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mt-1">
                {t("founderTitle")}
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-8">
              {t("eyebrow")}
            </p>
            <div className="space-y-5 text-base text-taupe leading-relaxed mb-10">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep border-t border-bone pt-6">
              {t("credibilityText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
