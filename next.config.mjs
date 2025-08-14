import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  sassOptions: {
    prependData: `@import '@/styles/index.scss';`,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
