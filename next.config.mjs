/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  turbopack: {
    root: process.cwd(),
  },

  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;