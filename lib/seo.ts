import type { Metadata } from "next";

export type PageMetaOpts = {
  type?: "website" | "article";
  images?: string | string[];
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

export function pageMeta(
  path: string,
  title: string,
  description: string,
  opts: PageMetaOpts = {}
): Metadata {
  const images = Array.isArray(opts.images)
    ? opts.images
    : opts.images
    ? [opts.images]
    : undefined;

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: opts.type ?? "website",
    url: path,
    title,
    description,
    ...(images && { images }),
    ...(opts.type === "article" && {
      publishedTime: opts.publishedTime,
      modifiedTime: opts.modifiedTime,
      authors: opts.authors,
      tags: opts.tags,
    }),
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images }),
    },
    ...(opts.noindex && { robots: { index: false, follow: false } }),
  };
}
