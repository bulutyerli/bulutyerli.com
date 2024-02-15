import Link from "next/link";
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full relative h-20 items-center flex bg-gradient-to-t from-white to-zinc-100 mt-10">
      <section className="flex items-center justify-between mx-auto max-w-7xl w-full px-2">
        <p className="text-xs md:text-sm xl:text-md text-zinc-500">{`© ${year} Bulut Yerli. All rights reserved.`}</p>
        <ul className="flex text-3xl gap-2 text-zinc-500">
          <li className="hover:text-zinc-600">
            <Link
              href="https://github.com/bulutyerli"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoGithub />
            </Link>
          </li>
          <li className="hover:text-zinc-600">
            <Link
              href="https://www.linkedin.com/in/bulutyerli/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoLinkedin />
            </Link>
          </li>
          <li className="hover:text-zinc-600">
            <Link
              href="mailTo: bulutyerli@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoGmail />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
