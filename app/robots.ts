import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

// Generate robots.txt at build time so it works with `output: 'export'`.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
