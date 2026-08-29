import type { Metadata } from 'next';
import { Battambang, Public_Sans } from 'next/font/google';
import Providers from '@/components/Providers';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
  weight: ['400', '500', '600', '700'],
});
const battambang = Battambang({
  subsets: ['khmer'],
  display: 'swap',
  variable: '--font-battambang',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'PNC Student Team Portfolio',
    template: '%s | PNC Student Team',
  },
  description: 'A professional student technology team portfolio presenting skills, experience, education, projects and practical learning from seven PNC team members.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'PNC Student Team Portfolio',
    description: 'Meet the PNC student technology team and explore their skills, experience and projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${battambang.variable}`}>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
