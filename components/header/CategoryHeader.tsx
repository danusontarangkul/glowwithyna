import H1 from "@/components/header/H1";
import { emojiForTop, emojiForChild } from "@/consts";
import { titleCaseFromSlug } from "@/util/helper";

export default function CategoryHeading({ path }: { path: string[] }) {
  const current = path[path.length - 1];

  const emoji =
    path.length <= 1
      ? emojiForTop(current ?? "")
      : emojiForChild(path.slice(0, -1), current ?? "");

  const label = current ? titleCaseFromSlug(current) : "Categories";

  return (
    <H1 className="pt-4">
      {emoji ? (
        <span className="mr-2" aria-hidden>
          {emoji}
        </span>
      ) : null}
      {label}
    </H1>
  );
}
