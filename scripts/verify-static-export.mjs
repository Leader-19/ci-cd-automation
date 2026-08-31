import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const out = resolve(root, 'out');

const readSlugs = (file) => [...readFileSync(resolve(root, file), 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const memberSlugs = readSlugs('data/team.ts');
const projectSlugs = readSlugs('data/projects.ts');

const requiredFiles = [
  'index.html',
  'about.html',
  'team.html',
  'expertise.html',
  'projects.html',
  'contact.html',
  'sitemap.xml',
  'robots.txt',
  ...memberSlugs.map((slug) => `team/${slug}.html`),
  ...projectSlugs.map((slug) => `projects/${slug}.html`),
];

if (!existsSync(out) || !statSync(out).isDirectory()) {
  console.error('Static export verification failed: the out/ directory was not created.');
  process.exit(1);
}

const missing = requiredFiles.filter((file) => !existsSync(resolve(out, file)));
if (missing.length) {
  console.error(`Static export verification failed. Missing files:\n${missing.map((file) => `- out/${file}`).join('\n')}`);
  process.exit(1);
}

console.log(`Static export verified: ${memberSlugs.length} member pages and ${projectSlugs.length} project pages are ready for Nginx.`);
