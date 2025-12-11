/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',

  // ----- FIX: DISABLE typedRoutes -----
  typedRoutes: false,
  experimental: {
    typedRoutes: false,
  },
  // -------------------------------------

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
    if (isServer) {
      config.externals.push({
        '@sanity/vision': 'commonjs @sanity/vision',
        '@sanity/cli': 'commonjs @sanity/cli'
      });
    }

    config.module.rules.push({
      test: /studio/,
      use: { loader: 'ignore-loader' }
    });

    return config;
  }
};

export default nextConfig;
