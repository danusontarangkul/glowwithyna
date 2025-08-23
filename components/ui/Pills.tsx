import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type PillLinkProps = Omit<LinkProps, "href"> & {
  href: string;
  label: string;
  icon?: ReactNode | string;
  className?: string;
  newTab?: boolean;
};

const base =
  "inline-flex items-center gap-2 rounded-full border border-black/5 " +
  "bg-rose-50 px-4 py-1.5 text-sm text-gray-800 shadow-sm " +
  "hover:bg-rose-100 transition focus:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-rose-300";

export function PillLink({
  href,
  label,
  icon,
  className,
  newTab,
  ...rest
}: PillLinkProps) {
  return (
    <Link
      href={href}
      className={`${base} ${className ?? ""}`}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon && (
        <span aria-hidden className="text-lg leading-none">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </Link>
  );
}
