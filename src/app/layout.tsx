import '@/styles/global.css';

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import RootLayoutContent from '@/components/rootlayoutcontent/RootLayoutContent';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  title: AppConfig.title,
  description: AppConfig.description,
  applicationName: AppConfig.title,
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: 'https://livamaconnerie.netlify.app',
    locale: AppConfig.locale,
    siteName: AppConfig.site_name,
  },
};

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale} className={manrope.className}>
      <body>
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
