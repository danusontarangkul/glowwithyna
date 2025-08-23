import CategoryHeading from "@/components/header/CategoryHeader";
import CategoryLevelBar from "@/components/nav/CategoryLevelBar";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ segments?: string[] }>;
}) {
  const { segments = [] } = await params;
  const categoryPath = segments ?? [];

  return (
    <main>
      <CategoryHeading path={categoryPath} />
      <CategoryLevelBar path={categoryPath} />
      <div className="max-w-screen-md mx-auto px-4 md:px-0">{children}</div>
    </main>
  );
}
