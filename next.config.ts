import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
  experimental: {
    typedRoutes: false,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
