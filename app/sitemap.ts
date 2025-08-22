import { siteUrl } from "@/consts";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  // TODO: import your allPosts list to enumerate posts
  return [{ url: `${base}/`, lastModified: new Date() }];
}
