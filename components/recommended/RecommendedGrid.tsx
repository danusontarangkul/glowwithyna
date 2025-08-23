import SectionHeading from "../header/SectionHeading";
import RecommendedCard, { type RecommendedCardProps } from "./RecommendedCard";

export default function RecommendedGrid({
  heading = "Recommended",
  items,
  className,
}: {
  heading?: string;
  items: RecommendedCardProps[];
  className?: string;
}) {
  return (
    <section className={className}>
      <SectionHeading>{heading}</SectionHeading>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
        {items.map((item) => (
          <RecommendedCard key={item.href} {...item} />
        ))}
      </div>
    </section>
  );
}
