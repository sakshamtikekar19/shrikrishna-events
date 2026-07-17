import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(PAGES).map((page) => ({
    url: `${SITE_URL.replace(/\/$/, "")}${page.path}`,
    lastModified: now,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/contact/" ? 0.9 : 0.8,
  }));
}
