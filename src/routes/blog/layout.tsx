import { component$, Slot } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <Slot />
      <sl-divider style="--spacing: 2rem;"></sl-divider>
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
      <Menu />
    </>
  );
});
