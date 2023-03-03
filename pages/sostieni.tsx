import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";

const SostieniPage = () => {
  return (
    <Layout
      title="Sostieni"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    >
      <Head>
        <title>Sostieni - Ex Allievi Esperia</title>
      </Head>

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* 5x1000 */}
        <div>
          <h2 className="font-bold text-3xl">5x1000</h2>
          <Image
            src="/img/5x1000.png"
            alt="Immagine come donare il 5x1000"
            width={500}
            height={400}
            className="aspect-auto m-auto mt-10"
          />
        </div>

        {/* Donazioni libere */}
        <div>
          <h2 className="font-bold text-3xl">Donazioni libere</h2>
        </div>

        {/* Erogazioni da aziende */}
        <div>
          <h2 className="font-bold text-3xl">Erogazioni da aziende</h2>
        </div>
      </main>
    </Layout>
  );
};

export default SostieniPage;
