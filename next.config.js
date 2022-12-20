/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["github.com", "unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/tech3br/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/user/**",
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;