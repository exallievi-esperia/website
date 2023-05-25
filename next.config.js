/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "via.placeholder.com" }],
  },
}

module.exports = nextConfig
