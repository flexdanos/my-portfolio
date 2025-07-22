/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig
