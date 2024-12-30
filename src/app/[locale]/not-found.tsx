import 'globals.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="my-auto grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-zinc-900">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">404</p>
        <h1 className="font-spartan mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-200">
          {t('h1')}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {t('h2')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-zinc-700"
          >
            {t('button')}
          </Link>
        </div>
      </div>
    </div>
  );
}
