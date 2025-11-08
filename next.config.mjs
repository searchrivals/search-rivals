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

  // 👇 ensures /studio is ignored at build time
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
      config.externals = config.externals || [];
      config.externals.push({
        '@sanity/vision': 'commonjs @sanity/vision',
      });
    }
    return config;
  },
};

export default nextConfig;
