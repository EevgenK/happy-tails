import type { Metadata } from 'next';
import { Source_Code_Pro, Lobster } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import SnippetButtonWrapper from './components/SnippetButtonWrapper/SnippetButtonWrapper';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-code',
  display: 'swap',
});
const sourceLobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
});

export const metadata: Metadata = {
  title: 'Happy Tails Grooming — Курси грумінгу',
  description:
    'Професійні курси грумінгу у салоні Happy Tails Grooming. Навчіться стригти собак і кішок професійно. Найкращі викладачі, сучасна програма.',
  keywords: [
    'курси грумінгу',
    'курси грумінгу Дніпро',
    'курси грумінгу Днепр',
    'навчання грумінгу',
    'стрижка собак',
    'грумінг',
    'курсы груминга',
    'груминг обучение',
  ],
  metadataBase: new URL('https://www.happytails-grooming.dp.ua/'),
  openGraph: {
    title: 'Курси грумінгу — Happy Tails Grooming',
    description:
      'Приєднуйтесь до курсів грумінгу у Дніпрі! Професійна підготовка для майбутніх грумерів.',
    url: 'https://www.happytails-grooming.dp.ua/',
    type: 'website',
    locale: 'uk_UA',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <body className={`${sourceCodePro.variable} ${sourceLobster.variable}`}>
        <Header />

        <main> {children}</main>
        <Footer />
        <SnippetButtonWrapper />
      </body>
    </html>
  );
}
