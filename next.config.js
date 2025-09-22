/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  excludeDefaultMomentLocales: true,
  // Enable standalone output for better optimization
  output: 'standalone',
  // Add experimental settings for better build performance
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '**/node_modules/**/*',
        '**/.git/**/*',
        '**/.next/**/*',
      ],
    },
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
}

module.exports = nextConfig
