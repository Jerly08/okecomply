import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimization for Vercel deployment
  output: 'standalone',
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'lucide-react', 'recharts'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // TypeScript config
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint config
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
