import Link from "next/link";
import { getTranslations } from "next-intl/server";

const navItems = [
  { key: "digitalDev", href: "/digital-development" },
  { key: "aiAutomation", href: "/ai-automation" },
  { key: "consulting", href: "/consulting" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export default async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <p className="font-display font-bold text-lg text-ink mb-3">
              Biz<span className="text-accent">Vision</span>
            </p>
            <p className="text-sm text-muted leading-relaxed">{t("tagline")}</p>
          </div>

          <nav aria-label={t("nav")}>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium text-ink mb-1">{t("location")}</p>
            <p className="text-sm text-muted">{t("gdpr")}</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-line">
          <p className="text-xs text-muted">
            {t("copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
