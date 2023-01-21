import { component$, Slot } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <Slot />
      <Menu />
    </>
  );
});
