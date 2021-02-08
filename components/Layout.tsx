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
  const { title, summary, created, updated } = frontMatter;
  const createdStr = `created: ${created}`;
  const updatedStr = `updated: ${updated}`;
  const dateStr = updated ? `${createdStr} / ${updatedStr}` : `${createdStr}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <h1 id={title}>{title}</h1>
        <p>{dateStr}</p>
        <p>{summary}</p>
        {children}
      </main>
    </>
  );
};
