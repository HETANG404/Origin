"use client";

import { projects } from "@/data/projects";
import HorizontalCard from "../base_ui/horizontal_card";

export default function HorizontalCategories() {
  // 筛选不同类型的项目
  const trivelProjects = projects.filter((p) => p.type === "Tri");
  const workExperienceProjects = projects.filter((p) => p.type === "WE");
  const selfStudyProjects = projects.filter((p) => p.type === "SS");
  const machineLearningProjects = projects.filter((p) => p.type === "ML");
  const universityProjectsProjects = projects.filter((p) => p.type === "UP");
  const ripProjects = projects.filter((p) => p.type === "RPi");


  return (
    <section className="relative mt-6 mb-6 pb-6 pt-36">
      {/* 第一组：Trivel */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">Trivel</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
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
      {/* 第二组：WE */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">Work Experience</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
            {workExperienceProjects.map((project, i) => (
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
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">Self-study</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
            {selfStudyProjects.map((project, i) => (
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
      {/* 第四组：ML */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">Machine Learning</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
            {machineLearningProjects.map((project, i) => (
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
      {/* 第五组：University Projects */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">University Projects</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
            {universityProjectsProjects.map((project, i) => (
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
      {/* 第五组：RPi */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <h2 className="text-5xl font-bold">RPi</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4">
            {ripProjects.map((project, i) => (
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
