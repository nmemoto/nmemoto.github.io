import Head from "next/head";
import { FC } from "react";

type Props = {
  meta: {
    title: string;
  };
};

export const Layout: FC<Props> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
