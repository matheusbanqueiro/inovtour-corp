"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "./logo";

export default function Navbar(props) {
  const menuItens = [
    { label: "Inicio", href: "/" },
    { label: "Soluções", href: "/solutions" },
    { label: "Quem Somos", href: "/about" },
    { label: "Contato", href: "/contact" },
    { label: "Blog", href: "/blog" }
  ];

  const mobilemenu = [...menuItens];

  const navStyles = {
    fixedContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '0 20px'
    },
    link: "px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400",
    button: "px-4 py-2 border rounded text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white",
    buttonSpecialist: "px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
  };

  return (
    <Container>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900">
        <Disclosure>
          {({ open }) => (
            <>
              <div style={navStyles.fixedContainer}>
                <Logo logo={props.logo} logoalt={props.logoalt} open={open} />
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-center">
                  {menuItens.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className={navStyles.link}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/login" className={navStyles.button}>
                    Login
                  </Link>
                  <Link href="/contact-specialist" className={navStyles.buttonSpecialist}>
                    Fale com especialista
                  </Link>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className={navStyles.link}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open ? "text-blue-500 hover:text-blue-500" : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md focus:outline-none lg:absolute lg:left-0 lg:w-56",
                !mobile && "bg-white shadow-lg dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active ? "text-blue-500" : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};