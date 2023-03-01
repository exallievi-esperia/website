import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo Ex Allievi Esperia"
                  width={48}
                  height={48}
                />
              </Link>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.facebook.com/exallievi.paleocapa"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <MdFacebook className="w-8 h-8" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Associazione</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/chi-siamo"
                    >
                      Chi siamo
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/cosa-facciamo"
                    >
                      Cosa facciamo
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/soci"
                    >
                      Soci
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/sostieni"
                    >
                      Sostieni
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Documenti</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/statuto"
                    >
                      Statuto
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/trasparenza"
                    >
                      Trasparenza
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/verbali"
                    >
                      Verbali
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Link utili</p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.itispaleocapa.edu.it"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      I.T.I.S. P. Paleocapa
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="https://www.teamartist.com/ta_login/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TeamArtist
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contatti</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="mailto:exallievi@itispaleocapa.it"
                  >
                    <MdOutlineEmail className="h-5 w-5 shrink-0 text-gray-900" />

                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      exallievi@itispaleocapa.it
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="tel:035319388"
                  >
                    <MdOutlinePhone className="h-5 w-5 shrink-0 text-gray-900" />

                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      035 319388
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://goo.gl/maps/JjHGPvEaM1fiAFwk7"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-start justify-center gap-1.5 sm:justify-start"
                  >
                    <MdOutlineLocationOn className="h-5 w-5 shrink-0 text-gray-900" />

                    <span className="text-gray-700 transition hover:text-gray-700/75">
                      Via Mauro Gavazzeni, 29, 24125 Bergamo
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              &copy; {new Date().getFullYear()} Ex Allievi Esperia.
              <span className="block sm:inline"> All rights reserved.</span>
            </p>
            <div className="text-sm text-gray-500 flex justify-center sm:justify-end gap-4 mt-6 sm:mt-0">
              <Link
                className="inline-block text-gray-500 transition hover:opacity-75"
                href="/"
              >
                Privacy Policy
              </Link>

              <Link
                className="inline-block text-gray-500 transition hover:opacity-75"
                href="/"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
