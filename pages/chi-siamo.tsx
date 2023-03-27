import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Team from "@/components/Team";
import Heading from "@/components/Heading";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ChiSiamoPage = () => {
  return (
    <Layout>
      <Head>
        <title>Chi siamo - Ex Allievi Esperia</title>
      </Head>
      <Heading
        title='Chi siamo'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
      />
      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20 dark:bg-gray-700'>
        {/* La nostra storia */}
        <div>
          <h2 className='font-bold text-3xl mb-5'>La nostra storia</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 leading-7'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <Image
            src='http://via.placeholder.com/1280x350'
            alt='Chi siamo'
            width={1280}
            height={350}
            className='mt-10'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0 mt-10 items-center'>
            <div>
              <p className='leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                Ascolta l'inno dell'Esperia:
              </p>

              <audio
                controls
                className='mt-4 object-contain mx-auto md:mx-0 max-w-full max-h-full'
              >
                <source src='/audio/inno-esperia.mp3' type='audio/mpeg' />
                Il tuo browser non supporta l'elemento audio.
              </audio>
            </div>

            <Image
              src='http://via.placeholder.com/568x400'
              alt='Ex allievi'
              width={568}
              height={400}
            />
          </div>
        </div>

        {/* Direttivo */}
        <div className='mt-20'>
          <h2 className='font-bold text-3xl mb-5'>
            Scopri il direttivo 2020-2023
          </h2>
          <Slider {...settings}>
            <Team
              name='Alessandro Gigli'
              role='Presidente'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Giancarlo Viti'
              role='Vice Presidente'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Daniela Beccaluva'
              role='Segretario & Tesoriere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Battista Azzola'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Gianluca Vitali'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Steven Poma'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Roberto Filippini Fantoni'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Alessandro Rocchi'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />

            <Team
              name='Alfredo Longhi'
              role='Consigliere'
              image='http://via.placeholder.com/250x250'
              contacts={[
                { icon: FaFacebookSquare, link: "/" },
                { icon: FaLinkedin, link: "/" },
                { icon: FaTwitterSquare, link: "/" },
              ]}
            />
          </Slider>
        </div>

        <Image
          src='http://via.placeholder.com/1280x500'
          alt='Chi siamo'
          width={1280}
          height={500}
          className='mt-20'
        />
      </main>
    </Layout>
  )
};

export default ChiSiamoPage;
