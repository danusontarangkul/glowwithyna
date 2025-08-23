import Image from "next/image";
import Link from "next/link";

export type RecommendedCardProps = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export default function RecommendedCard({
  title,
  href,
  imageSrc,
  imageAlt = "",
  className,
}: RecommendedCardProps) {
  return (
    <article
      className={[
        "h-full w-full rounded-xl bg-white/70 p-3 shadow-sm",
        className ?? "",
      ].join(" ")}
    >
      <Link href={href} className="group flex h-full w-full flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-rose-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw"
            quality={90}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <h3 className="mt-3 min-h-[2.75rem] text-base font-semibold leading-snug line-clamp-2 group-hover:underline">
          {title}
        </h3>

        <span className="mt-auto inline-flex items-center text-sm">
          Read More{" "}
          <span aria-hidden className="ml-0.5">
            &rsaquo;
          </span>
        </span>
      </Link>
    </article>
  );
}
