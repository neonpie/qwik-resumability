import { $, component$, useStore } from "@builder.io/qwik";

interface CounterProps {
  number: number;
}

export default component$((props: CounterProps) => {
  const count = useStore({ number: props.number });

  const eventHandler = $(() => (count.number += 1));

  return <button onClick$={eventHandler}>{count.number}</button>;
});
