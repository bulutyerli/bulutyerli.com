import clsx from 'clsx';
import { spartan } from 'fonts';

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('relative max-w-3xl mx-auto mb-10 ', className)}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-600" />
      </div>
      <div className="relative flex justify-center">
        <h2
          className={clsx(
            spartan.className,
            'text-2xl md:text-3xl xl:text-4xl tracking-tighter font-semibold text-center bg-white dark:bg-zinc-900 pr-3 leading-6 text-zinc-700 dark:text-zinc-300 px-3'
          )}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
