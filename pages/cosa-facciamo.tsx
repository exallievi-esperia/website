import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CosaFacciamoPage = () => {
  return (
    <Layout
      title={"Cosa facciamo"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      }
    >
      <Head>
        <title>Cosa facciamo - Ex Allievi Esperia</title>
      </Head>

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Progetti realizzati */}
        <section className='flex flex-col gap-20'>
          {/* Museo TIME */}
          <div className='mt-8 flex flex-col lg:flex-row gap-8 lg:gap-16'>
            {/* Img */}
            <div className='w-full lg:w-1/2'>
              <Slider {...settings} className='self-center'>
                <div>
                  <Image
                    alt='Party'
                    width={1000}
                    height={1000}
                    src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                    className='h-full w-full object-cover aspect-auto'
                  />
                  <p className='text-center w-full mt-3'>Prima</p>
                </div>

                <div>
                  <Image
                    alt='Party'
                    width={1000}
                    height={1000}
                    src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                    className='h-full w-full object-cover aspect-auto'
                  />
                  <p className='text-center w-full mt-3'>Dopo</p>
                </div>
              </Slider>
            </div>

            {/* Text */}
            <div className='self-center'>
              <div className='max-w-3xl mb-8'>
                <h2 className='text-2xl font-bold sm:text-2xl'>Museo TIME</h2>
                <span className='flex items-center text-gray-500 text-base mt-2'>
                  <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
                  Giugno 2016
                </span>
              </div>

              <div className='space-y-4 text-gray-600'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </div>
            </div>
          </div>

          <hr />

          {/* Lab */}
          <div className='mt-8 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16'>
            {/* Text */}
            <div className='self-center'>
              <div className='max-w-3xl mb-8'>
                <h2 className='text-2xl font-bold sm:text-2xl'>Laboratorio</h2>
                <span className='flex items-center text-gray-500 text-base mt-2'>
                  <span className='block h-0.5 w-4 bg-[#f25116] mr-2 rounded-full'></span>
                  Giugno 2016
                </span>
              </div>

              <div className='space-y-4 text-gray-600'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </div>
            </div>

            {/* Img */}
            <div className='w-full lg:w-1/2'>
              <Slider {...settings} className='self-center'>
                <div>
                  <Image
                    alt='Party'
                    width={1000}
                    height={1000}
                    src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                    className='h-full w-full object-cover aspect-auto'
                  />
                  <p className='text-center w-full mt-3'>Prima</p>
                </div>

                <div>
                  <Image
                    alt='Party'
                    width={1000}
                    height={1000}
                    src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                    className='h-full w-full object-cover aspect-auto'
                  />
                  <p className='text-center w-full mt-3'>Dopo</p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
};

export default CosaFacciamoPage;
