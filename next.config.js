/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: ['github.com', 'unsplash.com', 'images.unsplash.com'],
        formats: ['image/webp'],
        remotePatterns: [{
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/tech3br/**',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                pathname: '/user/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

module.exports = nextConfig;