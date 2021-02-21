import { NextPage } from "next";
import Link from "next/link";
import { AllLayout } from "../components/AllLayout";
import getPosts from "../utils/getPosts";

type Props = {
  posts: {
    title: string;
    description: string;
    created: string;
    slug: string;
  }[];
};

const Index: NextPage<Props> = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return (
    <AllLayout>
      <div className="mx-auto">
        <ul className="divide-y divide-gray-300 mx-auto ">
          {sortedPosts.map((post) => {
            return (
              <li
                key={post.slug}
                className="flex hover:bg-gray-300 px-4 py-4 sm:px-6"
              >
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <h2 className="text-xl leading-6 font-bold text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{post.created}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </AllLayout>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: { posts },
  };
};

export default Index;
