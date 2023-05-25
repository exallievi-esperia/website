/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "via.placeholder.com" }],
    minimumCacheTTL: 15552000,
  },
}

module.exports = nextConfig
