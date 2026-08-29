'use client';

import { useLocale } from './Providers';

export default function LocalizedText({ en, km }: { en: React.ReactNode; km: React.ReactNode }) {
  const { locale } = useLocale();
  return <>{locale === 'km' ? km : en}</>;
}
