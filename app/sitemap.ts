import type { MetadataRoute } from 'next';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/seo';

// Generate sitemap.xml at build time so it works with `output: 'export'`.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/team`, lastModified: updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/expertise`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified: updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
  ];
  const memberRoutes = teamMembers.map((member) => ({ url: `${siteUrl}/team/${member.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.7 }));
  const projectRoutes = projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.8 }));
  return [...staticRoutes, ...memberRoutes, ...projectRoutes];
}
