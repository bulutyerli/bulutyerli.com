import { unstable_setRequestLocale } from "next-intl/server";

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  return children;
}
