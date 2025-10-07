import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <h1>🍁 Chic Fall Outfit You Can Shop on Amazon</h1>

    <p>
      Fall is my favorite season for fashion — cozy layers, rich colors, and
      versatile pieces that make getting dressed so much fun. If you&#39;re
      looking for an easy yet chic outfit you can wear on repeat, I put together
      this Amazon-inspired look that&#39;s stylish, affordable, and perfect for
      everything from coffee runs to casual dinners out.
    </p>

    <h2>Why This Outfit Works for Fall</h2>
    <p>
      The secret to great fall style is layering bold statement pieces with
      timeless basics. This look blends the coziness of a chunky cardigan with
      the everyday polish of classic denim. Add a few carefully chosen
      accessories, and suddenly you&#39;ve got an outfit that feels intentional
      without being fussy.
    </p>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <strong>Bold fall color:</strong> The deep red cardigan gives instant
        autumn vibes.
      </li>
      <li>
        <strong>Everyday base:</strong> A good pair of jeans will anchor your
        outfit and keep it casual but chic.
      </li>
      <li>
        <strong>Effortless polish:</strong> Accessories like a belt and
        structured bag tie the whole look together.
      </li>
      <li>
        <strong>Comfort meets style:</strong> Chunky heel boots give you height
        without sacrificing comfort.
      </li>
    </ul>

    <h2>Shop the Outfit on Amazon</h2>
    <ul className="[&>li]:my-3 list-disc pl-6">
      <li>
        <strong>
          <a
            href="https://amzn.to/3VL97XJ"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Red Cardigan
          </a>
        </strong>{" "}
        — A warm, cozy layer that adds a rich pop of color.
      </li>
      <li>
        <strong>
          <a
            href="https://amzn.to/4nuQ1Bx"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Denim Jeans
          </a>
        </strong>{" "}
        — A timeless staple that works with any fall top.
      </li>
      <li>
        <strong>
          <a
            href="https://amzn.to/4mGQkYE"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Black Belt
          </a>
        </strong>{" "}
        — Simple and classic, it pulls the outfit together.
      </li>
      <li>
        <strong>
          <a
            href="https://amzn.to/4mGQkYE"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Chunky Heel Boots
          </a>
        </strong>{" "}
        — Comfortable yet stylish, great for all-day wear.
      </li>
      <li>
        <strong>
          <a
            href="https://amzn.to/3VIoUGJ"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Black Bag
          </a>
        </strong>{" "}
        — A structured staple you&#39;ll use all season.
      </li>
    </ul>

    <h2>Styling Tips to Make It Your Own</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        Swap the red cardigan for a neutral beige or cream if you prefer a
        softer look.
      </li>
      <li>Layer a white or black cami underneath for versatility.</li>
      <li>Add a scarf or wide-brim hat to lean into full-on fall vibes.</li>
      <li>
        Dress it up with statement earrings or keep it minimal with dainty
        jewelry.
      </li>
    </ul>

    <p className="mt-4">
      ✨ This outfit proves that you don&#39;t need a massive wardrobe to look
      stylish — just a few versatile pieces styled together can create a
      polished fall look you&#39;ll feel confident in.
    </p>
  </PostBody>
);

export default Body;
