import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import Heading from "@/components/Heading"

import Copertina2006 from '../public/img/copertine/Copertina2006.jpg'
import Copertina2007 from '../public/img/copertine/Copertina2007.jpg'
import Copertina2008 from '../public/img/copertine/Copertina2008.jpg'
import Copertina2009 from '../public/img/copertine/Copertina2009.jpg'
import Copertina2010 from '../public/img/copertine/Copertina2010.jpg'
import Copertina2012 from '../public/img/copertine/Copertina2012.jpg'
import Copertina2013 from '../public/img/copertine/Copertina2013.jpg'
import Copertina2014 from '../public/img/copertine/Copertina2014.jpg'
import Copertina2015 from '../public/img/copertine/Copertina2015.jpg'
import Copertina2016 from '../public/img/copertine/Copertina2016.jpg'
import Copertina2017 from '../public/img/copertine/Copertina2017.jpg'
import Copertina2018 from '../public/img/copertine/Copertina2018.jpg'
import Copertina2019 from '../public/img/copertine/Copertina2019.jpg'
import Copertina2022 from '../public/img/copertine/Copertina2022.jpg'

const RivistaPage = () => {
  return (
    <Layout>
      <Head>
        <title>Rivista - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Rivista"}
        description={
          "La rivista ufficiale degli Ex Allievi"
        }
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-20'>
        {/* Bookshelf */}
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4'>
          <Link
            href='https://drive.google.com/file/d/1Z9rdZl8w6R5QeycQoZGsr-5hMqwNiaDA/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2022}
              alt='Anteprima rivista 2022'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2022
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1VNA2eEEeGocQ57ZL8EUEkpzbrwpGAsXn/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2019}
              alt='Anteprima rivista 2019'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2019
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1oGYyXmk4B_UR0hrMLFwLPIRsE_lOvd1I/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2018}
              alt='Anteprima rivista 2018'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2018
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1XcNrfMv1g9HYKlmlfxfBHrMgTVI9vfxb/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2017}
              alt='Anteprima rivista 2017'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2017
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden md:block col-span-4 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden md:block col-span-4 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1NldOFLFx8znGfcUsFpRa75p3afJ-P87o/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2016}
              alt='Anteprima rivista 2016'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2016
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1YjTz6ImJt1u_kuccY0GJHsUa-HnUHcXJ/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2015}
              alt='Anteprima rivista 2015'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2015
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1tB3SBLGqBfxIO_TjREZ_QKuzx9s6wXOe/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2014}
              alt='Anteprima rivista 2014'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2014
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1HNIX2VM5PLv3ypMueKGEby51XgXQJDNF/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2013}
              alt='Anteprima rivista 2013'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2013
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden md:block col-span-4 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden md:block col-span-4 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>
        
          <Link
            href='https://drive.google.com/file/d/1x7aqzCABo-eKVyS4lIh7liEO30ZzSoj2/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2012}
              alt='Anteprima rivista 2012'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2012
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/17Yz44xjIknMYe6W7me8RB1BacMC2RMEe/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2010}
              alt='Anteprima rivista 2010'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2010
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1scA-T-n11hWarxwwRW5BG1rgDKyPevd5/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2009}
              alt='Anteprima rivista 2009'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2009
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1ksEC0jNjNgdXovq7b4PraMqk-RVxfAf5/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            {" "}
            <Image
              src={Copertina2008}
              alt='Anteprima rivista 2008'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2008
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden md:block col-span-4 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden md:block col-span-4 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/196BntM195JNZhUwM0sDrAaxzT3oe3hOh/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2007}
              alt='Anteprima rivista 2007'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2007
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <Link
            href='https://drive.google.com/file/d/1sxv1IgnxnDLX04zMaNuV24-AoUaNS2Vw/view?usp=sharing'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center flex-col transition-transform duration-300 hover:-translate-y-5'
          >
            <Image
              src={Copertina2006}
              alt='Anteprima rivista 2006'
              width={150}
              height={150}
              className=' translate-y-9'
            />
            <span className='font-bold bg-[#f25116] text-white px-3 rounded-full z-10 translate-y-5'>
              2006
            </span>
          </Link>

          <span className='block sm:hidden col-span-1 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='block sm:hidden col-span-1 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden sm:block md:hidden col-span-2 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden sm:block md:hidden col-span-2 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

          <span className='hidden md:block col-span-4 border-b-[30px] border-b-orange-300 border-r-[20px] border-r-transparent border-l-[20px] border-l-transparent'></span>
          <span className='hidden md:block col-span-4 mb-10 border-b-[15px] border-b-orange-400 border-r-[20px] border-r-orange-400 border-l-[20px] border-l-orange-400'></span>

        </div>
      </main>
    </Layout>
  )
}

export default RivistaPage
