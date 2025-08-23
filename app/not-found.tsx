// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-start h-screen text-center px-4 mt-32">
      <h1 className="text-4xl font-bold mb-4">404 &ndash; Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-headerBackground hover:opacity-80"
      >
        Go back home
      </Link>
    </main>
  );
}
