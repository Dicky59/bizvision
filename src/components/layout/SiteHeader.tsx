import Link from "next/link";
import { getTranslations } from "next-intl/server";
import MobileMenu from "./MobileMenu";

const navItems = [
  { key: "digitalDev", href: "/digital-development" },
  { key: "aiAutomation", href: "/ai-automation" },
  { key: "consulting", href: "/consulting" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export default async function SiteHeader() {
  const t = await getTranslations("Nav");

  const mobileItems = navItems.map((item) => ({
    href: item.href,
    label: t(item.key),
  }));

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 h-[65px] flex items-center justify-between gap-8">
        <Link
          href="/"
          aria-label={t("logoLabel")}
          className="font-display font-bold text-xl text-ink tracking-tight shrink-0 hover:text-accent-text transition-colors"
        >
          Biz
          <span className="text-accent">Vision</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors whitespace-nowrap"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded bg-accent text-ink text-sm font-medium transition-colors hover:bg-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text"
          >
            {t("cta")}
          </Link>
        </div>

        <MobileMenu
          items={mobileItems}
          ctaLabel={t("cta")}
          openLabel={t("openMenu")}
          closeLabel={t("closeMenu")}
        />
      </div>
    </header>
  );
}
