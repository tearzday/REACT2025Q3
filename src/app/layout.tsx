import type { Metadata } from 'next';
import '@/styles/normalize.scss';
import '@/styles/fonts.scss';
import '@/styles/style.scss';

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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
