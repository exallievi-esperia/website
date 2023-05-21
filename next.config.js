/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      { hostname: "flowbite.s3.amazonaws.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "farm4.staticflickr.com" },
      { hostname: "farm6.staticflickr.com" },
    ],
  },
}

module.exports = nextConfig
