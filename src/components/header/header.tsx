import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStyles$(styles);

  const { pathname } = useLocation();

  return (
    <header>
      <a class="logo" href="/">
        <img src="/assets/str4io.png" />
      </a>
      <nav>
        {/* <a href="/docs" class={{ active: pathname.startsWith("/docs") }}>
          Latest
        </a> */}
        <a
          href="/about-me"
          class={{ active: pathname.startsWith("/about-me") }}
        >
          About Me
        </a>
      </nav>
    </header>
  );
});
