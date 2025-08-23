import { siteName } from "@/consts";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="">
      <div className=" bg-headerBackground  p-4">
        <Link
          href="/"
          className="flex items-center gap-4 max-w-screen-md mx-auto"
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="/assets/Logo_Yna.png"
              alt="Glow with Yna"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg font-semibold leading-tight">{siteName}</h1>
            <p className="text-sm text-gray-600">Self-improvement tips</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
