/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/used-vehicles',
        destination: '/car-repairing',
        permanent: true,
      },
      {
        source: '/transport-support',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hair-beauty',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fashion',
        destination: '/',
        permanent: true,
      },
      {
        source: '/household',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/car-repairing',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
