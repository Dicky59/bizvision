"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import HashLink from "@/components/shared/HashLink";
import LocaleSwitcher from "./LocaleSwitcher";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  items: NavItem[];
  ctaLabel: string;
  openLabel: string;
  closeLabel: string;
}

export default function MobileMenu({
  items,
  ctaLabel,
  openLabel,
  closeLabel,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center w-10 h-10 rounded text-ink transition-colors hover:bg-bone"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 top-[65px] z-40 bg-paper border-t border-bone transition-all duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col p-6 gap-1"
        >
          {items.map((item) => (
            <HashLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-base font-medium text-ink border-b border-bone last:border-0 hover:text-ochre-deep transition-colors"
            >
              {item.label}
            </HashLink>
          ))}
          <div className="pt-6 flex items-center justify-between gap-4">
            <LocaleSwitcher />
          </div>

          <div className="pt-4">
            <HashLink
              href="/about#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full h-12 px-6 rounded bg-ochre text-hero-text font-medium text-base transition-colors hover:bg-ochre-deep"
            >
              {ctaLabel}
            </HashLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
