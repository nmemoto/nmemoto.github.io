import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { FC } from "react";

type Props = {
  frontMatter: {
    title: string;
    summary: string;
    created: string;
    updated?: string;
  };
};

export const PostLayout: FC<Props> = ({ children, frontMatter }) => {
  const { created, updated } = frontMatter;
  const createdJST = utcToZonedTime(parseISO(created), "Asia/Tokyo");
  const createdFmt = format(createdJST, "yyyy/MM/dd HH:mm");
  const createdStr = `created: ${createdFmt}`;
  let updatedStr;
  if (updated) {
    const updatedJST = updated
      ? utcToZonedTime(parseISO(updated), "Asia/Tokyo")
      : null;
    const updatedFmt = format(updatedJST, "yyyy-MM-dd HH:mm");
    updatedStr = `updated: ${updatedFmt}`;
  }
  const dateStr = updated ? `${createdStr} / ${updatedStr}` : `${createdStr}`;
  return (
    <>
      <main className="text-base text-gray-800">
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
