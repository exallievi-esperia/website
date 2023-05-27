import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md"
import { IoLogoInstagram } from "react-icons/io"

const menuItems = [
  {
    label: "Associazione",
    subItems: [
      {
        label: "Chi siamo",
        href: "/chi-siamo",
      },
      {
        label: "Cosa facciamo",
        href: "/cosa-facciamo",
      },
      {
        label: "Soci",
        href: "/soci",
      },
      {
        label: "Sostieni",
        href: "/sostieni",
      },
    ],
  },
  {
    label: "Documenti",
    subItems: [
      {
        label: "Statuto",
        href: "/statuto",
      },
      {
        label: "Trasparenza",
        href: "/trasparenza",
      },
      {
        label: "Bilanci",
        href: "/bilanci",
      },
      {
        label: "Verbali",
        href: "/verbali",
      },
    ],
  },
]

const Footer: React.FC = () => {
  return (
    <footer aria-label='Site Footer' className='bg-[#badaef] dark:bg-gray-700'>
      <div className='mx-auto max-w-screen-2xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <Link href='/' className='flex justify-center sm:justify-start'>
              <Image
                src='/logo.svg'
                alt='Logo Ex Allievi Esperia'
                width={48}
                height={48}
              />
            </Link>

            <p className='mt-6 text-center leading-relaxed sm:text-left text-gray-700 dark:text-gray-200'>
              Associazione Ex Allievi dell’ITIS P. Paleocapa di Bergamo, da più
              di cent'anni al fianco degli studenti.
            </p>

            <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
              <li>
                <a
                  href='https://www.facebook.com/exallievi.esperia'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='text-[#f25116] transition hover:text-[#bf3617]'
                >
                  <span className='sr-only'>Facebook</span>
                  <MdFacebook className='w-8 h-8' />
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com/exallievi.esperia'
                  rel='noreferrer'
                  target='_blank'
                  className='text-[#f25116] transition hover:text-[#bf3617]'
                >
                  <span className='sr-only'>Instagram</span>
                  <IoLogoInstagram className='w-8 h-8' />
                </a>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
            <div className='text-center sm:text-left'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                Associazione
              </h3>

              <nav aria-label='Footer About Nav' className='mt-3 sm:mt-8'>
                <ul className='space-y-4 text-sm'>
                  {menuItems[0].subItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                Documenti
              </h3>

              <nav aria-label='Footer Services Nav' className='mt-3 sm:mt-8'>
                <ul className='space-y-4 text-sm'>
                  {menuItems[1].subItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                Link utili
              </h3>

              <nav aria-label='Footer Helpful Nav' className='mt-3 sm:mt-8'>
                <ul className='space-y-4 text-sm'>
                  <li>
                    <a
                      className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'
                      href='https://www.itispaleocapa.edu.it'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      I.T.I.S. P. Paleocapa
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-3005'
                      href='https://www.teamartist.com/ta_login/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      TeamArtist
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'
                      href='https://github.com/exallievi-esperia'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Github
                    </a>
                  </li>

                  <li>
                    <Link
                      className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'
                      href='/privacy'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                Contatti
              </h3>

              <ul className='mt-3 sm:mt-8 space-y-4 text-sm'>
                <li>
                  <a
                    className='flex items-center justify-center gap-1.5 sm:justify-start'
                    href='mailto:exallievi@itispaleocapa.it'
                  >
                    <MdOutlineEmail className='h-5 w-5 shrink-0 text-[#f25116]' />

                    <span className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300 flex flex-wrap'>
                      <span>exallievi@</span>
                      <span>itispaleocapa.it</span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className='flex items-center justify-center gap-1.5 sm:justify-start'
                    href='tel:035319388'
                  >
                    <MdOutlinePhone className='h-5 w-5 shrink-0 text-[#f25116]' />

                    <span className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'>
                      035 319388
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href='https://goo.gl/maps/JjHGPvEaM1fiAFwk7'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='flex items-start justify-center gap-1.5 sm:justify-start'
                  >
                    <MdOutlineLocationOn className='h-5 w-5 shrink-0 text-[#f25116]' />

                    <span className='text-gray-700 dark:text-gray-200 transition hover:text-gray-700/75 dark:hover:text-gray-300'>
                      Via Mauro Gavazzeni, 29, 24125 Bergamo
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-100 pt-6'>
          <div className='text-center'>
            <p className='mt-4 text-sm text-gray-700 dark:text-gray-200 sm:mt-0'>
              &copy; 1920 - {new Date().getFullYear()} Ex Allievi Esperia -
              <span className='block sm:inline'> C.F. 03052000167</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
