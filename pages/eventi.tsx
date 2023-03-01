import HeaderSection from "@/components/HeaderSection";
import Layout from "@/components/layout/Layout";
import EventiCard from "@/components/EventiCard";
import Head from "next/head";

const eventiList = [
  {
    name: "Eventi 1",
    description: "Lorem Ipsum",
    href: "/",
  },
  {
    name: "Eventi 2",
    description: "Lorem Ipsum",
    href: "/",
  },
  {
    name: "Eventi 3",
    description: "Lorem Ipsum",
    href: "/",
  },
  {
    name: "Eventi 4",
    description: "Lorem Ipsum",
    href: "/",
  },
];

const EventiPage = () => {
  return (
    <Layout>
      <Head>
        <title>Eventi - Ex Allievi Esperia</title>
      </Head>
      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        {/* Title */}
        <HeaderSection
          title={"Eventi"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />

        <div className="grid grid-cols-3 gap-4 mt-28">
          {eventiList.map((evento) => (
            <EventiCard
              key={evento.name}
              name={evento.name}
              description={evento.description}
              href={evento.href}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default EventiPage;
