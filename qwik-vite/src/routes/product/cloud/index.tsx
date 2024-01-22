import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const datacenter_list = useSignal(["us", "eu", "asia"]);
  return (
    <div>
      {datacenter_list?.value?.map((datacenter: any, index: number) => {
        return (
          <div key={index}>
            <h3>{datacenter}</h3>
            <div>datacenter: {datacenter}</div>
          </div>
        );
      })}
    </div>
  );
});
