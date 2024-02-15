import { spartan } from "@/app/fonts";

export default function SectionTitle({ title }) {
  return (
    <div className="relative my-10 mt-20">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white pr-3 text-base font-semibold leading-6 text-zinc-700">
          <h2
            className={`${spartan.className} text-2xl md:text-3xl xl:text-4xl tracking-tighter font-semibold text-center`}
          >
            {title}
          </h2>
        </span>
      </div>
    </div>
  );
}
