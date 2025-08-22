// app/og/[slug]/route.tsx
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getPostBySlug } from "@/lib/posts-registry";

export const runtime = "edge"; // literal
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

function humanize(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? humanize(params.slug);
  const subtitle = post?.description ? post.description.slice(0, 120) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
          color: "white",
          padding: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 48,
            fontSize: 32,
            fontWeight: 700,
            opacity: 0.9,
          }}
        >
          ✨ Your Blog
        </div>

        <div
          style={{
            maxWidth: 1000,
            textAlign: "center",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: "1.1",
            marginBottom: 24,
            wordBreak: "break-word",
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              maxWidth: 900,
              textAlign: "center",
              fontSize: 36,
              fontWeight: 500,
              opacity: 0.9,
              lineHeight: "1.3",
              marginTop: 8,
            }}
          >
            {subtitle}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 48,
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.95,
          }}
        >
          yourdomain.com
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
