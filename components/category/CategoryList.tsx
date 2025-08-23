import { PostMeta } from "@/types/blog";
import CategoryListCard from "./CategoryListCard";

export default function CategoryList({
  posts,
  className = "",
}: {
  posts: PostMeta[];
  className?: string;
}) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className={["flex flex-col gap-10 mt-8", className].join(" ")}>
      {posts.map((post) => (
        <CategoryListCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
