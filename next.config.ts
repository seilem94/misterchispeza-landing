import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "images.unsplash.com" },
      ],
    },
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

};

export default nextConfig;
