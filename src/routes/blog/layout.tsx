import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import Menu from "~/components/menu/menu";

export default component$(() => {
  const location = useLocation();

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <Slot />
      {location.pathname !== "/blog" && (
        <>
          <sl-divider style="--spacing: 2rem;"></sl-divider>
          <div class="giscus">
            {/* Using this element for giscus to embed into, otherwise
                it is impossible to hide it (remove from DOM) after navigation */}
          </div>
          <script
            src="https://giscus.app/client.js"
            data-repo="strowk/blog"
            data-repo-id="R_kgDOIYRBFg"
            data-category="Announcements"
            data-category-id="DIC_kwDOIYRBFs4CTu23"
            data-mapping="pathname"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="dark_dimmed"
            data-lang="en"
            crossOrigin="anonymous"
            async
          ></script>
          <sl-divider style="--spacing: 2rem;"></sl-divider>
        </>
      )}
      <Menu />
    </>
  );
});
