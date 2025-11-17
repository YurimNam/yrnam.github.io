import { useEffect, useRef } from "react";
import Carousel from "./carousel/Carousel.tsx";

export function Main() {
  const elementRef = useRef<HTMLDivElement>(null);

  const scroll = (e: WheelEvent) => {
    if (!elementRef.current) return;

    e.preventDefault();

    console.log(elementRef.current.scrollTop);

    const pageHeight = window.innerHeight;
    const scrollTop = elementRef.current.scrollTop;
    const isFirstPage = scrollTop < pageHeight;
    const isSecondPage = scrollTop >= pageHeight && scrollTop < pageHeight * 2;
    const isThirdPage =
      scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3;
    const isLastPage =
      scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4;

    let movePageHeight = 0;

    if (e.deltaY > 0) {
      if (isFirstPage) movePageHeight = pageHeight;

      if (isSecondPage) movePageHeight = pageHeight * 2;

      if (isThirdPage) movePageHeight = pageHeight * 3;
    } else {
      if (isSecondPage) movePageHeight = 0;

      if (isThirdPage) movePageHeight = pageHeight;

      if (isLastPage) movePageHeight = pageHeight * 2;
    }

    elementRef.current.scrollTo({
      top: movePageHeight,
      left: 0,
      behavior: "smooth"
    });
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
    <main className={"w-screen h-screen overflow-y-auto"} ref={elementRef}>
      <Carousel />
      <section className={"w-full h-full bg-red-100"}>{"이것은"}</section>
      <section className={"w-full h-full bg-red-150"}>{"원스크린"}</section>
      <section className={"w-full h-full bg-red-200"}>{"페이지입니다"}</section>
    </main>
  );
}
