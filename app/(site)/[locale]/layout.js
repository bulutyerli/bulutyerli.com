import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { roboto } from '../../fonts';
import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/navigation';
import { Providers } from '@/components/Providers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Bulut Yerli Full-Stack Web Developer ',
  description:
    'Specialized in React, Nextjs, Nodejs, Postgresql, MongoDB, Tailwind, CSS, HTML, Creating Websites',
  verification: { google: '6arujRnN1DBVvHtHiK-Ydzq7OYReR34RvilFphSiqY8' },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className={roboto.className} suppressHydrationWarning>
      <body className="flex flex-col w-full min-h-screen dark:bg-zinc-900">
        <Providers attribute="class">
          <NextIntlClientProvider messages={pick(messages, 'Header')}>
            <Header />
          </NextIntlClientProvider>
          <NextIntlClientProvider messages={pick(messages, 'Error')}>
            {children}
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
