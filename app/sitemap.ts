import type { MetadataRoute } from 'next';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const staticRoutes = ['', '/about', '/team', '/expertise', '/projects', '/contact'].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
  const memberRoutes = teamMembers.map((member) => ({ url: `${base}/team/${member.slug}`, lastModified: new Date() }));
  const projectRoutes = projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }));
  return [...staticRoutes, ...memberRoutes, ...projectRoutes];
}
