export const siteName = "Glow With Yna";
export const siteDescription = "Makeup & self-improvement guides for women.";
export const siteUrl = "https://glowwithyna.vercel.app";

export const CATEGORY_EMOJI: Record<string, string> = {
  "skin-care": "✨",
  "make-up": "💄",
  "self-care": "🌸",
  "home-finds": "🏡",
  fashion: "👗",
  "skin-care/cleansers": "🫧",
  "skin-care/sunscreen": "🧴",
  "make-up/base": "🎨",
  "make-up/lips": "💋",
  "make-up/eyes": "👁️",
  "make-up/travel": "✈️",
  "self-care/routines": "⏰",
  "self-care/routines/evening": "🌙",
  "home-finds/bathroom": "🛁",
  "fashion/outfit-ideas": "💡",
};

export function emojiForChild(path: string[], childSlug: string): string {
  const fullPathKey = [...path, childSlug].join("/");
  return (
    CATEGORY_EMOJI[fullPathKey] ||
    CATEGORY_EMOJI[childSlug] ||
    CATEGORY_EMOJI[path[0] ?? ""] ||
    "•"
  );
}

export function emojiForTop(slug: string): string {
  return CATEGORY_EMOJI[slug] || "•";
}

export const RECOMMENDED_SLUGS: string[] = [
  "affordable-bathroom-upgrades",
  "best-korean-face-wash-for-hyperpigmentation",
  "drugstore-mascara-that-survived-humidity",
  "books-that-changed-my-routine",
];

export const DISCLAIMER =
  "This blog contains affiliate links. I may earn a commission at no extra cost to you.";
