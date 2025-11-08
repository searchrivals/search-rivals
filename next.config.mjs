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
    ]
  },

  // 👇 this line prevents Studio from being statically built
  generateBuildId: async () => {
    return 'build-' + Date.now().toString()
  },
  // 👇 this ensures Studio is ignored during pre-render
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push({
        '@sanity/vision': 'commonjs @sanity/vision',
      })
    }
    return config
  },
}

export default nextConfig
