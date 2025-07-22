/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // Add build optimization settings
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
  },
  // Exclude unnecessary files from build
  excludeDefaultMomentLocales: true,
  // Add proper export configuration
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/client-projects': { page: '/client-projects' },
    };
  },
  // Add proper file exclusion patterns
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
