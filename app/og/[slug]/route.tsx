// app/og/[slug]/route.tsx
import { ImageResponse } from "next/og";
import { allPosts } from "@/lib/posts-registry"; // <-- simple array of { slug, title, ... }

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Optional: tweak these to your brand
const BRAND = "Glow With Yna";
const GRADIENT = "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)";

function humanize(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const post = allPosts.find((p) => p.slug === slug);

  const title = post?.title ?? humanize(slug);
  const subtitle = post?.description?.slice(0, 120) ?? ""; // short optional line under title

  // Tip: You can fetch & use custom fonts here if you like:
  // const fontData = await fetch(new URL("../../public/fonts/Inter-Bold.ttf", import.meta.url)).then(r => r.arrayBuffer());

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
          background: GRADIENT,
          color: "white",
          padding: 64,
        }}
      >
        {/* Brand header */}
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
          ✨ {BRAND}
        </div>

        {/* Title */}
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

        {/* Optional subtitle */}
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

        {/* Footer / URL */}
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
          glowwithyna.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      // fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
