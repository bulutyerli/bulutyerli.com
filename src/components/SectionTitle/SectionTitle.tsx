import clsx from 'clsx';

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('relative mx-auto mb-10 max-w-3xl', className)}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-600" />
      </div>
      <div className="relative flex justify-center">
        <h2
          className={clsx(
            'font-spartan bg-white px-3 pr-3 text-center text-2xl leading-6 font-semibold tracking-tighter text-zinc-700 md:text-3xl xl:text-4xl dark:bg-zinc-900 dark:text-zinc-300',
          )}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
