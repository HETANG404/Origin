import { notFound } from "next/navigation";
import Image from "next/image";
import path from "path";
import { readFile } from "fs/promises";
import { marked } from "marked";
import { projects } from "@/data/projects";
import RedButton from "@/components/base_ui/red_button";



// 静态生成所有 slug 页面（用于 SSG，防止构建出错）
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export type paramsType = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: paramsType }) {

  const markdownProseStyles = `
  prose mx-auto
  [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-white [&_h1]:mb-6
  [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-4
  [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-white [&_p]:mb-4
  [&_ul]:list-disc [&_ul]:ml-6 [&_ul>li]:mb-2
  [&_img]:rounded-lg [&_img]:mx-auto [&_img]:shadow-lg [&_img]:my-6
  [&_em]:block [&_em]:text-center [&_em]:text-gray-400 [&_em]:text-sm
  [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500
  [&_hr]:my-8 [&_hr]:border-t [&_hr]:border-gray-300
`;

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

      {project.cover && (
        <Image
          src={project.cover}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-lg mb-8 shadow mx-auto mt-6"
        />
      )}

      <div className={markdownProseStyles}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>



      <div className="flex justify-center gap-4 mt-18 mb-18">
        <RedButton href={project.repo} className="bg-transparent">Github repo</RedButton>
        <RedButton href={project.liveDemo} className="bg-transparent">{project.title}</RedButton>
      </div>

    </article>
  );
}
