import { component$ } from "@builder.io/qwik";
import Counter from "~/components/Counter";
import Greeter from "~/components/Greeter";

export default component$(() => {
  return (
    <div>
      <Greeter />
      <Greeter />
      <Counter number={10} />
    </div>
  );
});
