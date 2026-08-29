'use client';

import { PageMotion } from '@/components/Motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageMotion>{children}</PageMotion>;
}
