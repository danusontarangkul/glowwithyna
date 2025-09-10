import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      If you&rsquo;re dealing with hyperpigmentation, sunscreen is your #1
      skincare essential. Without it, no serum or treatment will work as
      effectively because UV exposure continues to trigger dark spots and uneven
      skin tone.
    </p>
    <p>
      The good news? Korean sunscreens are lightweight, hydrating, and
      comfortable enough to wear daily, making it easier than ever to stay
      consistent with SPF. Here are some top picks that are great for protecting
      your skin while helping fade pigmentation.
    </p>

    <h2>
      <a
        href="https://amzn.to/47rd4rL"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        Anua Sunscreen
      </a>
    </h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/annua.webp"
      alt="Anua sunscreen"
      width={250}
      height={400}
      className="block mx-auto my-4"
    />
    <p>
      Known for its gentle, soothing formulas, Anua&rsquo;s sunscreen gives you
      broad-spectrum protection while keeping the skin hydrated. Its lightweight
      finish makes it perfect for daily use, even on sensitive skin.
    </p>

    <h2>
      <a
        href="https://amzn.to/4n6QHfw"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        Haruharu Wonder Sunscreen
      </a>
    </h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/haru1.webp"
      alt="Haruharu Wonder sunscreen"
      width={250}
      height={400}
      className="block mx-auto my-4"
    />
    <p>
      This sunscreen combines nourishing ingredients with strong UV defense. It
      absorbs quickly without leaving a white cast, making it a great option for
      those who want sun protection that feels natural on the skin.
    </p>

    <h2>
      <a
        href="https://amzn.to/4g4wDZ2"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        d&rsquo;Alba Sunscreen
      </a>
    </h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/d%27alba.webp"
      alt="d'Alba sunscreen"
      width={250}
      height={400}
      className="block mx-auto my-4"
    />
    <p>
      Luxurious yet practical, d&rsquo;Alba&rsquo;s sunscreen is infused with
      antioxidants and skin-repairing ingredients that go beyond sun protection.
      It leaves the skin looking radiant and healthy while preventing further
      darkening of spots.
    </p>

    <h2>
      <a
        href="https://amzn.to/3UQDFHd"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        Isntree Sunscreen
      </a>
    </h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/inis%20free.webp"
      alt="Isntree sunscreen"
      width={200}
      height={300}
      className="block mx-auto my-4"
    />
    <p>
      A cult-favorite for a reason. Isntree&rsquo;s sunscreen has a watery,
      lightweight texture that&rsquo;s perfect for oily or combination skin.
      It&rsquo;s also enriched with calming ingredients to reduce redness and
      irritation while protecting against UV rays.
    </p>

    <h2>
      <a
        href="https://amzn.to/4mWz5n1"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="text-blue-600 underline"
      >
        Mixsoon Sunscreen
      </a>
    </h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-korean-sunscreens-for-oily-skin/mission.webp"
      alt="Mixsoon sunscreen"
      width={250}
      height={400}
      className="block mx-auto my-4"
    />
    <p>
      A soothing, skin-barrier-friendly sunscreen that hydrates while shielding
      your skin from harmful UV rays. Lightweight, breathable, and ideal for
      sensitive skin.
    </p>

    <h2>Why Sunscreen Matters for Hyperpigmentation</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>Prevents existing dark spots from worsening</li>
      <li>Protects skin from UV-induced damage and premature aging</li>
      <li>Boosts the effectiveness of brightening treatments</li>
      <li>Keeps complexion even and radiant over time</li>
    </ul>

    <p>
      <strong>Pro Tip:</strong> Reapply every 2&ndash;3 hours when outdoors to
      maintain full skin protection. Pair sunscreen with targeted treatments,
      such as vitamin C or niacinamide, for optimal results.
    </p>
  </PostBody>
);

export default Body;
