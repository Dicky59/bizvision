import Link from "next/link";
import { getTranslations } from "next-intl/server";

const navItems = [
  { key: "digitalDev", href: "/digital-development" },
  { key: "aiAutomation", href: "/ai-automation" },
  { key: "consulting", href: "/consulting-architecture" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/about#contact" },
] as const;

export default async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          <div>
            <p className="font-display font-bold text-lg text-ink mb-3">
              Biz<span className="text-ochre-deep">Vision</span>
            </p>
            <p className="text-sm text-taupe leading-relaxed">{t("tagline")}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">BizVision Oy</p>
            <p className="text-sm text-taupe mt-1">Pekka Laine</p>
            <p className="text-sm text-taupe mt-1">Business ID: 2267760-2</p>
          </div>

          <nav aria-label={t("nav")}>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-taupe hover:text-ink transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a href={`mailto:${t("email")}`} className="text-sm text-taupe hover:text-ink transition-colors block mb-3">
              {t("email")}
            </a>
            <p className="text-sm text-taupe leading-snug">
              {t("addressLine1")}<br />{t("addressLine2")}
            </p>
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="text-sm text-taupe hover:text-ink transition-colors block mt-3">
              {t("phone")}
            </a>
            <p className="text-sm text-taupe mt-3">{t("gdpr")}</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-bone">
          <p className="text-xs text-taupe">
            {t("copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
