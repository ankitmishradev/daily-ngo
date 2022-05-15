import type { NextPage } from "next";
import Head from "next/head";
import { Page, Space } from "../components";
import { Qis } from "../uni_comp/home";

const Home: NextPage = () => {
  return (
    <Page title="Daily NGO">
      <Space factor="8" />
      <Qis />
    </Page>
  );
};

export default Home;
