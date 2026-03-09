import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { NAV_LINKS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const routes: MetadataRoute.Sitemap = [
    ...NAV_LINKS.map(({ href }) => ({
      url: href === "/" ? base : `${base}${href}`,
      lastModified: new Date(),
      changeFrequency: (href === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: href === "/" ? 1 : 0.8,
    })),
    {
      url: `${base}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
  return routes;
}
