import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Disables the Next.js Image Optimization API
  },
};

export default nextConfig;
