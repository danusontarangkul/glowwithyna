import Image from "next/image";
import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";

const Body: PostBodyComponent = () => (
  <PostBody>
    {" "}
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/lemon-ginger-shot-wellness-recipe/2024_001_Wellness-Shot-Kurkuma-05.webp"
      alt="Fresh lemon ginger wellness shot in a glass"
      width={300}
      height={200}
      className=" block mx-auto"
    />
    <p>
      Starting my day with a lemon ginger shot has been a game-changer. Not only
      does it wake me up better than coffee sometimes, but it also gives me that
      extra immunity boost I need.
    </p>
    <p>
      <strong>Why I love it:</strong> Lemon is packed with Vitamin C for healthy
      skin and immunity, while ginger helps with inflammation, digestion, and
      metabolism. Together, they&apos;re the ultimate detox combo for energy and
      gut health.
    </p>
    <p>
      I make mine at home with this{" "}
      <a
        href="https://amzn.to/4oHXIVK"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        juicer
      </a>
      . It&apos;s lightweight, easy to clean, and perfect if you love fresh
      juices or wellness shots. Honestly, it makes the whole process so much
      faster compared to squeezing by hand.
    </p>
    <h2>Recipe: Easy Lemon Ginger Shot</h2>
    <h3>Ingredients (makes 4&ndash;5 shots):</h3>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>2 medium lemons 🍋</li>
      <li>2&ndash;3 inch piece of fresh ginger 🌿</li>
      <li>1&ndash;2 tsp honey (optional, for sweetness)</li>
      <li>A pinch of cayenne pepper (optional, for metabolism boost)</li>
    </ul>
    <h3>Instructions:</h3>
    <ol className="[&>li]:my-2 list-decimal pl-6">
      <li>Wash the lemons and ginger thoroughly.</li>
      <li>Peel the ginger (optional if your juicer can handle skin).</li>
      <li>Cut lemons into halves.</li>
      <li>
        Run lemons and ginger through your{" "}
        <a
          href="https://amzn.to/4oHXIVK"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="text-blue-600 underline"
        >
          juicer
        </a>
        .
      </li>
      <li>
        Add honey or cayenne if you like, stir well, and pour into a small glass
        or shot bottle.
      </li>
    </ol>
    <p>
      👉 Store extra in the fridge for up to 3 days for a ready-to-go wellness
      boost.
    </p>
    <h2>When to Drink It?</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        First thing in the morning on an empty stomach for maximum absorption.
      </li>
      <li>Before meals to kickstart digestion.</li>
      <li>As a mid-day pick-me-up when you need energy without coffee.</li>
    </ul>
    <p>
      It&apos;s a tiny shot, but it feels like a big step toward self-care,
      wellness, and glowing skin. 🌸
    </p>
    <p>
      If you want to start this habit at home, I highly recommend the{" "}
      <a
        href="https://amzn.to/4oHXIVK"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        juicer
      </a>{" "}
      I use. Pair it with fresh lemons and ginger, and you&apos;ve got yourself
      the easiest wellness ritual ever.
    </p>
  </PostBody>
);

export default Body;
