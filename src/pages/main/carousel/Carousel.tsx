import { useState } from "react";

export default function Carousel() {
  const [curIdx, setCurIdx] = useState(0);

  return (
    <section className={"flex w-full h-full overflow-x-auto"}>
      <article className={"flex-none w-full h-full"}>{"carousel 1"}</article>
      <article className={"flex-none w-full h-full"}>{"carousel 2"}</article>
      <article className={"flex-none w-full h-full"}>{"carousel 3"}</article>
    </section>
  );
}
