import { PostMeta } from "@/types/blog";

const unsortedPosts = [
  {
    slug: "best-korean-face-wash-for-hyperpigmentation",
    title: "Best Korean Face Wash for Hyperpigmentation (2025)",
    description: "Brightening cleansers that are gentle but effective.",
    date: "2025-08-22",
    categories: ["skin-care", "cleansers"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "sunscreen-mistakes-that-hurt-your-skin",
    title: "7 Sunscreen Mistakes That Hurt Your Skin",
    description: "The small errors that ruin protection (and how to fix them).",
    date: "2025-08-18",
    categories: ["skin-care", "sunscreen"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "foundation-shade-matching-at-home",
    title: "Foundation Shade Matching at Home",
    description: "Three simple tests so you stop guessing undertones.",
    date: "2025-08-15",
    categories: ["make-up", "base"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "lip-gloss-vs-balm-which-to-choose",
    title: "Lip Gloss vs Balm: Which Should You Choose?",
    description: "When shine wins and when barrier repair matters.",
    date: "2025-08-12",
    categories: ["make-up", "lips"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "affordable-bathroom-upgrades",
    title: "Affordable Ways to Create a Luxurious Bathroom",
    description: "Budget-friendly finds that make your space feel high-end.",
    date: "2025-07-25",
    categories: ["home-finds", "bathroom"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "self-care-evening-routine",
    title: "My Self-Care Evening Routine That Actually Stuck",
    description: "Tiny rituals for winding down without screens.",
    date: "2025-07-18",
    categories: ["self-care", "routines", "evening"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "books-that-changed-my-routine",
    title: "Books That Changed My Routine",
    description: "The reads that improved my skin and habits.",
    date: "2025-07-10",
    categories: ["books"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "drugstore-mascara-that-survived-humidity",
    title: "The Drugstore Mascara That Survived Humidity",
    description: "A week of wear tests in sweaty weather.",
    date: "2025-07-02",
    categories: ["make-up", "eyes"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "double-cleansing-explained",
    title: "Double Cleansing, Explained",
    description: "When to do it, and when it’s overkill.",
    date: "2025-06-24",
    categories: ["skin-care", "cleansers"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
  {
    slug: "minimal-travel-makeup-kit",
    title: "My Minimal Travel Makeup Kit",
    description: "Carry-on friendly picks for a full face.",
    date: "2025-06-12",
    categories: ["make-up", "travel"],
    imageAlt: "A bottle of a Korean face wash",
    cardImage: "/assets/blog/sample.png",
  },
] satisfies PostMeta[];

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
