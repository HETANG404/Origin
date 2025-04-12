"use client";

import { useEffect, useRef } from "react";
import VerticalCard from "../base_ui/vertical_card";

export default function VerticalCategories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="relative mt-6 mb-6 pb-8 pt-36 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-row flex-wrap mb-18 justify-center">
        <h2 className="text-5xl">Life is a journey</h2>
      </div>
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl overflow-x-auto scrollbar-none "
      >

          <div
            id="card-container"
            className="flex flex-nowrap gap-10 min-w-max px-4 sm:px-10 pb-6 pt-6"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <VerticalCard
                key={i}
                title={`Project ${i + 1}`}
                subtitle="Next.js + Tailwind"
                backgroundImage="/images/Default_logo.png"
                href={`/project/${i + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}