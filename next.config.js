/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["img.clerk.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
