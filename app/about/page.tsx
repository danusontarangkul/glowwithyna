import H1 from "@/components/header/H1";
import RecommendedSection from "@/components/recommended/RecommendedSection";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="px-4">
      <H1 className="pt-4">About</H1>

      <div className="flex justify-center py-4">
        <Image
          src="/assets/profile.png"
          alt="Akina profile photo"
          width={220}
          height={300}
          className="rounded-xl shadow-lg object-cover"
          priority
        />
      </div>

      <section className="space-y-6 text-lg leading-relaxed max-w-2xl mx-auto">
        <p>
          Hi, I&apos;m <span className="font-semibold">Akina</span>! 💕
          I&apos;ve always been passionate about beauty and self-improvement
          because I believe there&apos;s always a way to become a better version
          of yourself, inside and out.
        </p>

        <p>
          For me, beauty isn&apos;t just about skincare or makeup, it&apos;s
          about the little habits and choices that help you feel confident,
          radiant, and truly <span className="italic">you</span>.
        </p>

        <p>
          I created this blog as a space to share my favorite skincare and
          makeup finds, along with tips on building healthy habits and improving
          your daily routine.
        </p>

        <p>
          My goal is simple: to help the girls out there <span>glow ✨</span> by
          making beauty and self-care feel fun, accessible, and empowering.
        </p>

        <p className="font-medium text-pink-600 text-center text-xl">
          Let&apos;s grow and glow together 🌸
        </p>
      </section>
      <RecommendedSection className="mt-12" />
      <footer className="mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Glow With Yna. All rights reserved.
      </footer>
    </main>
  );
}
