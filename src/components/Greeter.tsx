import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <button onClick$={() => alert("Hello World")}> Greet </button>
));
