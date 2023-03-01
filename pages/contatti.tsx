import HeaderSection from "@/components/HeaderSection";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const ContattiPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contatti - Ex Allievi Esperia</title>
      </Head>
      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Title */}
        <HeaderSection
          title={"Contatti"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />
      </main>
    </Layout>
  );
};

export default ContattiPage;
