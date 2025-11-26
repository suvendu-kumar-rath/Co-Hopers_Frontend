/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['images.pexels.com'],
    formats: ['image/webp', 'image/avif']
  },
};

module.exports = nextConfig;
