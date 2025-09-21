import { PostBodyComponent } from "../post-body-types";
import PostBody from "../PostBody";

const Body: PostBodyComponent = () => (
  <PostBody>
    <p>
      Matcha isn&rsquo;t just a trendy drink&mdash;it&rsquo;s a powerful
      superfood that can boost energy, focus, and overall wellness. Below,
      you&rsquo;ll find why matcha is worth sipping and my simple cold whisk
      method for a smooth, clump-free iced latte.
    </p>

    <h2>Why Matcha Is Worth Sipping</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <strong>Sustained energy</strong>: Delivers a calm, focused boost
        without the coffee crash thanks to L-theanine.
      </li>
      <li>
        <strong>Antioxidant-rich</strong>: Packed with catechins that support
        your immune system.
      </li>
      <li>
        <strong>Glowing skin</strong>: Helps reduce inflammation and supports a
        clearer complexion.
      </li>
      <li>
        <strong>Metabolism support</strong>: Can gently help your body burn
        calories more efficiently.
      </li>
    </ul>

    <h2>How I Cold Whisk My Matcha Latte</h2>
    <p>
      Instead of just stirring matcha into milk (which usually leaves clumps),
      this quick method yields a smooth, frothy iced latte.
    </p>
    <ol className="[&>li]:my-2 list-decimal pl-6">
      <li>Add matcha powder to your bowl or whisking cup.</li>
      <li>
        Pour in <strong>half</strong> the amount of cold milk (almond, oat, soy,
        or regular all work).
      </li>
      <li>
        Whisk quickly in a zig-zag motion until it&rsquo;s frothy and smooth.
      </li>
      <li>
        Add the remaining milk and whisk again for that creamy, caf&eacute;
        -style finish.
      </li>
      <li>Pour over ice and enjoy.</li>
    </ol>

    <h2>Tips for the Smoothest Sip</h2>
    <ul className="[&>li]:my-2 list-disc pl-6">
      <li>
        <strong>Sift your matcha</strong> first if it tends to clump.
      </li>
      <li>
        <strong>Use good water or milk</strong>: Filtered water or fresh milk
        makes a noticeable difference.
      </li>
      <li>
        <strong>Mind the ratio</strong>: Start with 1&ndash;1.5 tsp matcha per
        8&ndash;10 oz liquid and adjust to taste.
      </li>
      <li>
        <strong>Sweeten smartly</strong>: If you like it sweet, dissolve honey
        or syrup in a splash of warm water first, then add.
      </li>
    </ul>

    <p>
      This cold whisk method keeps your drink smooth, clump-free, and extra
      frothy&mdash;perfect for summer or whenever you need a refreshing
      pick-me-up.
    </p>
  </PostBody>
);

export default Body;
