import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      I&rsquo;m all about self-improvement and learning new ways to grow. For
      me, it&rsquo;s not just about routines or habits; it&rsquo;s also about
      gaining knowledge and seeing life from different perspectives. I think
      it&rsquo;s so inspiring to learn how other people approach challenges and
      growth, and these books gave me fresh ways of thinking that stuck with me.
    </p>

    <p>Here are three self-help books that really left an impact on me:</p>

    <h2>1. Atomic Habits by James Clear</h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-self-help-books-to-read/atomic%20habits.webp"
      alt="Atomic Habits by James Clear"
      width={300}
      height={450}
      className="block mx-auto my-6"
    />
    <p>
      This book completely changed how I view habits. It&rsquo;s all about the
      power of small, consistent changes. My favorite takeaway is the idea of
      striving to improve by 1% every day. It doesn&rsquo;t sound like much at
      the moment, but over time it adds up to big results.
    </p>

    <h2>2. The Subtle Art of Not Giving a F*ck by Mark Manson</h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-self-help-books-to-read/subtle%20art.webp"
      alt="The Subtle Art of Not Giving a F*ck by Mark Manson"
      width={300}
      height={450}
      className="block mx-auto my-6"
    />
    <p>
      Funny, blunt, and eye-opening. This book helped me stop wasting energy on
      things that don&rsquo;t matter and instead focus on what truly does.
      It&rsquo;s a refreshing reminder that you don&rsquo;t have to care about
      everything and, in fact, you shouldn&rsquo;t.
    </p>

    <h2>3. Don&rsquo;t Believe Everything You Think by Joseph Nguyen</h2>
    <Image
      src="https://fdi5r9jawg3nkxd5.public.blob.vercel-storage.com/best-self-help-books-to-read/Screenshot%202025-09-03%20at%204.13.10%E2%80%AFPM.webp"
      alt="Stack of self-help books including Atomic Habits and The Subtle Art of Not Giving a F*ck"
      width={350}
      height={500}
      className="block mx-auto"
    />
    <p>
      This one taught me how powerful our thoughts are and how often we let
      negative ones run the show. Learning to step back, observe my thoughts,
      and not believe everything my mind tells me has been a game-changer for my
      mental clarity and peace.
    </p>

    <p>
      These books reminded me that self-improvement doesn&rsquo;t have to be
      overwhelming. It&rsquo;s about shifting your mindset, making intentional
      choices, and being open to new ways of looking at life.
    </p>

    <h2>Shop My Recommended Self-Help Books</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <a
          href="https://amzn.to/3I4cvcS"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored underline"
        >
          Atomic Habits by James Clear
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/4nbSuQr"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored underline"
        >
          The Subtle Art of Not Giving a F*ck by Mark Manson
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/4g6d5nc"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored underline"
        >
          Don&rsquo;t Believe Everything You Think by Joseph Nguyen
        </a>
      </li>
    </ul>
  </PostBody>
);

export default Body;
