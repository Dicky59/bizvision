import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BizVision — Software Development Helsinki",
  description:
    "Senior software development for businesses and public sector organisations. Web, mobile, UI/UX, and AI systems built for clarity and long-term use.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${schibsted.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-ochre-deep focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
