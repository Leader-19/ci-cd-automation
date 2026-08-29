import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keeps production checks isolated when a local development server is already using .next.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

export default nextConfig;
