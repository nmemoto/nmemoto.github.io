import { format } from "date-fns-tz";
import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import MDXComponents from "../components/MDXcomponents";

const root = process.cwd();

export const getFileBySlug = async (slug) => {
  const source = fs.readFileSync(
    path.join(root, "contents", `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
      ],
    },
  });
  const frontMatter = {
    ...data,
    created: format(data.created, "yyyy-MM-dd", {
      timeZone: "Asia/Tokyo",
    }),
    updated: data.updated
      ? format(data.updated, "yyyy-MM-dd", {
          timeZone: "Asia/Tokyo",
        })
      : "",
  };
  console.log(data);
  return {
    source: mdxSource,
    frontMatter,
  };
};
