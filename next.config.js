/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media1.giphy.com',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
