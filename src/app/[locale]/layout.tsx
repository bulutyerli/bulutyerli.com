import 'globals.css';

import { roboto } from 'fonts';
import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { locales } from 'navigation';
import ThemeProvider from 'providers/ThemeProvider';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Container from 'components/Container/Container';

export const metadata = {
  title: 'Bulut Yerli Full-Stack Web Developer ',
  description:
    'Specialized in React, Nextjs, Nodejs, Postgresql, MongoDB, Tailwind, CSS, HTML, Creating Websites',
  verification: { google: '6arujRnN1DBVvHtHiK-Ydzq7OYReR34RvilFphSiqY8' },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className={roboto.className} suppressHydrationWarning>
      <body className="dark:bg-zinc-900 flex min-h-screen justify-between">
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={pick(messages, 'Header')}>
            <Header />
          </NextIntlClientProvider>
          <NextIntlClientProvider messages={pick(messages, 'Error')}>
            <main>{children}</main>
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
