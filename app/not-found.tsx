import Link from 'next/link';
import { spartan } from './fonts';
import './globals.css';

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 my-auto">
          <div className="text-center">
            <p className="text-base font-semibold text-red-600">404</p>
            <h1
              className={`mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl ${spartan.className}`}
            >
              page not found.
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, there is no page that you are looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
