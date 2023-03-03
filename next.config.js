/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      { hostname: "flowbite.s3.amazonaws.com" },
    ],
  },
};

module.exports = nextConfig;
