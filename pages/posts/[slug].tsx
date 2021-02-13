import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "../../components/MDXcomponents";
import { PostLayout } from "../../components/PostLayout";
import { getFileBySlug } from "../../utils/getFileBySlug";
import { getFiles } from "../../utils/getFiles";

const Post = ({ source, frontMatter }) => {
  const content = hydrate(source, { components: MDXComponents });
  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>;
};

export const getStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getFileBySlug(slug);

  return {
    props,
  };
};

export default Post;
