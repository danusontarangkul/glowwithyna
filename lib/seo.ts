// lib/seo.ts
import type { Metadata } from "next";

/** ---- Site-wide constants (edit these) ---- */
export const siteUrl = "https://yourdomain.com"; // ← change me
export const siteName = "Your Blog"; // ← change me
export const defaultDesc = "Makeup & self-improvement guides for women.";
export const defaultOgFallback = "/og/default.png"; // optional static fallback in /public/og

type PageMetaOpts = {
  /** Defaults to article for posts; use "website" for non-articles (home, about) */
  type?: "article" | "website";
  /** If provided, overrides the auto `/og/<ogSlug>.png` */
  ogImageUrl?: string;
  /** If provided, use this to build `/og/<ogSlug>.png` */
  ogSlug?: string;
  /** Add `noindex, nofollow` */
  noIndex?: boolean;
  /** Extra Open Graph images (appended after the primary one) */
  extraOgImages?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
};

/**
 * Build page metadata with smart defaults.
 * - Canonical built from `siteUrl + path`
 * - OG/Twitter images auto-generated: `/og/<ogSlug||pathSlug>.png`
 */
export function pageMeta(
  path: string, // e.g. "/blog/my-post"
  title: string,
  description: string = defaultDesc,
  opts: PageMetaOpts = {}
): Metadata {
  const urlAbs = new URL(path, siteUrl).toString();

  // Derive an OG slug from the path if not explicitly provided
  const derivedOgSlug =
    opts.ogSlug ??
    path.replace(/^\/+/, "").replace(/\/$/, "").replace(/\//g, "-"); // "/blog/my-post" -> "blog-my-post"

  const primaryOg =
    opts.ogImageUrl ??
    (derivedOgSlug
      ? `${siteUrl}/og/${derivedOgSlug}.png`
      : `${siteUrl}${defaultOgFallback}`);

  const ogImages = [{ url: primaryOg }, ...(opts.extraOgImages ?? [])];

  return {
    title,
    description,
    alternates: { canonical: urlAbs },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: opts.type ?? "article",
      title,
      description,
      url: urlAbs,
      siteName,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}
