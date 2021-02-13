import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import Head from "next/head";
import { FC } from "react";

type Props = {
  frontMatter: {
    title: string;
    summary: string;
    created: string;
    updated?: string;
  };
};

export const Layout: FC<Props> = ({ children, frontMatter }) => {
  const { title, created, updated } = frontMatter;
  const createdJST = utcToZonedTime(parseISO(created), "Asia/Tokyo");
  const updatedJST = utcToZonedTime(parseISO(updated), "Asia/Tokyo");
  const createdFmt = format(createdJST, "yyyy/MM/dd HH:mm");
  const updatedFmt = format(updatedJST, "yyyy-MM-dd HH:mm");
  const createdStr = `created: ${createdFmt}`;
  const updatedStr = `updated: ${updatedFmt}`;

  const dateStr = updated ? `${createdStr} / ${updatedStr}` : `${createdStr}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-base">
        <div className="min-h-screen bg-gray-100">
          {/* Post */}
          <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg m-2">
            <article>
              <div className="p-3">
                <p className="p-1">{dateStr}</p>
                {children}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};
