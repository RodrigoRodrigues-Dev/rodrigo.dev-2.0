import type { Metadata } from 'next';
import {
  Barlow,
  Barlow_Condensed,
  Cormorant_Garamond,
  IBM_Plex_Mono
} from 'next/font/google';
import '@/src/styles/globals.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-barlow'
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '800'],
  display: 'swap',
  variable: '--font-barlow-condensed'
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  title: 'rodrigo.dev',
  description: 'Portfólio de Rodrigo'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
