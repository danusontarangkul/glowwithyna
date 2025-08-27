import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/citizenship-outfit-idea/IMG_3727.webp"
      alt="Citizenship ceremony outfit"
      width={350}
      height={500}
      className="block mx-auto"
    />
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/citizenship-outfit-idea/IMG_0306.webp"
      alt="Outfit close up"
      width={350}
      height={500}
      className="block mx-auto mt-8"
    />

    <p>
      This outfit isn&rsquo;t just about style. It&rsquo;s about celebrating a
      huge milestone in my life. After six years of waiting, from the anxiety of
      getting my green card to finally earning my citizenship, this day meant
      everything to me.
    </p>
    <p>
      Honestly, I was a little emotional on my naturalization day. Sitting
      there, raising my hand, and saying those words felt surreal. It&rsquo;s
      not always easy being an immigrant, and with everything going on in
      America, especially around ICE and immigration issues, the journey
      hasn&rsquo;t been simple. But standing there, I felt a sense of pride.
      America may not be perfect, but what I love most is the solidarity,
      resilience, and strength of its people. I&rsquo;m so grateful to now call
      myself an American citizen.
    </p>
    <p>
      Now, onto my look, because, of course, I wanted to feel polished,
      confident, and comfortable on such an important day.
    </p>

    <h2>Chic Square Pants</h2>
    <p>
      <strong>
        👉{" "}
        <a
          href="https://onelink.shein.com/15/4y6hetla91yn"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Shop the Pants Here
        </a>
      </strong>
    </p>
    <p>
      These square-cut pants gave me that effortless, tailored vibe without
      being stiff. They&rsquo;re comfortable enough to sit in for the whole
      ceremony but still feel elevated and classy.
    </p>

    <h2>Elegant White Top</h2>
    <p>
      <strong>
        👉{" "}
        <a
          href="https://onelink.shein.com/15/4y6hfx1wiur8"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Shop the Top Here
        </a>
      </strong>
    </p>
    <p>
      I paired the pants with a simple white top because it&rsquo;s timeless,
      clean, and radiant &mdash; the perfect piece for photos that I&rsquo;ll
      cherish forever.
    </p>

    <h2>Why I Loved This Look</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>Breathable and comfortable for such an emotional day</li>
      <li>
        Elegant but not overdone &mdash; I wanted to look put together, not
        flashy
      </li>
      <li>
        Neutral tones that highlight the meaning of the moment rather than just
        the outfit
      </li>
      <li>
        I kept my accessories simple &mdash; minimal jewelry and a comfy pair of
        shoes so I could focus on what mattered most: the moment itself
      </li>
    </ul>

    <h2>Shop My Citizenship Ceremony Outfit</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <a
          href="https://onelink.shein.com/15/4y6hetla91yn"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Chic Square Pants
        </a>
      </li>
      <li>
        <a
          href="https://onelink.shein.com/15/4y6hfx1wiur8"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          Elegant White Top
        </a>
      </li>
    </ul>

    <p>
      Becoming a U.S. citizen was one of the hardest but most rewarding journeys
      I&rsquo;ve ever been on. It took patience, tears, and resilience, but I
      wouldn&rsquo;t change a thing. To anyone still waiting for their day: hang
      in there. It&rsquo;s worth it.
    </p>
  </PostBody>
);

export default Body;
