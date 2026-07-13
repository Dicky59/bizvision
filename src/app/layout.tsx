import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import {
  Hanken_Grotesk,
  JetBrains_Mono,
  Schibsted_Grotesk,
} from "next/font/google";
import { organizationSchema } from "@/lib/schema";
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
  metadataBase: new URL("https://www.bizvision.fi"),
  title: "BizVision - AI Systems & Agentic Workflows | Helsinki",
  description:
    "AI and automation systems for your business processes, plus web, mobile, and UI/UX development — for businesses and public sector organisations.",
  openGraph: {
    siteName: "BizVision",
    locale: "en_GB",
    alternateLocale: "fi_FI",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BizVision" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "UxDMAZTjNyiDCJUvPwLfQVM6Aiz8wgPuypSzRmrZml8",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded focus:bg-ochre-deep focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
