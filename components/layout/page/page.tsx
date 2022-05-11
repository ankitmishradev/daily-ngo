import Head from "next/head";
import { NextPage } from "next";
import { TopBar } from "../topbar/topbar";
import { PageProps } from "./types";

export const Page: NextPage<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <TopBar />

      <main>{props.children}</main>
    </>
  );
};
