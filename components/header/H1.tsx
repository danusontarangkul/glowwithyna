import React from "react";
import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "md:text-2xl text-xl font-bold text-center md:text-left",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1;
