import { PostMeta } from "@/types/blog";

const unsortedPosts: PostMeta[] = [
  {
    slug: "healthy-eating-5-easy-habits",
    title: "5 Easy Habits to Start Eating Healthier (Plus Tools That Help)",
    description:
      "Simple daily habits—water, veggies, meal prep, home cooking, and smarter snacks—plus tools that make them stick.",
    date: "2025-08-23",
    categories: ["self-care", "routines"],
    imageAlt:
      "Healthy meal prep containers with colorful vegetables and fruit.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/Habits-to-eating-healthier.webp",
  },
];

// Export a sorted *copy* so we don't mutate the checked literal
export const allPosts: PostMeta[] = [...unsortedPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Helpers
export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
export function postsInCategoryPath(path: string[]) {
  return allPosts.filter((post) =>
    path.every((segment, index) => post.categories[index] === segment)
  );
}
export function topLevelCategorySlugs() {
  return Array.from(
    new Set(allPosts.map((post) => post.categories[0]).filter(Boolean))
  );
}
export function getPostsBySlugs(slugs: string[]): PostMeta[] {
  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  return slugs.map((s) => bySlug.get(s)).filter(Boolean) as PostMeta[];
}
