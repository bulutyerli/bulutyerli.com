import { spartan } from "@/app/fonts";

export default function SectionTitle({ title }) {
  return (
    <div className="relative my-10 mt-10 lg:mt-20 max-w-3xl mx-auto">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center">
        <h1
          className={`${spartan.className} text-2xl md:text-3xl xl:text-4xl tracking-tighter font-semibold text-center bg-white pr-3 leading-6 text-zinc-700`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
