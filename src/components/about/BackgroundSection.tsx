import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function BackgroundSection() {
  const t = await getTranslations("About.background");

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
          {/* Headshot */}
          <div className="relative w-56 sm:w-72 lg:w-full aspect-[4/5] mx-auto lg:mx-0">
            <Image
              src="/illustrations/cv-pic.png"
              alt="Pekka Arvolainen — BizVision founder"
              fill
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 300px"
              className="object-contain object-top"
              priority
            />
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
