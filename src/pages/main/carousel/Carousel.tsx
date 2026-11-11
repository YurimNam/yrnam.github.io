import { useState } from "react";

const slides = ["carousel 1", "carousel 2", "carousel 3"];

export default function Carousel() {
  const [curIdx, setCurIdx] = useState(0);

  const handleSlideBtnClick = (idx: number) => {
    setCurIdx((idx + slides.length) % slides.length);
  };

  return (
    <section className={"relative w-full h-full overflow-hidden"}>
      <div
        className={"flex w-full h-full transition-transform duration-500 ease-in-out"}
        style={{ transform: `translateX(-${curIdx * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <article key={idx} className={"flex-none w-full h-full"}>
            {slide}
          </article>
        ))}
      </div>

      <button
        type={"button"}
        aria-label={"이전 슬라이드"}
        onClick={() => handleSlideBtnClick(curIdx - 1)}
        className={
          "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white"
        }
      >
        {"<"}
      </button>

      <button
        type={"button"}
        aria-label={"다음 슬라이드"}
        onClick={() => handleSlideBtnClick(curIdx + 1)}
        className={
          "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white"
        }
      >
        {">"}
      </button>

      <div className={"absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            type={"button"}
            aria-label={`${idx + 1}번 슬라이드로 이동`}
            onClick={() => handleSlideBtnClick(idx)}
            className={`h-2 w-2 rounded-full ${
              idx === curIdx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
