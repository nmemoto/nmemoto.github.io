import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import getPosts from "../utils/getPosts";

type Props = {
  posts: {
    title: string;
    summary: string;
    created: string;
    slug: string;
  }[];
};

const Index: NextPage<Props> = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return (
    <>
      <Head>
        <title>{`nmemoto.github.io`}</title>
      </Head>
      <div className="p-4 max-w-full shadow">
        <Link href="/">
          <a className="text-2xl font-semibold text-gray-800">
            nmemoto.github.io
          </a>
        </Link>
      </div>
      <main className="mt-1.5 max-w-7xl sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto">
          <ul className="divide-y divide-gray-200 mx-auto ">
            {sortedPosts.map((post) => {
              return (
                <li
                  key={post.slug}
                  className="flex bg-white hover:bg-gray-100 px-4 py-4 sm:px-6"
                >
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <h2 className="text-xl leading-6 font-bold text-gray-800">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {post.created}
                      </p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: { posts },
  };
};

export default Index;
