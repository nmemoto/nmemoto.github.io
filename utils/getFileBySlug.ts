import fs from "fs";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import MDXComponents from "../components/MDXcomponents";

const root = process.cwd();

export const getFileBySlug = async (slug) => {
  const source = fs.readFileSync(
    path.join(root, "contents", `${slug}.mdx`),
    "utf8"
  );

  const mdxSource = await renderToString(source, {
    components: MDXComponents,
  });

  return {
    source: mdxSource,
    meta: { title: "Markdown/MDX with Next.js" },
  };
};
