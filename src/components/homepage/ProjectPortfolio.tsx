"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectPortfolioScreenshot {
  src: string;
  alt: string;
}

interface ProjectPortfolioProps {
  screenshots?: {
    left?: ProjectPortfolioScreenshot;
    center?: ProjectPortfolioScreenshot;
    right?: ProjectPortfolioScreenshot;
  };
}

interface FrameProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

function BrowserFrame({ children, className, style }: FrameProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 10,
        overflow: "hidden",
        boxShadow:
          "0 24px 48px -12px color-mix(in oklch, var(--color-hero-bg) 28%, transparent), 0 4px 12px -2px color-mix(in oklch, var(--color-hero-bg) 14%, transparent)",
        background: "#fff",
        border: "1px solid color-mix(in oklch, var(--color-hero-bg) 8%, transparent)",
        ...style,
      }}
    >
      <div
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 10px",
          background: "#EDE9E1",
          borderBottom: "1px solid rgba(35,28,23,0.06)",
        }}
      >
        {["#E0958A", "#E8C27A", "#8FBF9A"].map((c) => (
          <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
        ))}
      </div>
      <div style={{ width: "100%", height: "calc(100% - 28px)", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children, className, style }: FrameProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 26,
        overflow: "hidden",
        boxShadow:
          "0 24px 48px -12px color-mix(in oklch, var(--color-hero-bg) 30%, transparent), 0 4px 12px -2px color-mix(in oklch, var(--color-hero-bg) 16%, transparent)",
        background: "var(--color-hero-bg)",
        padding: 8,
        border: "1px solid color-mix(in oklch, var(--color-hero-bg) 10%, transparent)",
        ...style,
      }}
    >
      <div
        style={{
          borderRadius: 18,
          overflow: "hidden",
          height: "100%",
          position: "relative",
          background: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 44,
            height: 5,
            borderRadius: 3,
            background: "rgba(35,28,23,0.35)",
            zIndex: 2,
          }}
        />
        {children}
      </div>
    </div>
  );
}

/* --- Fallback mockups (CSS-drawn, brand-colored, used until real screenshots are supplied) --- */

