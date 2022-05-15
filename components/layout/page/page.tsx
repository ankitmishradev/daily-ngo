import Head from "next/head";
import { NextPage } from "next";
import { MainHeader } from "../";
import { PageProps } from "./types";

export const Page: NextPage<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <MainHeader />

      <main>{props.children}</main>
    </>
  );
};
