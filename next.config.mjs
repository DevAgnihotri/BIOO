/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS images
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP images (less secure but more flexible)
      },
    ],
  },
};

export default nextConfig;
