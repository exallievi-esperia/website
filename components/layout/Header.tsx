import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";

const menuItems = [
  {
    label: "Associazione",
    href: "",
    subItems: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Cosa facciamo", href: "/cosa-facciamo" },
      { label: "Soci", href: "/soci" },
      { label: "Sostieni", href: "/sostieni" },
    ],
  },
  {
    label: "Documenti",
    href: "",
    subItems: [
      { label: "Statuto", href: "/statuto" },
      { label: "Trasparenza", href: "/trasparenza" },
      { label: "Verbali", href: "/verbali" },
    ],
  },
  { label: "Eventi", href: "/eventi" },
  { label: "Rivista", href: "/rivista" },
  { label: "News", href: "/news" },
  { label: "Contatti", href: "/contatti" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo Ex Allievi Esperia"
              width={48}
              height={48}
            />
            <span className="text-2xl">Ex Allievi Esperia</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((menuItem) =>
            menuItem.href ? (
              <Link
                href={menuItem.href}
                className="text-sm font-semibold leading-6 text-gray-900"
                key={menuItem.label}
              >
                {menuItem.label}
              </Link>
            ) : (
              <Popover className="relative" key={menuItem.label}>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  {menuItem.label}
                  <HiChevronDown
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {menuItem.subItems?.map((subItem) => (
                        <div
                          key={subItem.label}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            {/* <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            /> */}
                          </div>
                          <div className="flex-auto">
                            <Link
                              href={subItem.href}
                              className="block font-semibold text-gray-900"
                            >
                              {subItem.label}
                              <span className="absolute inset-0" />
                            </Link>
                            {/* <p className="mt-1 text-gray-600">
                              {item.description}
                            </p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            )
          )}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo Ex Allievi Esperia"
                width={48}
                height={48}
              />
              <span className="text-2xl">Ex Allievi Esperia</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((menuItem) =>
                  menuItem.href ? (
                    <Link
                      href={menuItem.href}
                      key={menuItem.label}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {menuItem.label}
                    </Link>
                  ) : (
                    <Disclosure as="div" className="-mx-3" key={menuItem.label}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {menuItem.label}
                            <HiChevronDown
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {menuItem.subItems?.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.label}
                                as="a"
                                href={subItem.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {subItem.label}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
