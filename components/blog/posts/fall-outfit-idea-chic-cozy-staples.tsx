import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      Fall is one of my favorite seasons to dress for&mdash;cozy layers, rich
      colors, and effortless pieces that still feel polished. Here&rsquo;s a
      simple but chic fall outfit that&rsquo;s perfect for coffee dates, brunch
      with friends, or just soaking in those crisp autumn vibes.
    </p>

    <h2>Outfit Breakdown</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <strong>White Cami</strong> &mdash; A staple that goes with everything
        and works perfectly as a layering base.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/4nQVodW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>

      <li>
        <strong>Grey Cardigan</strong> &mdash; Light but cozy, it adds the
        perfect fall touch without being too heavy.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/3KoE0yH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>

      <li>
        <strong>Denim Skort</strong> &mdash; The look of a denim skirt with the
        comfort and practicality of shorts.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/4pGqXsu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>

      <li>
        <strong>Brown Belt</strong> &mdash; A simple accessory that ties
        everything together and adds polish.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/3ICdmls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>

      <li>
        <strong>Knee-High Boots</strong> &mdash; Instantly elevates the outfit
        and makes it feel more fall-ready.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/4nhkPW6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>

      <li>
        <strong>Slouchy Bag</strong> &mdash; Soft structure and versatile style
        that pulls the look together.
        <div className="mt-1 flex items-center gap-2">
          👉
          <a
            href="https://amzn.to/3KllDe1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Shop here
          </a>
        </div>
      </li>
    </ul>

    <h2 className="mt-8">Why I Love This Look</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        Cozy yet chic: the cardigan adds comfort while the belt and boots pull
        it all together.
      </li>
      <li>
        Perfect for transitional weather&mdash;layer up for cool evenings, keep
        it light for warmer afternoons.
      </li>
      <li>
        Each piece is versatile enough to mix and match with other fall staples,
        so you&rsquo;ll wear them on repeat.
      </li>
    </ul>

    <p className="mt-4">
      Pair it with a warm latte, a fall-scented candle, and some crunchy leaves
      underfoot and you&rsquo;ve got the ultimate autumn vibe. 🍁
    </p>
  </PostBody>
);

export default Body;
