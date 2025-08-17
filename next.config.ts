import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  distDir: './dist',
  sassOptions: {
    prependData: `@use '@/styles/index' as *;`,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
