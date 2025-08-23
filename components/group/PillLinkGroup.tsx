import { PillLink } from "../ui/Pills";
import { PillLinkProps } from "../ui/Pills";

export function PillLinkGroup({
  items,
  className,
  ariaLabel = "Categories",
}: {
  items: PillLinkProps[];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel} className={`pt-2 px-4 md:px-0 ${className}`}>
      <div className="flex flex-wrap gap-2">
        {items.map((linkItem) => (
          <PillLink key={`${linkItem.href}-${linkItem.label}`} {...linkItem} />
        ))}
      </div>
    </nav>
  );
}
