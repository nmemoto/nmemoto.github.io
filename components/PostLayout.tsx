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
  const { title, created, updated } = frontMatter;
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
      <div className="min-h-screen bg-gray-50">
        <div className="shadow px-2 py-2 sm:px-6 sm:rounded-lg">
          <article>
            <div className="p-1">
              <div className="py-2 mb-2">
                <h1 className="font-bold text-4xl py-2">{title}</h1>
                <p className="text-sm text-gray-600 py-1">{dateStr}</p>
              </div>
              {children}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
