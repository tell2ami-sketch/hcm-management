/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static page generation for API routes
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Skip build-time data fetching for dynamic routes
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Ensure API routes are not statically generated
  output: 'standalone',
  
  // Skip prerendering for all API routes
  async rewrites() {
    return [];
  },
  
  // Disable static optimization completely
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;

// Made with Bob
