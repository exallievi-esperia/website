import HeaderSection from "@/components/HeaderSection";
import Layout from "@/components/layout/Layout";
import EventiCard from "@/components/EventiCard";
import Head from "next/head";

const eventiList = [
  {
    name: "Borse di studio: Area Tessile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Gennaio 2023",
    href: "/",
  },
  {
    name: "Borse di studio: Area Informatica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Gennaio 2023",
    href: "/",
  },
  {
    name: "Eventi 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Gennaio 2023",
    href: "/",
  },
  {
    name: "Eventi 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Gennaio 2023",
    href: "/",
  },
];

const EventiPage = () => {
  return (
    <Layout>
      <Head>
        <title>Eventi - Ex Allievi Esperia</title>
      </Head>

      {/* Title */}
      <HeaderSection
        title={"Eventi"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
      />

      <main className="mx-auto max-w-7xl p-6 lg:px-8 my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {eventiList.map((evento) => (
            <EventiCard
              key={evento.name}
              name={evento.name}
              description={evento.description}
              date={evento.date}
              href={evento.href}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default EventiPage;
