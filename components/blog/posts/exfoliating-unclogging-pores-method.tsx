import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      Last night, I tried the Ilso Sebum Softener for the first time, and I was
      honestly shocked at how well it worked. I&rsquo;ve struggled with clogged
      pores on my nose for years, and this was the first time I literally saw
      the sebum lift up! Using the scraper tool afterward made it so much easier
      to remove everything without painful squeezing or redness.
    </p>
    <p>
      To complete my little pore-care session, I followed up with the Green
      Tomato Clay Cleanser to deeply cleanse and then treated myself to the
      Lindsay Cooling Modeling Mask. My skin felt cleaner, smoother, and so
      refreshed, almost like I had a mini facial at home.
    </p>

    <h2>Why I Loved This Routine</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        Ilso Sebum Softener: Loosened the buildup so it could be removed gently.
      </li>
      <li>Scraper Tool: Oddly satisfying and effective.</li>
      <li>Green Tomato Clay Cleanser + Cooling Mask: Amplified the results.</li>
      <li>
        This method made exfoliating and unclogging my pores way easier than
        anything else I&rsquo;ve tried.
      </li>
      <li>
        I&rsquo;m planning to use it a couple of times a week to keep my skin
        clearer in the long run.
      </li>
    </ul>

    <h2>Step-by-Step Routine I Followed</h2>
    <h3>Ilso Sebum Softener</h3>
    <p>
      Wet cotton pads and place on trouble areas for 10&ndash;15 minutes. Use
      the scraper tool to gently remove lifted sebum.
    </p>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/exfoliating-and-unclogging-pores-method-that-actually-worked-for-me/Ilso.webp"
      alt="Ilso Sebum Softener"
      width={350}
      height={500}
      className="block mx-auto"
    />

    <h3>Green Tomato Clay Cleanser</h3>
    <p>Wash your face thoroughly to remove any remaining impurities.</p>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/exfoliating-and-unclogging-pores-method-that-actually-worked-for-me/fully%20green%20tomato.webp"
      alt="Green Tomato Clay Cleanser"
      width={350}
      height={500}
      className="block mx-auto mt-8"
    />

    <h3>Lindsay Cooling Modeling Mask</h3>
    <p>
      Apply the mask as directed, then rinse off. Finish with your favorite
      moisturizer to keep skin hydrated.
    </p>

    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/exfoliating-and-unclogging-pores-method-that-actually-worked-for-me/modeling%20mask.webp"
      alt="Lindsay Cooling Modeling Mask"
      width={350}
      height={500}
      className="block mx-auto mt-8"
    />

    <h2>Here's What I Used</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <a
          href="https://amzn.to/4lYbXmF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ilso Sebum Softener
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/47UX80Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fully Green Tomato Clay Cleanser
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/47UYc4Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lindsay Cooling Modeling Mask
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/4g6D5yT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mixing Bowl
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/41wHCob"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blackhead Remover Tool
        </a>
      </li>
    </ul>

    <p>
      <strong>Tip:</strong> Use the Ilso Sebum Softener once a week or as needed
      whenever you feel like your skin needs some extra exfoliating.
    </p>
  </PostBody>
);

export default Body;
