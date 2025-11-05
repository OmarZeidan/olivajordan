import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const lastModified = new Date();

  return [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Home page anchors (for structure hints)
    {
      url: `${baseUrl}/#story`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#the-place`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#our-kitchen`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
