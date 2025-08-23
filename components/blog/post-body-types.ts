import type { ReactElement } from "react";
import type { PostMeta } from "@/types/blog";

export type PostBodyComponent = (props: {
  meta: PostMeta;
}) => ReactElement | null;
