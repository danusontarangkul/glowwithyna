export const pageMeta = (path: string, title: string, description: string) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
  twitter: { title, description },
});
