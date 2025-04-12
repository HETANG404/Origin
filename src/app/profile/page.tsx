import { notFound } from "next/navigation";
import styles from "@/styles/profilemarkdown.module.css";
import { getMarkdownContent } from "@/lib/getMarkdown";
import LinkText from "@/components/base_ui/link_text";

export const metadata = {
  title: "Tang",
  description: "Page description",
};

export default async function Home() {
  const htmlContent = await getMarkdownContent("tang.md");

  if (!htmlContent) {
    return notFound();
  }

  return (
    <article className="prose prose-neutral mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-6xl font-bold mb-2">MA MINGYANG</h1>
      <h2 className="text-4xl font-bold mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— Jastin Tang Alin
      </h2>

      <div className="flex flex-col mt-20 mb-10 mx-auto">
        <LinkText href="https://github.com/HETANG404" className="bg-transparent text-2xl text-left">Github: &nbsp; https://github.com/HETANG404</LinkText>
        <LinkText href="https://www.linkedin.com/in/mingyang-ma-039a3731b" className="bg-transparent text-2xl text-left">LinkIn: &nbsp;&nbsp; https://www.linkedin.com/in/mingyang-ma-039a3731b</LinkText>
      </div>

      <div className={`prose ${styles.markdownProse}`}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <div className="mb-36"/>
    </article>
  );
}
