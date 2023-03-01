import HeaderSection from "@/components/HeaderSection";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

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
        {/* <div className="container">
          <div className="row">

            <div className="col-6 col-md-3 centra">
              <a href="/" className="libro" title="Post-itis - Numero 7">
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-6 col-md-3 centra">
              <a
                href="../giornalini/post-itis/6_Numero.pdf"
                className="libro"
                title="Post-itis - Numero 6"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-6 col-md-3 centra">
              <a
                href="../giornalini/post-itis/5_Numero.pdf"
                className="libro"
                title="Post-itis - Numero 5"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-6 col-md-3 centra">
              <a
                href="/logo.svg"
                className="libro"
                title="Post-itis - Numero 4"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-12 shelf hidden-xs-down"></div>

            <div className="col-6 col-md-3 centra">
              <a
                href="../giornalini/post-itis/3_Numero.pdf"
                className="libro"
                title="Post-itis - Numero 3"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-6 col-md-3 centra">
              <a
                href="../giornalini/post-itis/2_Numero.pdf"
                className="libro"
                title="Post-itis - Numero 2"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-6 col-md-3 centra">
              <a
                href="../giornalini/post-itis/1_Numero.pdf"
                className="libro"
                title="Post-itis - Numero 1"
              >
                <img
                  src="/logo.svg"
                  className="img-responsive book d-none d-md-block"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
                <img
                  src="/logo.svg"
                  className="img-responsive bookMobile d-md-none"
                  onmouseover="ciao(this)"
                  onmouseout="provolo(this)"
                />
              </a>
            </div>

            <div className="col-12 shelf hidden-xs-down"></div>
          </div>
        </div> */}

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 mt-28 justify-items-center libreria">
          <Image src="/logo.svg" alt="Rivista 1" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 1" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 2" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 3" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 4" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 5" width={100} height={100} />
          <Image src="/logo.svg" alt="Rivista 6" width={100} height={100} />
        </div>
      </main>
    </Layout>
  );
};

export default RivistaPage;
