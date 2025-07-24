/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // Exclude unnecessary files from build
  excludeDefaultMomentLocales: true,
  // Add proper file exclusion patterns
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
}

module.exports = nextConfig
