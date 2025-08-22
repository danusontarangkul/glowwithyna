// types/blog.ts
export type PostMeta = {
  slug: string; // "hello-world"
  title: string; // "Hello World"
  description: string; // short preview text
  date: string; // ISO date string
  categories: string[]; // e.g. ["makeup", "cleansers"]
  type?: "regular" | "best" | "compare"; // optional
};
