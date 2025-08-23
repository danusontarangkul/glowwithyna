import Image from "next/image";
import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      Eating healthier doesn&rsquo;t have to mean strict diets or giving up all
      your favorite foods. It&rsquo;s about small, consistent changes that add
      up over time. With the right tools and a few simple habits, healthy eating
      starts to feel natural &mdash; and much easier to stick with.
    </p>
    <p>
      Here are five easy habits to help you start eating healthier, plus simple
      items that make it even easier to stay on track.
    </p>

    <h2>1. Drink More Water 💧</h2>
    <p>
      Staying hydrated is one of the easiest ways to improve your overall
      health. Water supports energy, digestion, and can even reduce unnecessary
      snacking.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/water-bottle.webp"
      alt="Reusable water bottle on a desk"
      width={200}
      height={400}
      className="rounded-xl border block mx-auto"
    />

    <p>
      <strong>
        👉{" "}
        <a
          href="https://amzn.to/45qLpWx"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Reusable Water Bottle
        </a>
        :
      </strong>{" "}
      Carrying a bottle reminds you to sip throughout the day instead of
      forgetting. Keep one on your desk, in your car, or in your gym bag so
      you&rsquo;re never without hydration.
    </p>

    <h2>2. Eat More Veggies 🥦</h2>
    <p>
      Adding vegetables to your meals boosts nutrition, helps you feel full, and
      balances your plate. The trick is keeping prep quick so you actually
      follow through.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/veg-cutter.webp"
      alt="Vegetable cutter on a kitchen counter"
      width={500}
      height={300}
      className="rounded-xl border block mx-auto"
    />

    <p>
      <strong>
        👉{" "}
        <a
          href="https://amzn.to/4fDl379"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Veggie Cutter
        </a>
        :
      </strong>{" "}
      This tool saves time and makes chopping effortless, so you&rsquo;re far
      more likely to add veggies instead of reaching for processed options.
    </p>

    <h2>3. Prep &amp; Pack Your Meals 🍱</h2>
    <p>
      Meal prepping helps you avoid last-minute fast food and keeps portions in
      check. With healthy meals ready to go, better choices happen
      automatically.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/food-cont.webp"
      alt="Meal prep food containers filled with veggies"
      width={500}
      height={300}
      className="rounded-xl border block mx-auto"
    />

    <p>
      <strong>
        👉{" "}
        <a
          href="https://amzn.to/4fAz5WN"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Food Containers
        </a>
        :
      </strong>{" "}
      Use them to pack lunches or portion snacks. Stash ready-to-eat meals in
      the fridge to save time, money, and decision fatigue.
    </p>

    <h2>4. Cook at Home More Often 🍳</h2>
    <p>
      Cooking at home gives you full control over ingredients and flavor.
      It&rsquo;s a great way to explore new recipes and eat fresher meals.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/pots.webp"
      alt="Set of cookware pots and pans"
      width={500}
      height={300}
      className="rounded-xl border block mx-auto"
    />

    <p>
      <strong>
        👉{" "}
        <a
          href="https://amzn.to/4mJV1Bt"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Cooking Set
        </a>
        :
      </strong>{" "}
      Quality cookware makes cooking feel less like a chore. A reliable set
      motivates you to try new recipes and stick with home-cooked meals instead
      of ordering takeout.
    </p>

    <h2>5. Choose Smarter Snacks 🍓</h2>
    <p>
      Snacking isn&rsquo;t bad &mdash; it&rsquo;s about choosing foods that fuel
      you. Swap chips and candy for lighter, portion-friendly options.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/habits-to-start-eating-healthy/fruit-snacks.webp"
      alt="Assorted fruit snack bars"
      width={500}
      height={300}
      className="rounded-xl border block mx-auto"
    />

    <p>
      <strong>
        👉{" "}
        <a
          href="https://amzn.to/4fy4edw"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Fruit Bars
        </a>
        :
      </strong>{" "}
      A go-to sweet snack with clean ingredients: no added sugar, plant-based,
      vegan &amp; gluten-free, paleo, non-GMO, and a bit of fiber. Great when
      you want something sweet and still want to stay on track.
    </p>

    <h2>Final Thoughts</h2>
    <p>
      Building a healthy lifestyle doesn&rsquo;t have to be overwhelming. By
      drinking more water, eating more veggies, prepping meals, cooking at home,
      and choosing smarter snacks, you&rsquo;ll create habits that last. With a
      few helpful tools, staying consistent becomes easier &mdash; and more
      enjoyable.
    </p>
    <p>
      <strong>💡 Which of these five habits will you start with today?</strong>
    </p>
  </PostBody>
);

export default Body;
