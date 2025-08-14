/** @type {import('next' * ).NextConfig} */

const nextConfig = {
  distDir: './dist',
  sassOptions: {
    prependData: `@import '@/styles/index.scss';`,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

export default nextConfig;
