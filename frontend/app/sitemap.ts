import type { MetadataRoute } from "next";
import { resources } from "@/lib/resources";
import { sitemapLastModified, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/approach",
    "/subjects",
    "/cv",
    "/rates",
    "/resources",
    "/faq",
    "/contact",
  ];

  const pages = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: sitemapLastModified,
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const articles = resources.map((article) => ({
    url: `${siteUrl}/resources/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
