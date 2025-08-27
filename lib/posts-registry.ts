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
  {
    slug: "3-day-beginner-healthy-eating-plan",
    title: "3-Day Beginner Healthy Eating Plan (Simple & Time-Saving Tools)",
    description:
      "A beginner-friendly 3-day plan with simple, balanced meals and the kitchen tools that make healthy eating fast, affordable, and sustainable.",
    date: "2025-08-24",
    categories: ["self-care", "routines"],
    imageAlt:
      "Three-day healthy eating plan with simple meals and helpful kitchen tools.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/3-Day%20Beginner%20Healthy%20Eating%20Plan/Healthy%20eating%20plan.webp",
  },
  {
    slug: "summer-outfit-ideas",
    title: "Summer Outfit Diary: What I Wore in Jeju",
    description:
      "My summer outfit diary from Jeju Island—flowy dresses, chic shorts, lightweight tops, and comfy sneakers. Breathable, packable, and budget-friendly finds perfect for hot summer trips.",
    date: "2025-08-27",
    categories: ["fashion", "outfit-ideas"],
    imageAlt:
      "Summer outfits in Jeju Island with flowy dresses, shorts, and sneakers.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/Summer%20Outfit%20Ideas/Summer%20outfit%20Ideas.webp",
  },
  {
    slug: "citizenship-ceremony-outfit",
    title: "My Citizenship Ceremony Outfit",
    description:
      "Celebrating a huge milestone—becoming a U.S. citizen. The chic, comfortable outfit I wore on this emotional, unforgettable day.",
    date: "2025-08-28",
    categories: ["fashion", "outfit-ideas"],
    imageAlt:
      "Chic square pants and elegant white top styled for a citizenship ceremony.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/citizenship-outfit-idea/Naturalization%20outfit-2.webp",
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
