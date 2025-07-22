/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add build optimization settings
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
  },
  // Exclude unnecessary files from build
  images: {
    unoptimized: false,
  },
  // Add build optimization settings
  output: 'export',
}

module.exports = nextConfig
