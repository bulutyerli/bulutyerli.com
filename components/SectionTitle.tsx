import { spartan } from '@/app/fonts';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative my-10 mt-10 lg:mt-20 max-w-3xl mx-auto">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-600" />
      </div>
      <div className="relative flex justify-center">
        <h1
          className={`${spartan.className} text-2xl md:text-3xl xl:text-4xl tracking-tighter font-semibold text-center bg-white dark:bg-zinc-900 pr-3 leading-6 text-zinc-700 dark:text-zinc-300`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
