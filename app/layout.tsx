import type { Metadata } from 'next';
import { Battambang, Public_Sans } from 'next/font/google';
import Providers from '@/components/Providers';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import { memberSearchKeywords, organizationSchema, siteDescription, siteName, siteUrl } from '@/lib/seo';

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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s | PNC Student Team',
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'PNC Student Team' }],
  creator: 'PNC Student Team',
  publisher: 'PNC Student Team',
  keywords: memberSearchKeywords,
  category: 'Technology portfolio',
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/logo/logo.png', width: 1672, height: 941, alt: siteName }],
  },
  twitter: { card: 'summary_large_image', title: siteName, description: siteDescription, images: ['/logo/logo.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${battambang.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
