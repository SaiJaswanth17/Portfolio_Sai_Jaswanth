import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Enable experimental features for React 19
  experimental: {
    reactCompiler: false,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
  },
};

export default nextConfig;
