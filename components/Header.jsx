"use client";

import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About Me",
      href: "/about-me",
    },
    {
      title: "Testimonials",
      href: "/testimonials",
    },
    {
      title: "Contact",
      href: "/contact-me",
    },
  ];

  const mobileMenu = () => (
    <div
      className={`fixed top-16 left-0 w-full h-full bg-white/30 backdrop-blur-md transition-all  ease-in-out duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="px-3 text-right flex flex-col gap-6">
        {navLinks.map((nav) => {
          return (
            <li key={nav.title}>
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <header className="max-w-7xl mx-auto h-16 sticky z-10 w-full">
      <nav className="flex justify-between items-center px-3">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="bulutyerli logo"
            className="w-20 h-auto cursor-pointer"
          ></Image>
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        {mobileMenu()}
        <ul className="gap-4 md:flex hidden ">
          {navLinks.map((nav) => {
            return (
              <li key={nav.title}>
                <Link className="text-sm" href={nav.href}>
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
