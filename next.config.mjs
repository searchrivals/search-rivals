/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/index.html',
      },
    ];
  },

  // 👇 completely ignore Sanity Studio during static generation
  async exportPathMap(defaultPathMap) {
    delete defaultPathMap['/studio/[[...tool]]'];
    delete defaultPathMap['/studio'];
    return defaultPathMap;
  },

  // 👇 stop pre-rendering errors by skipping Sanity server imports
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@sanity/vision': 'commonjs @sanity/vision',
      });
    }
    return config;
  },
};

export default nextConfig;
