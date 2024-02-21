import { useTranslations } from "next-intl";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className="w-full relative h-20 items-center flex bg-gradient-to-t from-white to-zinc-100 mt-auto">
      <section className="flex items-center justify-between mx-auto max-w-7xl w-full px-2">
        <p className="text-xs md:text-sm xl:text-md text-zinc-500">{`© ${year} Bulut Yerli. ${t(
          "copyright"
        )}`}</p>
        <SocialIcons size={32} />
      </section>
    </footer>
  );
}
