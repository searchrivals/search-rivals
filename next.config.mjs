/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    typedRoutes: true
  },
  async redirects() {
    return [
      {
        source: '/studio/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Skip building Sanity Studio in production
    if (isServer) {
      config.externals.push({
        '@sanity/vision': 'commonjs @sanity/vision',
        '@sanity/cli': 'commonjs @sanity/cli'
      });
    }

    // Ignore studio directory entirely
    config.module.rules.push({
      test: /studio/,
      use: 'null-loader'
    });

    return config;
  }
};

export default nextConfig;
