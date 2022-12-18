/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/tech3br/**",
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
