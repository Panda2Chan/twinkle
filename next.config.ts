import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['apod.nasa.gov'], // 添加允许加载的域名
  },
};

export default nextConfig;
