import { component$, Slot } from "@builder.io/qwik";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <>
      <Slot />
      <Menu />
    </>
  );
});
