import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { createPageMetadata, memberSearchKeywords } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'PNC Student Team Portfolio',
  description: 'Meet the seven-member PNC student technology team and explore verified skills, projects, internships and professional experience.',
  path: '/',
  keywords: ['PNC team portfolio', 'Cambodia student developers', 'student software projects', ...memberSearchKeywords],
});

export default function Page() {
  return <HomePage />;
}
