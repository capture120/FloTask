/** @type {import('next').NextConfig} */
// const nextConfig = {}

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:19006/:path*', // Proxy to Backend
      },
    ]
  },
}

