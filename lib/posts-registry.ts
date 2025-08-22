// lib/posts-registry.ts
// SERVER-ONLY: do not import this into Client Components
import type { PostMeta } from "@/types/blog";

// Glob all blog page modules that export `post`
const modules = import.meta.glob("../app/blog/**/page.{tsx,jsx}", {
  eager: true,
}) as Record<string, { post?: PostMeta }>;

function sortNewestFirst(a: PostMeta, b: PostMeta) {
  return a.date < b.date ? 1 : -1;
}

function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Build the master list once at module init
const discovered: PostMeta[] = Object.values(modules)
  .map((m) => m.post)
  .filter(Boolean) as PostMeta[];

export const allPosts: PostMeta[] = discovered.sort(sortNewestFirst);

// Helpers
export function getPostBySlug(slug: string): PostMeta | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

export function postsByType(type: PostMeta["type"]) {
  return allPosts.filter((p) => p.type === type);
}

export function postsInCategory(path: string[]) {
  // matches posts whose categories start with the given path (supports nesting)
  return allPosts.filter((p) =>
    path.every((seg, i) => p.categories[i] === seg)
  );
}

export function allCategoryPaths(): string[][] {
  const paths: string[] = [];
  for (const p of allPosts) {
    for (let i = 1; i <= p.categories.length; i++) {
      paths.push(p.categories.slice(0, i).join("/"));
    }
  }
  return unique(paths).map((s) => s.split("/"));
}
