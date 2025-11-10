import { useEffect, useRef } from "react";

export function Main() {
  const elementRef = useRef<HTMLDivElement>(null);

  const scroll = (e: WheelEvent) => {
    if (!elementRef.current) return;

    console.log(elementRef.current.scrollTop);

    const pageHeight = window.innerHeight;
    console.log(pageHeight, e.deltaY);
    // 아래로 스크롤
    if (e.deltaY > 0) {
      // 위로 스크롤
    } else {
    }
  };

  useEffect(() => {
    if (!elementRef.current) return;

    elementRef.current.addEventListener("wheel", scroll);

    return () => {
      if (!elementRef.current) return;

      elementRef.current.removeEventListener("wheel", scroll);
    };
  }, []);

  return (
    <section className={"w-screen h-screen overflow-y-auto"} ref={elementRef}>
      <article className={"w-full h-full bg-red-50"}>{"안녕하세요"}</article>
      <article className={"w-full h-full bg-red-100"}>{"이것은"}</article>
      <article className={"w-full h-full bg-red-150"}>{"원스크린"}</article>
      <article className={"w-full h-full bg-red-200"}>{"페이지입니다"}</article>
    </section>
  );
}
