/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['http://localhost:3000', 'images.unsplash.com'],
  },
  
}


module.exports = nextConfig
