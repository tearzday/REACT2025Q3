import type { Metadata } from 'next';
import '@/styles/normalize.scss';
import '@/styles/fonts.scss';
import '@/styles/style.scss';
import QueryProvider from '@/components/QueryProvider';
import { ThemeContextProvider } from '@/context';

export const metadata: Metadata = {
  title: 'Rick And Morty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <QueryProvider>
            <div id="root">{children}</div>
          </QueryProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
