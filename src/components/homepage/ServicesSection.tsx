import { getTranslations } from "next-intl/server";
import ServicesTrace from "./ServicesTrace";
import type { ServiceItem } from "./ServiceRow";

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="bg-paper py-20 lg:py-28 border-y border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
          {t("eyebrow")}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight max-w-3xl mb-4"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          {t("heading")}
        </h2>
        <p className="text-lg text-taupe leading-relaxed max-w-2xl mb-14">
          {t("subhead")}
        </p>

        <ServicesTrace items={items} />
      </div>
    </section>
  );
}
