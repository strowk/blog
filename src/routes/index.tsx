import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hey!</h1>
      This is my first attempt to make personal technical blog
      <ul>
        <li>Personal?</li>
        <ul>
          <li>
            Means it is made by person and all my posts are in a simple direct
            language
          </li>
        </ul>
        <li>Technical?</li>
        <ul>
          <li>
            Well I like technology, implementing stuff and gonna write about
            that.
          </li>
        </ul>
      </ul>
      <a href="/blog">Blog</a>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
