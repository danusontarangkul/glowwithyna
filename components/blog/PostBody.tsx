// app/components/blog/PostBody.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function PostBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "leading-relaxed [&>p]:my-5 [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:text-xl [&>h3]:my-3 [&>h2]:font-semibold [&>h3]:font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
}
