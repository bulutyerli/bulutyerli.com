import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import macbook from "@/public/macbook2.webp";
import AboutMeBg from "@/components/AboutMeBg";
import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <Container className="mt-auto flex flex-col text-center">
      <div className="flex-col gap-3 flex mb-10 lg:mb-20 mt-10 lg:mt-0">
        <h1 className="text-2xl lg:text-3xl text-zinc-700">
          Have a project in mind or just want to say hi?
        </h1>
        <p className="text-md lg:text-lg text-zinc-600">
          Fill out the form below or reach out to me directly via social links
        </p>
      </div>
      <div className="relative flex flex-col-reverse gap-10 lg:flex-row justify-around items-center">
        <Image className="hidden lg:block" src={macbook} />
        <AboutMeBg className="absolute inset-x-0 xl:-top-42 -z-10 h-[32rem] lg:h-[64rem] w-full stroke-zinc-200 [mask-image:radial-gradient(22rem_22rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" />
        <SocialIcons
          className={"lg:flex-col gap-16 text-zinc-500 hidden lg:block"}
          size={50}
        />
        <ContactForm />
      </div>
    </Container>
  );
}
