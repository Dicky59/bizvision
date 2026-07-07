import type { MetadataRoute } from "next";

const base = "https://www.bizvision.fi";

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/digital-development", priority: 0.8 },
  { path: "/ai-automation", priority: 0.8 },
  { path: "/consulting-architecture", priority: 0.8 },
  { path: "/about", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ path, priority }) => {
    const enUrl = `${base}${path || "/"}`;
    const fiUrl = `${base}/fi${path}`;
    const alternates = {
      languages: {
        en: enUrl,
        fi: fiUrl,
        "x-default": enUrl,
      },
    };

    return [
      {
        url: enUrl,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
      {
        url: fiUrl,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
    ];
  });
}
