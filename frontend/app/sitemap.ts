import type { MetadataRoute } from "next";
import { sitemapLastModified, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/approach",
    "/subjects",
    "/cv",
    "/rates",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: sitemapLastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
