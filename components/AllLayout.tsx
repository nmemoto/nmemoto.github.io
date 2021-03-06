import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { GA_TRACKING_ID } from "../utils/gtag";
import { Profile } from "./Profile";

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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="p-4 max-w-full shadow-md z-20">
          <Link href="/">
            <a className="text-2xl font-semibold text-gray-800">
              nmemoto.github.io
            </a>
          </Link>
        </div>
        <main className="flex-grow text-base text-gray-800 min-w-full py-2 sm:px-6 lg:px-8 flex flex-col">
          <div className="flex-grow md:flex-row md:space-x-2 flex flex-col">
            <div className="flex-grow">{children}</div>
            <div className="mt-4 md:mt-0">
              <Profile />
            </div>
          </div>
        </main>
        <footer className="p-4 w-full text-center text-gray-500">
          <div className="py-2">
            <small>&copy; 2021, nmemoto All rights reserved.</small>
            <p className="text-xs mt-2">This website uses Google Analytics.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
