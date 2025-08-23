import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, allPosts } from "@/lib/posts-registry";
import { pageMeta } from "@/lib/seo";
import H1 from "@/components/header/H1";
import { DISCLAIMER } from "@/consts";
import { PostBodyComponent } from "@/components/blog/post-body-types";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };

  return pageMeta(`/blog/${post.slug}`, post.title, post.description, {
    type: "article",
    images: post.cardImage ?? `/og/${post.slug}.png`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  let Body: PostBodyComponent | null = null;
  try {
    const mod = await import(`@/components/blog/posts/${post.slug}`);
    Body = (mod.default ?? null) as PostBodyComponent | null;
  } catch {
    return notFound();
  }
  if (!Body) return notFound();

  return (
    <main className="pt-6">
      <article className="px-4 md:px-0">
        <H1>{post.title}</H1>
        <p className="mt-1 text-sm text-gray-600 mb-6">
          <span className="font-semibold">Disclaimer:</span> {DISCLAIMER}
        </p>
        <Body meta={post} />
      </article>
    </main>
  );
}
