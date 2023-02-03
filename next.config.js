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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    })
    return config
}
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = nextConfig;
