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
    ],
  },
};

module.exports = nextConfig;
