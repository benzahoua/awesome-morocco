import { type NextPage } from "next";
import Head from "next/head";
import { DashboardLayout, NavBar } from "~/components";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <DashboardLayout activePage="Blogs">
        <div> blogs</div>
      </DashboardLayout>
    </>
  );
};

export default Index;