function AgentDashboardMockup() {
  const rows = [
    { name: "review-pr-482", status: "Merged", ok: true },
    { name: "fix-auth-flow", status: "In review", ok: false },
    { name: "add-rate-limit", status: "Merged", ok: true },
    { name: "refactor-agents", status: "Running", ok: false },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", fontFamily: "Inter, sans-serif", fontSize: 11 }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ width: "26%", background: "var(--color-hero-bg)", padding: "14px 10px" }}>
          <div style={{ color: "var(--color-ochre)", fontFamily: "monospace", fontSize: 10, marginBottom: 14, letterSpacing: 0.5 }}>
            AI CODING AGENT
          </div>
          {["Runs", "Repositories", "Agents", "Settings"].map((l, i) => (
            <div
              key={l}
              style={{
                color: i === 0 ? "#F7F4EE" : "rgba(247,244,238,0.5)",
                background: i === 0 ? "rgba(194,136,47,0.25)" : "transparent",
                borderRadius: 5,
                padding: "6px 8px",
                marginBottom: 3,
              }}
            >
              {l}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 14, background: "#FAF8F4" }}>
          <div style={{ color: "var(--color-hero-bg)", fontWeight: 700, marginBottom: 10 }}>Recent agent runs</div>
          {rows.map((r) => (
            <div
              key={r.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                border: "1px solid rgba(35,28,23,0.08)",
                borderRadius: 6,
                padding: "7px 10px",
                marginBottom: 5,
              }}
            >
              <span style={{ fontFamily: "monospace", color: "var(--color-hero-bg)" }}>{r.name}</span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  padding: "2px 7px",
                  borderRadius: 20,
                  color: r.ok ? "#3F6B4A" : "var(--color-ochre-deep)",
                  background: r.ok ? "#DEEBE1" : "#F3E3C8",
                }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SaasDashboardMockup() {
  const bars = [40, 65, 30, 80, 55, 70, 45];
  return (
    <div style={{ width: "100%", height: "100%", background: "#FAF8F4", padding: 14, fontFamily: "Inter, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-hero-bg)" }}>Overview</div>
        <div style={{ fontSize: 9, color: "var(--color-ochre-deep)", background: "#F3E3C8", padding: "2px 8px", borderRadius: 20 }}>
          This month
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {["Revenue", "Orders", "Conversion"].map((l) => (
          <div key={l} style={{ flex: 1, background: "#fff", borderRadius: 6, padding: 8, border: "1px solid rgba(35,28,23,0.06)" }}>
            <div style={{ fontSize: 8, color: "#8A8378" }}>{l}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-hero-bg)" }}>—</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", borderRadius: 6, padding: 10, border: "1px solid rgba(35,28,23,0.06)", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--color-ochre)", opacity: 0.25 + i * 0.09, borderRadius: 2 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAppMockup() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", paddingTop: 20, fontFamily: "Inter, sans-serif" }}>
      <div style={{ padding: "0 12px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-hero-bg)", marginBottom: 10 }}>Good morning</div>
        <div
          style={{
            background: "linear-gradient(135deg, var(--color-ochre), var(--color-ochre-deep))",
            borderRadius: 12,
            padding: 12,
            color: "#fff",
            marginBottom: 10,
          }}
        >
          <div style={{ fontSize: 9, opacity: 0.85 }}>Active balance</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>—</div>
        </div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 0",
              borderBottom: "1px solid rgba(35,28,23,0.06)",
            }}
          >
            <div style={{ width: 26, height: 26, borderRadius: 8, background: "#F3E3C8" }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, width: "60%", background: "rgba(35,28,23,0.12)", borderRadius: 3, marginBottom: 4 }} />
              <div style={{ height: 5, width: "35%", background: "rgba(35,28,23,0.08)", borderRadius: 3 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Homepage "Experience" section banner — a staggered 3-frame collage
 * (SaaS dashboard, AI agent hero, mobile app). Below the `sm` breakpoint the
 * side frames are hidden and the center frame fills the space, since three
 * overlapping rotated frames don't fit legibly in a 16:9 box at phone widths.
 *
 * Any `screenshots` key that's omitted keeps a brand-colored CSS mockup
 * fallback for that slot.
 */
export default function ProjectPortfolio({ screenshots = {} }: ProjectPortfolioProps) {
  const t = useTranslations("HomePage.experience");

  return (
    <div>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          background: "var(--color-paper)",
          borderRadius: 16,
          border: "1px solid rgba(35,28,23,0.08)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "45%",
            height: "70%",
            background: "var(--color-ochre)",
            opacity: 0.14,
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />

        <div className="relative flex items-center justify-center w-[92%] h-[85%] sm:w-[82%] sm:h-[72%]">
          {/* left: SaaS / dashboard — hidden below sm, collage returns at sm+ */}
          <BrowserFrame
            className="hidden sm:block absolute left-[2%] w-[44%] h-[78%] z-1"
            style={{ transform: "rotate(-3deg)" }}
          >
            {screenshots.left ? (
              <Image
                src={screenshots.left.src}
                alt={screenshots.left.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 32vw, 0px"
              />
            ) : (
              <SaasDashboardMockup />
            )}
          </BrowserFrame>

          {/* center: AI Coding Agent — hero piece, always visible */}
          <BrowserFrame className="relative w-full h-full sm:w-[56%] sm:h-[94%] z-3">
            {screenshots.center ? (
              <Image
                src={screenshots.center.src}
                alt={screenshots.center.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 640px) 42vw, 80vw"
              />
            ) : (
              <AgentDashboardMockup />
            )}
          </BrowserFrame>

          {/* right: mobile app — hidden below sm */}
          <PhoneFrame
            className="hidden sm:block absolute right-[1%] w-[20%] h-[88%] z-2"
            style={{ transform: "rotate(4deg)" }}
          >
            {screenshots.right ? (
              <Image
                src={screenshots.right.src}
                alt={screenshots.right.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 14vw, 0px"
              />
            ) : (
              <MobileAppMockup />
            )}
          </PhoneFrame>
        </div>
      </div>

      {/* caption: featured project mini case-study, below the collage */}
      <div className="mt-6 sm:mt-8 max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-2">
          {t("featuredProjectLabel")}
        </p>
        <p className="font-display font-semibold text-ink text-lg leading-snug mb-2">
          {t("featuredProjectTitle")}
        </p>
        <p className="text-base text-taupe leading-relaxed">
          {t("featuredProjectBody")}
        </p>
      </div>
    </div>
  );
}
