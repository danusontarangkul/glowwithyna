import { siteDescription, siteName } from "@/consts";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="">
      <Link href="/" className="block bg-headerBackground">
        <div className="max-w-screen-md mx-auto px-5 py-4 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ">
            {/* put your image at /public/branding/avatar.png or change the src */}
            <Image src="/assets/Logo_Yna.png" alt="Glow with Yna" fill />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">{siteName}</h1>
            <p className="text-sm text-gray-600">Self-improvement tips</p>
          </div>
        </div>
      </Link>
    </header>
  );
}
