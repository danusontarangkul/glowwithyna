import CategoryLevelBar from "@/components/nav/CategoryLevelBar";
import { siteDescription, siteName } from "@/consts";
import { pageMeta } from "@/lib/seo";

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
    </main>
  );
}
