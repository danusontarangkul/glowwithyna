import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      Fall is officially here — and I&rsquo;ve been in full cozy mode lately.
      There&rsquo;s just something about crisp weather, soft lighting, and warm
      scents that instantly make a space feel comforting. I decided to refresh
      my room with a few simple fall finds — small changes that completely
      transform the vibe without much effort.
    </p>

    <h2>Cozy Fall Home Finds</h2>
    <ul className="[&>li]:my-3 list-disc pl-6">
      <li>
        <strong>Throw Pillows:</strong> I swapped in soft, textured pillows that
        feel extra plush and seasonal. They add instant warmth and make my couch
        and bed look so inviting.
        <br />→{" "}
        <a
          href="https://amzn.to/48PnQbJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Throw Pillows
        </a>
      </li>
      <li>
        <strong>Candle Warmer Lamp:</strong> Maybe my favorite find. Instead of
        lighting the wick, this warmer gently melts the candle so the scent
        lasts longer, and the glow is super cozy.
        <br />→{" "}
        <a
          href="https://amzn.to/4mU5Mkk"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Candle Warmer Lamp
        </a>
      </li>
      <li>
        <strong>Scented Candles:</strong> A fall night isn&rsquo;t complete
        without a comforting scent — vanilla, pumpkin spice, warm amber — they
        instantly make the space feel peaceful.
        <br />→{" "}
        <a
          href="https://amzn.to/3IZBaQo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Scented Candles
        </a>
      </li>
      <li>
        <strong>Pumpkin Décor:</strong> A few neutral pumpkins make the room
        feel festive but still minimal and chic.
        <br />→{" "}
        <a
          href="https://amzn.to/48pZc1r"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Pumpkin Décor
        </a>
      </li>
      <li>
        <strong>Pumpkin Plush:</strong> Pure comfort — cute, soft, and adds a
        playful touch to the fall setup. Mine lives on the couch.
        <br />→{" "}
        <a
          href="https://amzn.to/4mWnUKq"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Pumpkin Plush
        </a>
      </li>
    </ul>

    <h2>Why I Love These Picks</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>Cozy, minimal upgrades that mix easily with what you already own.</li>
      <li>They create warmth and calm without a full redecoration.</li>
      <li>
        Most of these can be reused year after year — just add small seasonal
        touches.
      </li>
    </ul>

    <p className="mt-6">
      If you&rsquo;re craving a fall refresh, these simple additions make your
      home feel instantly more peaceful and inviting.
    </p>
  </PostBody>
);

export default Body;
