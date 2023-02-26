import Layout from "@/components/layout/Layout";
import Head from "next/head";
import React from "react";
import FileList from "@/components/FileList";
import HeaderSection from "@/components/HeaderSection";

const TrasparenzaPage = () => {
  return (
    <Layout>
      <Head>
        <title>Trasparenza - Ex Allievi Esperia</title>
      </Head>
      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Title */}
        <HeaderSection
          title={"Trasparenza"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />

        {/* Elenco file */}
        <div className="flex flex-col gap-10 mt-28">
          {/* 2020 */}
          <FileList
            year={2020}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
          />

          <hr />

          {/* 2021 */}
          <FileList
            year={2021}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
          />

          <hr />

          {/* 2022 */}
          <FileList
            year={2022}
            files={[
              { name: "primofile.pdf", href: "/" },
              { name: "secondofile.pdf", href: "/" },
              { name: "terzofile.pdf", href: "/" },
            ]}
          />
        </div>
      </main>
    </Layout>
  );
};

export default TrasparenzaPage;
