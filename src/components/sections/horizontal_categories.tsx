"use client";

import { useEffect, useRef } from "react";
import HorizontalCard from "../base_ui/horizontal_card";
import { projects } from "@/data/projects";

export default function HorizontalCategories() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enableScroll = (container: HTMLDivElement | null) => {
      if (!container) return;
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      };
      container.addEventListener("wheel", onWheel, { passive: false });
      return () => container.removeEventListener("wheel", onWheel);
    };

    const cleanup1 = enableScroll(containerRef1.current);
    const cleanup2 = enableScroll(containerRef2.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  // ✅ 筛选不同类型的项目
  const trivelProjects = projects.filter((p) => p.type === "Trivel");
  const ssProjects = projects.filter((p) => p.type === "SS");

  return (
    <section className="relative mt-6 mb-6 pb-6 pt-36">
      {/* 第一组：Trivel */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <h2 className="text-4xl font-bold">Trivel</h2>
        </div>
        <div
          ref={containerRef1}
          className="mx-auto max-w-7xl px-4 sm:px-6 overflow-x-auto scrollbar-hide"
        >
          <div className="flex flex-nowrap gap-10 min-w-max pb-4">
            {trivelProjects.map((project, i) => (
              <HorizontalCard
                key={i}
                title={project.title}
                subtitle={project.subtitle}
                backgroundImage={project.cover || project.cover}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 第二组：SS */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <h2 className="text-4xl font-bold">SS</h2>
        </div>
        <div
          ref={containerRef2}
          className="mx-auto max-w-7xl px-4 sm:px-6 overflow-x-auto scrollbar-hide"
        >
          <div className="flex flex-nowrap gap-10 min-w-max pb-4">
            {ssProjects.map((project, i) => (
              <HorizontalCard
                key={i}
                title={project.title}
                subtitle={project.subtitle}
                backgroundImage={project.cover || project.cover}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
