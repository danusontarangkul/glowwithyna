import CategoryList from "@/components/category/CategoryList";
import { postsInCategoryPath } from "@/lib/posts-registry";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ segments?: string[] }>;
}) {
  const { segments = [] } = await params;
  const posts = postsInCategoryPath(segments);

  return (
    <section>
      <CategoryList posts={posts} />
    </section>
  );
}
