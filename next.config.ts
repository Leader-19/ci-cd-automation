import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The site is a frontend-only portfolio and is deployed as static files through Nginx.
  output: 'export',
  // Static exports do not include the Next.js image-optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
