/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.hashnode.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
