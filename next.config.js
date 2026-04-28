/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['lucide-react', 'framer-motion'],
}

export default nextConfig;
