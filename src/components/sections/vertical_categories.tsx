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
    <section className="relative mt-6 mb-6 pb-6 pt-36">
      <div 
        ref={containerRef}
        className="mx-auto max-w-7xl overflow-x-auto scrollbar-none"
      >
        <div 
          id="card-container"
          className="flex flex-nowrap gap-10 min-w-max px-4 sm:px-6 pb-4"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <VerticalCard
              key={i}
              title={`Project ${i + 1}`}
              subtitle="Next.js + Tailwind"
              backgroundImage="/images/bg-card-01.jpg"
              href={`/project/${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}