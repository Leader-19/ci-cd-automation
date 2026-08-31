import type { Metadata } from 'next';
import { teamMembers } from '@/data/team';
import { khmerMemberNames } from '@/lib/i18n';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://pncteamstartup.site').replace(/\/$/, '');
export const siteName = 'PNC Student Team Portfolio';
export const siteDescription = 'Meet the PNC student technology team and explore verified skills, professional experience, academic projects and practical technology work.';

const sharedKeywords = [
  'PNC student team',
  'PNC Cambodia',
  'student technology portfolio',
  'Cambodia web developers',
  'software development team',
  'full stack development',
  'quality assurance',
  'web development projects',
  'Phnom Penh technology team',
];

// These are genuine profile names, included so people can find the team in either script.
export const memberSearchKeywords = teamMembers.flatMap((member) => [
  member.name,
  khmerMemberNames[member.slug],
]).filter((name): name is string => Boolean(name));

const socialImage = {
  url: '/logo/logo.png',
  width: 1672,
  height: 941,
  alt: 'PNC Student Team Portfolio',
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...sharedKeywords, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      type: 'website',
      locale: 'en_US',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [socialImage.url],
    },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
  description: siteDescription,
  email: 'chheadeveloper@gmail.com',
  areaServed: 'Cambodia',
  knowsAbout: [
    'Web Development',
    'Full Stack Development',
    'Quality Assurance',
    'Software Engineering',
    'Databases',
    'Cloud Infrastructure',
  ],
};
