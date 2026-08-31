import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PNC Student Team Portfolio',
    short_name: 'PNC Team',
    description: 'Portfolio of the PNC student technology team in Cambodia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F9FC',
    theme_color: '#155EEF',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
