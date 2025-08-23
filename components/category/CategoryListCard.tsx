"use client";

import { formatDate } from "@/util/helper";
import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/types/blog";

export type CategoryListCardProps = {
  href: string;
  title: string;
  dateISO: string;
  excerpt: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export default function CategoryListCard({ post }: { post: PostMeta }) {
  return (
    <article className="h-full w-full flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-5">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={post.title}
        className="relative w-[200px] aspect-[2/3] overflow-hidden rounded-lg bg-rose-50 shrink-0"
      >
        <Image
          src={post.cardImage ?? `/og/${post.slug}.png`}
          alt={post.imageAlt ?? post.title}
          fill
          className="object-cover object-center"
          sizes="200px"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-lg sm:text-xl font-semibold leading-snug line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 tracking-wide text-gray-500">
          {formatDate(post.date)}
        </p>
        <p className="text-gray-700 line-clamp-3">{post.description}</p>
        <div>
          <Link
            href={`/blog/${post.slug}`}
            className="font-medium uppercase tracking-wide hover:underline"
          >
            Read More<span aria-hidden>…</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
