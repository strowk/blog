import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import OnThisPage from "~/components/on-this-page/on-this-page";
import styles from "./docs.css";

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="docs">
      {/* <Menu /> */}
      <article>
        <Slot />
      </article>

      <OnThisPage />
      <br />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
