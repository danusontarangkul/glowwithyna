import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";
import Image from "next/image";

const Body: PostBodyComponent = () => (
  <PostBody>
    <h1>Cold Weather Moisturizers That Saved My Skin</h1>

    <p>
      Every fall and winter, my combination skin goes through that dehydrated
      phase — tight around the cheeks, oily in the T-zone, and makeup that just
      won’t sit right. After trying a bunch over the past couple of years, these
      are the moisturizers that actually keep my skin balanced, soft, and
      smooth, so makeup glides on without clinging to dry patches.
    </p>

    <h2>My Cold-Weather Picks</h2>
    <ol className="[&>li]:my-4 list-decimal pl-6">
      <li>
        <strong>
          <a
            href="https://amzn.to/48gS9Ig"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Purito Oat-in Calming Gel Cream
          </a>
        </strong>{" "}
        — Lightweight but super hydrating. Perfect for mornings under makeup:
        sinks in fast, feels calm and non-greasy, and helps when skin is
        irritated or flaky.
      </li>

      <li>
        <strong>
          <a
            href="https://amzn.to/4o3fAJB"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Aestura Atobarrier 365 Cream
          </a>
        </strong>{" "}
        — My go-to night cream in colder months. Rich, nourishing, and locks in
        moisture overnight so skin feels plump and soothed by morning.
      </li>

      <li>
        <strong>
          <a
            href="https://amzn.to/431eohN"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Dr. Althea 345 Relief Cream
          </a>
        </strong>{" "}
        — Great when skin feels sensitive or tight after cleansing. Smooth,
        slightly creamy texture that’s instantly relieving for dehydrated,
        combo-prone skin.
      </li>

      <li>
        <strong>
          <a
            href="https://amzn.to/4mOFzna"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
          >
            Byoma Moisturizing Gel Cream
          </a>
        </strong>{" "}
        — Lightweight daily staple that still hydrates dry areas while keeping
        the T-zone balanced. Layers well under SPF and foundation.
      </li>
    </ol>

    <div className="my-6 rounded-md border border-black/10 bg-black/5 p-4 text-sm dark:border-white/10 dark:bg-white/5">
      <strong>Pro tip:</strong> Apply moisturizer while your face is still
      slightly damp from toner or essence. It helps lock in extra hydration and
      keeps skin dewy longer.
    </div>

    <h2>✨ Shop My Cold-Weather Moisturizer Picks</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <a
          href="https://amzn.to/48gS9Ig "
          target="_blank"
          rel="noopener noreferrer nofollow sponsored "
          className="underline"
        >
          Purito Oat-in Calming Gel Cream
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/4o3fAJB"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored "
          className="underline"
        >
          Aestura Atobarrier 365 Cream
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/431eohN"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored "
          className="underline"
        >
          Dr. Althea 345 Relief Cream
        </a>
      </li>
      <li>
        <a
          href="https://amzn.to/4mOFzna"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored "
          className="underline"
        >
          Byoma Moisturizing Gel Cream
        </a>
      </li>
    </ul>
  </PostBody>
);

export default Body;
