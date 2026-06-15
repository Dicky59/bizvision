import { getTranslations } from "next-intl/server";

interface ClientItem {
  title: string;
  bullets: string[];
}

export default async function ClientsSection() {
  const t = await getTranslations("HomePage.clients");
  const items = t.raw("items") as ClientItem[];
  const roles = t.raw("roles") as string[];

  return (
    <section className="bg-surface py-20 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text mb-12">
          {t("eyebrow")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-ink text-lg leading-snug">
                {item.title}
              </h3>
              <ul className="space-y-1.5" role="list">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="mt-[0.35rem] shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-10">
          <p className="text-sm font-medium text-ink mb-5">{t("rolesHeading")}</p>
          <ul className="flex flex-wrap gap-3" role="list">
            {roles.map((role, i) => (
              <li
                key={i}
                className="px-4 py-2 border border-line rounded text-sm text-muted bg-paper"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
