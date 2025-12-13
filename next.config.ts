import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Disable ESLint during build (security fixes in progress)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // SEO and performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/freelance-dcs',
        destination: '/products/freelance',
        permanent: true,
      },
      {
        source: '/800xa',
        destination: '/products/800xa',
        permanent: true,
      },
      {
        source: '/compact-control-builder',
        destination: '/products/compact-control',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
