/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
        }
      }
    })
    return config
  }
}

module.exports = nextConfig