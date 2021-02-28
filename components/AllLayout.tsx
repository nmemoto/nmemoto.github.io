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
      <div className="bg-gray-100 h-full min-h-screen">
        <div className="p-4 max-w-full shadow-md z-20">
          <Link href="/">
            <a className="text-2xl font-semibold text-gray-800">
              nmemoto.github.io
            </a>
          </Link>
        </div>
        <main className="text-base text-gray-800 max-w-7xl py-2 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="flex-grow">{children}</div>
            <div className="mt-4 md:mt-0">
              <Profile />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
