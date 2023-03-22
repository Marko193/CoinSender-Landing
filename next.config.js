/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // exportPathMap: async function (
  //     defaultPathMap,
  //     { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/privacy_policy': { page: '/privacy_policy' },
  //     '/faq': { page: '/faq'}
  //   }
  // },
};

module.exports = nextConfig;
