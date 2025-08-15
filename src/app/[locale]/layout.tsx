import type { Metadata } from 'next';
import '@/styles/normalize.scss';
import '@/styles/fonts.scss';
import '@/styles/style.scss';
import QueryProvider from '@/components/QueryProvider';
import { ThemeContextProvider } from '@/context';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Rick And Morty',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <ThemeContextProvider>
            <QueryProvider>
              <div id="root">{children}</div>
            </QueryProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
