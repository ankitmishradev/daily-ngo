import type { NextPage } from "next";
import Head from "next/head";
import { Page, PageHeading, Space } from "../components";
import { Qis } from "../uni_comp/home";

const Home: NextPage = () => {
  return (
    <Page title="Daily NGO">
      <Qis />
      <PageHeading text="Our Campaigns" alignment="center" />
    </Page>
  );
};

export default Home;
