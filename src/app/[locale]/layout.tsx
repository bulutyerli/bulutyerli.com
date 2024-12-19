import 'globals.css';
import { roboto } from 'fonts';
import { NextIntlClientProvider } from 'next-intl';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeProvider from 'providers/ThemeProvider';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Locale, routing } from 'i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';

export const metadata = {
  title: 'Bulut Yerli Full-Stack Web Developer ',
  description:
    'Specialized in React, Nextjs, Nodejs, Postgresql, MongoDB, Tailwind, CSS, HTML, Creating Websites',
  verification: { google: '6arujRnN1DBVvHtHiK-Ydzq7OYReR34RvilFphSiqY8' },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={roboto.className} suppressHydrationWarning>
      <body className="dark:bg-zinc-900 flex min-h-screen justify-between">
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
