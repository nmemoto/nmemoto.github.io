import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

type Props = {
  frontMatter?: {
    title: string;
    description: string;
    created: string;
    updated?: string;
  };
};

export const AllLayout: FC<Props> = ({ children, frontMatter }) => {
  const title = frontMatter
    ? `${frontMatter.title} | nmemoto.github.io`
    : "nmemoto.github.io";
  const description = frontMatter
    ? `${frontMatter.description}`
    : "nmemoto's notes, blog, tips";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="bg-gray-100 h-screen">
        <div className="p-4 max-w-full shadow-md z-20">
          <Link href="/">
            <a className="text-2xl font-semibold text-gray-800">
              nmemoto.github.io
            </a>
          </Link>
        </div>
        <main className="text-base text-gray-800 max-w-7xl py-2 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};
