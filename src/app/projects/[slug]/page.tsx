import { notFound } from "next/navigation";
import path from "path";
import { readFile } from "fs/promises";
import { marked } from "marked";
import { projects } from "@/data/projects";
import RedButton from "@/components/base_ui/red_button";
import styles from "@/styles/projectmarkdown.module.css";


// 静态生成所有 slug 页面（用于 SSG，防止构建出错）
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: paramsType }) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  if (!project) return {};

  return {
    title: "Origin-" + project.title,
    description: project.subtitle || "Project description",
  };
}

export type paramsType = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: paramsType }) {

  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  let htmlContent = "";
  try {
    const markdownPath = path.join(process.cwd(), "public", project.markdownPath);
    const markdownText = await readFile(markdownPath, "utf-8");
    htmlContent = await marked.parse(markdownText);
  } catch (err) {
    console.error("读取 markdown 出错:", err);
    return notFound();
  }

  return (
    <article className="prose prose-neutral mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-6xl font-bold mb-2">{project.title}</h1>
      {project.subtitle && <p className="text-gray-500 text-3xl mb-6 mt-6">{project.subtitle}</p>}


      <div className={`prose ${styles.markdownProse}`}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>



      <div className="flex justify-center gap-4 mt-18 mb-18">
        <RedButton href={project.repo} className="bg-transparent">Github repo</RedButton>
        <RedButton href={project.liveDemo} className="bg-transparent">{project.title}</RedButton>
      </div>

    </article>
  );
}
