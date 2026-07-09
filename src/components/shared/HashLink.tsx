"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { ComponentProps, AnchorHTMLAttributes, MouseEvent } from "react";

type LinkProps = ComponentProps<typeof Link>;

type Props = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export default function HashLink({ href, onClick, ...props }: Props) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    const [path, hash] = href.split("#");
    if (!hash || pathname !== (path || "/")) return;

    const el = document.getElementById(hash);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
