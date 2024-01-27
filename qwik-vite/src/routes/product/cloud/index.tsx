import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { QGridDatacenterList } from "./QGridDatacenterList";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch("http://localhost:3000/datacenter");
  const product = await res.json();
  return product as string[];
});

export default component$(() => {
  const signal = useProductDetails();
  return <QGridDatacenterList data={signal?.value} />;
});
