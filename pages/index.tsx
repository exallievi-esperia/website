import Hero from "@/components/Hero";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Ex Allievi Esperia - Home</title>
      </Head>
      <Hero />
    </Layout>
  );
};

export default HomePage;
