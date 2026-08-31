import type { MetadataRoute } from 'next';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';

// Generate sitemap.xml at build time so it works with `output: 'export'`.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const paths = ['', '/about', '/team', '/expertise', '/projects', '/contact'];
  const staticRoutes = ['en', 'km'].flatMap((locale) => paths.map((path) => ({ url: `${base}/${locale}${path}`, lastModified: new Date() })));
  const memberRoutes = ['en', 'km'].flatMap((locale) => teamMembers.map((member) => ({ url: `${base}/${locale}/team/${member.slug}`, lastModified: new Date() })));
  const projectRoutes = ['en', 'km'].flatMap((locale) => projects.map((project) => ({ url: `${base}/${locale}/projects/${project.slug}`, lastModified: new Date() })));
  return [...staticRoutes, ...memberRoutes, ...projectRoutes];
}
