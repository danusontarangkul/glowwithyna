# Glow With Yna

Makeup & self-improvement guides for women. A Next.js blog with categories, SEO, and affiliate-friendly content.

![Glow With Yna](assets/image.png)

**Live:** [glowwithyna.vercel.app](https://glowwithyna.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

## Project Structure

- **`app/`** – Routes: home, `/about`, `/blog/[slug]`, `/category/[...segments]`, OG images, sitemap, robots
- **`components/`** – Header, category nav, blog post bodies, recommended section, SEO/JSON-LD
- **`lib/`** – Post registry, SEO helpers, utils
- **`consts.ts`** – Site name/URL, category emojis, recommended slugs, disclaimer

Blog posts live as React components under `components/blog/posts/` and are registered in `lib/posts-registry.ts`. Categories are hierarchical (e.g. `skin-care`, `make-up/base`, `fashion/outfit-ideas`).

## SEO

SEO is handled in a few places:

- **`lib/seo.ts`** – Central helper `pageMeta(path, title, description, opts)` builds Next.js `Metadata` for each page. It sets:
  - `title`, `description`, and **canonical** URL
  - **Open Graph** (type, url, title, description, images; for articles: `publishedTime`, `modifiedTime`, `authors`, `tags`)
  - **Twitter** card (`summary_large_image`) with title, description, and optional images
  - Optional `noindex` and `robots` overrides

- **Root layout** (`app/layout.tsx`) – Defines `metadataBase`, default title template (`%s · Glow With Yna`), site-wide description, OG/Twitter defaults, favicons, and `site.webmanifest`.

- **Per-page metadata** – Pages use `pageMeta()` either via `export const metadata` (e.g. home) or `generateMetadata()` (e.g. blog). Blog posts use `type: "article"` and pass an OG image (post `cardImage` or generated OG image).

- **Dynamic OG images** – `app/og/[slug]/route.tsx` generates 1200×630 PNGs for each post (and fallback for unknown slugs) using Next.js `ImageResponse`, with title, short description, site name, and URL.

- **Sitemap & robots** – `app/sitemap.ts` exposes a sitemap; `app/robots.ts` allows all crawlers and references the sitemap URL.

- **JSON-LD** – `components/Seo/JsonLd.tsx` renders a `<script type="application/ld+json">` block for structured data when needed (e.g. Article schema).

## Configuration

- **Site metadata:** `consts.ts` (`siteName`, `siteDescription`, `siteUrl`)
- **Categories & emojis:** `CATEGORY_EMOJI` in `consts.ts`
- **Recommended posts:** `RECOMMENDED_SLUGS` in `consts.ts`

## Deploy

Deploy on [Vercel](https://vercel.com); connect the repo and use the default Next.js settings. Analytics are enabled via `@vercel/analytics`.

## 👥 Contributors

- **Danuson Tarangkul** - [github.com/danusontarangkul](https://github.com/danusontarangkul)
