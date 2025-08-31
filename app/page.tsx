import CategoryLevelBar from "@/components/nav/CategoryLevelBar";
import CategoryList from "@/components/category/CategoryList";
import { siteDescription, siteName } from "@/consts";
import { pageMeta } from "@/lib/seo";
import { allPosts } from "@/lib/posts-registry";

export const metadata = pageMeta("/", siteName, siteDescription, {
  type: "website",
});

export default function Home() {
  return (
    <main>
      <CategoryLevelBar
        path={[]}
        extraTopLinks={[
          { label: "About", href: "/about", icon: "\u2139\uFE0F" },
        ]}
        className="pt-4"
      />

      <section className="px-4 md:px-0">
        <CategoryList posts={allPosts} />
      </section>
    </main>
  );
}
