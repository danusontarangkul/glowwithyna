import { siteUrl } from "@/consts";
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
