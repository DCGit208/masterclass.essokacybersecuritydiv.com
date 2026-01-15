/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'essokacybersecuritydiv.com'],
  },
}

module.exports = nextConfig
