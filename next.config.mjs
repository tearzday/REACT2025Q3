/** @type {import('next' * ).NextConfig} */

const nextConfig = {
  distDir: './dist',
  sassOptions: {
    prependData: `@import '@/styles/index.scss';`,
  },
};

export default nextConfig;
