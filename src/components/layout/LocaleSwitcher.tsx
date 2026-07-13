"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.08em]"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-taupe/50" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={locale === loc ? "true" : undefined}
            className={
              locale === loc
                ? "text-ochre-deep font-semibold"
                : "text-taupe hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-deep rounded"
            }
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
