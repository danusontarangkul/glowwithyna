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
  {
    slug: "lemon-ginger-wellness-shot",
    title: "Lemon Ginger Wellness Shot Recipe 🍋",
    description:
      "An easy, energizing wellness shot with lemon and ginger for immunity, digestion, and glowing skin. Simple recipe, quick to make, and my favorite juicer pick.",
    date: "2025-08-29",
    categories: ["self-care", "gut-health"],
    imageAlt:
      "Fresh lemon ginger wellness shot served in a small glass with lemons and ginger beside it.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/lemon-ginger-shot-wellness-recipe/2024_001_Wellness-Shot-Kurkuma-05.webp",
  },
  {
    slug: "best-korean-cleansers-for-hyperpigmentation",
    title: "Best Korean Cleansers for Hyperpigmentation",
    description:
      "Gentle yet effective Korean cleansers that help fade dark spots, brighten skin tone, and support a healthy moisture barrier—perfect for tackling hyperpigmentation.",
    date: "2025-08-30",
    categories: ["skincare", "cleansers"],
    imageAlt:
      "Collection of Korean cleansers recommended for fading hyperpigmentation and brightening skin.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-cleansers-for-hyperpigmentation/Hyperpigmentation-Cleansers.webp",
  },
  {
    slug: "best-korean-toners-for-hyperpigmentation",
    title: "Best Korean Toners for Hyperpigmentation",
    description:
      "Lightweight and soothing Korean toners that hydrate, calm irritation, and brighten uneven skin tone—helping fade dark spots and support a radiant complexion.",
    date: "2025-08-31",
    categories: ["skincare", "toners"],
    imageAlt:
      "Collection of Korean toners recommended for brightening skin and reducing hyperpigmentation.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-toners-for-hyperpigmentation/Toner%20pads-2.webp",
  },
  {
    slug: "feel-good-habits-everyday",
    title: "Simple Feel-Good Habits for Every Part of Your Day",
    description:
      "Small, intentional habits for morning, midday, afternoon, and night—hydration, movement, mindful breaks, and winding down—to boost energy, balance, and peace.",
    date: "2025-09-02",
    categories: ["self-care", "routines"],
    imageAlt:
      "Daily self-care essentials including water, journal, tea, and cozy setup representing balanced routines.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/feel-good-habits/Feel%20good%20habits.webp",
  },
  {
    slug: "best-korean-sunscreens-hyperpigmentation",
    title: "Best Korean Sunscreens for Hyperpigmentation",
    description:
      "Lightweight, hydrating, and protective Korean sunscreens that help prevent dark spots while keeping your skin radiant and healthy.",
    date: "2025-09-10",
    categories: ["self-care", "routines"],
    imageAlt:
      "Flatlay of popular Korean sunscreens including Anua, Haruharu, d'Alba, Isntree, and Mixsoon.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/korean%20sunscreens.webp",
  },
  {
    slug: "easy-chia-pudding-recipes",
    title: "Easy Chia Pudding Recipes (Perfect in Mason Jars!)",
    description:
      "Refreshing, filling, and easy-to-prep chia pudding recipes with fun flavors like matcha, tiramisu, blueberry, and mango—perfect for mason jars and healthy snacking.",
    date: "2025-09-02",
    categories: ["self-care", "routines"],
    imageAlt: "Layered chia pudding in mason jars topped with fresh fruit.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/easy-chia-pudding-recipes/Chia%20Pudding%20Recipe.webp",
  },
  {
    slug: "exfoliating-unclogging-pores-method",
    title:
      "Exfoliating and Unclogging Pores Method That Actually Worked for Me",
    description:
      "A simple, effective pore-care routine using Ilso Sebum Softener, Green Tomato Clay Cleanser, and Lindsay Cooling Modeling Mask that helps remove sebum and refresh the skin.",
    date: "2025-09-02",
    categories: ["self-care", "routines", "skincare", "exfoliants"],
    imageAlt:
      "Skincare products including Ilso Sebum Softener, Green Tomato Clay Cleanser, and Lindsay Cooling Modeling Mask for unclogging pores.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/exfoliating-and-unclogging-pores-method-that-actually-worked-for-me/Exfoliating%20Products.webp",
  },
  {
    slug: "3-self-help-books-that-changed-my-life",
    title: "3 Self-Help Books That Changed How I See Life",
    description:
      "Atomic Habits, The Subtle Art of Not Giving a F*ck, and Don’t Believe Everything You Think — three books that reshaped how I approach growth, mindset, and everyday life.",
    date: "2025-09-06",
    categories: ["self-care", "reads"],
    imageAlt:
      "Stack of inspiring self-help books including Atomic Habits and The Subtle Art of Not Giving a F*ck.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-self-help-books-to-read/self-help%20books.webp",
  },
  {
    slug: "best-lipsticks-for-warm-and-cool-undertones",
    title: "The Best Lipsticks for Warm and Cool Undertones",
    description:
      "Find your perfect lipstick shade by matching it to your undertone—cool, warm, or neutral. Here are top Amazon picks that flatter every skin tone.",
    date: "2025-09-06",
    categories: ["self-care", "makeup"],
    imageAlt:
      "Collection of warm and cool-toned lipsticks including pinks, berries, corals, and peachy nudes.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/warm-and-cool-toned-lipsticks/warm%20and%20cool%20tone%20lipsticks.webp",
  },
  {
    slug: "starting-eat-clean-amazon-grocery-guide",
    title: "Starting to Eat Clean: My Beginner-Friendly Amazon Grocery Guide",
    description:
      "A beginner-friendly guide to clean eating with Amazon staples for protein, veggies, fruits, snacks, whole grains, and drinks.",
    date: "2025-09-10",
    categories: ["self-care", "clean eating"],
    imageAlt:
      "Amazon clean eating grocery haul with proteins, fruits, vegetables, and pantry staples.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/beginner-friendly-amazon-grocery-guide/Grocery%20List-2.webp",
  },
  {
    slug: "benefits-of-matcha-cold-whisk-method",
    title: "The Benefits of Matcha + My Cold Whisk Method",
    description:
      "Why matcha is worth sipping—steady energy, antioxidants, skin support, and metabolism benefits—plus a simple cold whisk technique for a smooth, frothy iced latte.",
    date: "2025-09-20",
    categories: ["self-care", "routines"],
    imageAlt:
      "Frothy iced matcha latte being whisked cold in a cup, ready to pour over ice.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/matcha-benefits/Matcha%20Benefits.webp",
  },
  {
    slug: "link-between-cortisol-stress-weight-gain",
    title:
      "The Link Between Cortisol, Stress & Weight Gain (and What to Do About It)",
    description:
      "How elevated cortisol drives cravings, belly fat, and poor sleep—plus practical, science-aligned routines to lower stress and support healthy weight.",
    date: "2025-09-20",
    categories: ["self-care", "routines"],
    imageAlt:
      "Calm morning routine setup with matcha, journal, and diffuser to support lower cortisol.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/lowering-cortisol/Lowering%20Cortisol.webp",
  },
  {
    slug: "fall-outfit-idea-chic-cozy-staples",
    title: "Fall Outfit Idea: Chic & Cozy Staples You\u2019ll Wear on Repeat",
    description:
      "A simple, polished fall look—white cami, grey cardigan, denim skort, brown belt, knee-high boots, and a slouchy bag—versatile layers for coffee dates to brunch.",
    date: "2025-09-27",
    categories: ["fashion", "outfit ideas"],
    imageAlt:
      "Chic fall outfit with white cami, grey cardigan, denim skort, brown belt, knee-high boots, and a slouchy bag.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/fall%20outfits/Fall%20outfits-2.webp",
  },
  {
    slug: "chic-fall-outfit-you-can-shop-on-amazon",
    title: "Chic Fall Outfit You Can Shop on Amazon",
    description:
      "Cozy-meets-polished fall look—deep red cardigan, classic denim, black belt, chunky-heel boots, and a structured black bag—easy to wear from coffee runs to casual dinners.",
    date: "2025-10-07",
    categories: ["fashion", "outfit ideas"],
    imageAlt:
      "Chic fall outfit with a deep red cardigan, denim jeans, black belt, chunky heel boots, and a structured black bag.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/fall%20outfits%20part%202/fall%20outfits%202.webp",
  },
  {
    slug: "cold-weather-moisturizers-that-saved-my-skin",
    title: "Cold Weather Moisturizers That Saved My Skin",
    description:
      "Cold-weather moisturizer picks for combination skin—light gel creams and rich barrier creams to keep cheeks soft, T-zone balanced, and makeup smooth all season.",
    date: "2025-10-07",
    categories: ["skincare", "moisturizers"],
    imageAlt:
      "Flatlay of winter skincare moisturizers ideal for combination skin, including gel creams and rich barrier creams.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best%20moisturizers/Moisturizers.webp",
  },
  {
    slug: "cozy-fall-home-finds",
    title: "Cozy Fall Home Finds That Make My Space Feel So Warm & Inviting",
    description:
      "Simple fall upgrades—throw pillows, a candle warmer lamp, scented candles, and pumpkin accents—that instantly create a warm, peaceful, and inviting vibe without a full redecoration.",
    date: "2025-10-10",
    categories: ["lifestyle", "home finds"],
    imageAlt:
      "Cozy fall home setup with soft throw pillows, a glowing candle warmer lamp, scented candles, and neutral pumpkin decor creating a warm, inviting atmosphere.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/amazon-fall-home-finds-2025/Amazon%20Fall%20Finds.webp",
  },
  {
    slug: "wide-calf-fall-boots",
    title: "Amazon Wide-Calf Boots That Keep Me Warm & Stylish All Season",
    description:
      "Finally — stylish, cozy wide-calf boots that actually fit! These Amazon picks are comfortable, affordable, and go with everything from jeans to sweater dresses this fall and winter.",
    date: "2025-10-14",
    categories: ["fashion", "outfits"],
    imageAlt:
      "A lineup of stylish wide-calf boots in black, brown, and buckle styles placed against a fall-themed background.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/fall%20boots/wide%20calf-friendly%20boots.webp",
  },
  {
    slug: "transitional-jackets-you-will-love-this-season",
    title: "Transitional Jackets You'll Love This Season",
    description:
      "Lightweight, stylish outerwear for unpredictable fall days—short trench and cropped jacket picks that layer easily over basics and pair with jeans, skirts, or boots.",
    date: "2025-10-16",
    categories: ["fashion", "outfits"],
    imageAlt:
      "Three fall jackets—a short trench, a green cropped jacket, and a black cropped jacket—styled for a casual autumn outfit.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/fall%20jackets/Fall%20Jackets.webp",
  },
  {
    slug: "amazon-finds-that-make-cleaning-easier",
    title: "Amazon Finds That Make Cleaning Easier",
    description:
      "Four tools that cut scrub time and reach tricky spots—scraper, crevice brushes, a portable carpet cleaner, and a steam cleaner—for a faster, fresher home routine.",
    date: "2025-10-16",
    categories: ["home", "cleaning"],
    imageAlt:
      "A curated set of cleaning tools including a scraper, crevice brushes, a portable carpet cleaner, and a steam cleaner arranged on a tidy surface.",
    cardImage:
      "https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/cleaning%20tools/Cleaning%20tools.webp",
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
