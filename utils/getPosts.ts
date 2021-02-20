import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPosts = () => {
  const pathToBlogPost = "./contents";
  const fileNames = fs.readdirSync(pathToBlogPost).map((fileName) => fileName);
  const posts = fileNames.map((fileName) => {
    const file = fs.readFileSync(path.join(pathToBlogPost, fileName), "utf-8");
    const slug = fileName.replace(".mdx", "");
    const { data } = matter(file);

    const frontMatter = {
      ...data,
      slug,
      created: format(
        utcToZonedTime(parseISO(data.created), "Asia/Tokyo"),
        "yyyy/MM/dd"
      ),
    };
    return frontMatter;
  });
  return posts;
};

export default getPosts;
