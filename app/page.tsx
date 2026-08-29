import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Meet the seven-member PNC student technology team and explore their skills, projects and professional experience.',
};

export default function Page() {
  return <HomePage />;
}
