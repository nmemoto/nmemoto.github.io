import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

export const getFiles = async () => {
  const allFileNames = fs.readdirSync(path.join(root, "contents"));
  const posts = allFileNames.filter((fileName) => {
    const file = fs.readFileSync(
      path.join(root, "contents", fileName),
      "utf-8"
    );
    const { data }: { data: { published?: boolean } } = matter(file);
    return data.published;
  });
  return posts;
};
