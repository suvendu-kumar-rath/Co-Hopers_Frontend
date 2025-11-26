/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Disable ESLint during production builds (already linted in dev)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image configuration for static export
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com'],
    formats: ['image/webp', 'image/avif']
  },
  
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  
  // Optimize production bundle
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },
  
  // Compression and performance
  compress: true,
  
  // Security headers (Note: These work with `next start` but not with static export)
  // For static hosting, configure these in your hosting provider (Vercel, Netlify, etc.)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
