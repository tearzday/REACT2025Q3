/** @type {import('next' * ).NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: './dist',
  sassOptions: {
    prependData: `@import '@/styles/index.scss';`  },
}
 
export default nextConfig