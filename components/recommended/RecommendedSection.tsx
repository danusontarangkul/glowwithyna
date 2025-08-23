import { getPostsBySlugs } from "@/lib/posts-registry";
import RecommendedGrid from "./RecommendedGrid";
import { RECOMMENDED_SLUGS } from "@/consts";

export default function RecommendedSection({
  heading = "Recommended",
  count = 4,
  className,
}: {
  heading?: string;
  count?: number;
  className?: string;
}) {
  const posts = getPostsBySlugs(RECOMMENDED_SLUGS as string[]).slice(0, count);

  const items = posts.map((p) => ({
    title: p.title,
    href: `/blog/${p.slug}`,
    imageSrc: p.cardImage ?? `/og/${p.slug}`,
    imageAlt: p.imageAlt ?? p.title,
  }));

  if (items.length === 0) return null;
  return (
    <RecommendedGrid
      heading={heading}
      items={items.map((item) => ({
        ...item,
        imageSrc: item.imageSrc.toString(),
      }))}
      className={className}
    />
  );
}
