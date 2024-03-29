"use client";

import { Link } from "@/navigation";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "@/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/public/logo.svg";
import logoDark from "@/public/logoDark.svg";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isActive = (href) => path === href;
  const t = useTranslations("Header");

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const navLinks = [
    {
      title: t("projects"),
      href: "/projects",
    },
    {
      title: t("aboutMe"),
      href: "/about-me",
    },
    {
      title: t("contact"),
      href: "/contact",
    },
  ];

  const mobileMenu = () => (
    <div
      className={`fixed top-16 left-0 w-full h-full bg-white/30 backdrop-blur-md transition-all  ease-in-out duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="px-3 text-right flex flex-col gap-10 mr-6 mt-10">
        <li className="self-end">
          <LocaleSwitcher />
        </li>
        {navLinks.map((nav) => {
          return (
            <li onClick={() => setMenuOpen(false)} key={nav.title}>
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <header className="max-w-7xl mx-auto w-full h-16 z-10 flex items-center justify-between mt-2 sticky top-0 lg:relative bg-white dark:bg-zinc-900">
      <Link onClick={() => setMenuOpen(false)} href={"/"}>
        <Image
          src={logo}
          alt="bulutyerli logo"
          className="w-16 xl:w-24 h-auto cursor-pointer ml-2 dark:hidden"
        />
        <Image
          src={logoDark}
          alt="bulutyerli logo"
          className="w-16 xl:w-24 h-auto cursor-pointer ml-2 hidden dark:block"
        />
      </Link>
      <nav className="flex justify-between items-center px-3 gap-3">
        <ThemeSwitcher className={"md:hidden"} />
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {mobileMenu()}
        <ul className="gap-10 md:flex hidden ">
          {navLinks.map((nav) => {
            return (
              <li key={nav.title}>
                <Link
                  className={` ${isActive(nav.href) && "underline"}`}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden md:flex md:gap-6">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
