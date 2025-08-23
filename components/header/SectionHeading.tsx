import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  className,
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={cn(
        "md:text-2xl text-xl font-semibold tracking-tight md:text-left text-center",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {children}
    </h2>
  );
}
