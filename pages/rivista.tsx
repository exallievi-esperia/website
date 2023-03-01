import HeaderSection from "@/components/HeaderSection";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const RivistaPage = () => {
  return (
    <Layout>
      <Head>
        <title>Rivista - Ex Allievi Esperia</title>
      </Head>
      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Title */}
        <HeaderSection
          title={"Rivista"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />

        {/* Bookshelf */}
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 mt-28">
          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2022
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2021
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden sm:block md:hidden col-span-2 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            {" "}
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2020
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            {" "}
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2019
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden sm:block md:hidden col-span-2 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden md:block col-span-4 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            {" "}
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2018
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            {" "}
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2017
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden sm:block md:hidden col-span-2 mb-10 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>

          <Link
            href="/documenti/riviste/rivista-2019.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center flex-col transition-transform duration-300 hover:-translate-y-5"
          >
            <Image
              src="/img/copertine/rivista-2019.jpg"
              alt="Anteprima rivista 2019"
              width={150}
              height={150}
              className=" translate-y-9"
            />
            <span className="font-bold bg-red-400 text-white px-3 rounded-full z-10 translate-y-5">
              2016
            </span>
          </Link>

          <span className="block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
          <span className="hidden md:block col-span-4 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent"></span>
        </div>
      </main>
    </Layout>
  );
};

export default RivistaPage;
