import { PillLinkGroup } from "@/components/group/PillLinkGroup";
import { emojiForTop, emojiForChild } from "@/consts";
import { allPosts } from "@/lib/posts-registry";
import { titleCaseFromSlug } from "@/util/helper";

function topLevelCategorySlugs(): string[] {
  const set = new Set<string>();
  for (const post of allPosts) {
    const first = post.categories[0];
    if (first) set.add(first);
  }
  return Array.from(set).sort();
}

function childCategorySlugsOfPath(path: string[]): string[] {
  const children = new Set<string>();
  for (const post of allPosts) {
    const matches = path.every((seg, i) => post.categories[i] === seg);
    const next = post.categories[path.length];
    if (matches && next) children.add(next);
  }
  return Array.from(children).sort();
}

export default function CategoryLevelBar({
  path = [],
  extraTopLinks = [],
  includeExtraOnSublevels = false,
  className = "",
}: {
  path?: string[];
  extraTopLinks?: { label: string; href: string; icon?: React.ReactNode }[];
  includeExtraOnSublevels?: boolean;
  className?: string;
}) {
  const isTopLevel = path.length === 0;

  const dynamicSlugs = isTopLevel
    ? topLevelCategorySlugs()
    : childCategorySlugsOfPath(path);

  const dynamicItems = dynamicSlugs.map((slug) => ({
    label: titleCaseFromSlug(slug),
    href: isTopLevel
      ? `/category/${slug}`
      : `/category/${[...path, slug].join("/")}`,
    icon: isTopLevel ? emojiForTop(slug) : emojiForChild(path, slug),
  }));

  const shouldIncludeExtras = isTopLevel || includeExtraOnSublevels;
  const items = shouldIncludeExtras
    ? [...dynamicItems, ...extraTopLinks]
    : dynamicItems;

  if (items.length === 0) return null;

  return (
    <PillLinkGroup
      items={items}
      ariaLabel={isTopLevel ? "Top categories" : "Subcategories"}
      className={className}
    />
  );
}
