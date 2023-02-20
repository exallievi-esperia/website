import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";

const Navbar: React.FC = () => {

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

  return (
    <nav className="">
      <div>Logo</div>
      <div>
        {menuItems.map((item, index) =>
          item.href ? (
            <Link href={item.href} key={index}>
              {item.label}
            </Link>
          ) : (
            <Menu>
              <Menu.Button>{item.label}</Menu.Button>
              <Menu.Items>
                {item.subItems?.map((subitem, index) => (
                  /* Use the `active` state to conditionally style the active item. */
                  <Menu.Item key={index} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={subitem.href}
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {subitem.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
