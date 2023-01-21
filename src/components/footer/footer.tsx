import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <div>
        <a href="https://qwik.builder.io/" target="_blank" class="builder">
          Made with Qwik
        </a>
      </div>
      <ul>
        <li>
          <a href="/about-me">About me</a>
        </li>
        <li>
          <a href="https://cv.str4.io">CV</a>
        </li>
      </ul>
      <div style="background: white; padding: 5px; height: 170px; width: 170px; margin: auto; margin-top: 20px">
        <sl-qr-code
          size="160"
          fill="hsl(240 5.1% 15%)"
          radius="0.5"
          background="hsl(240 7.3% 84%)"
          value="https://str4.io/"
          label="Scan this code to visit Shoelace on the web!"
        ></sl-qr-code>
      </div>
      <div>str4.io</div>
    </footer>
  );
});
