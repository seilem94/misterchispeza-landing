import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "images.unsplash.com" },
      ],
    },
  typedRoutes: true,
<<<<<<< HEAD
  optimizePackageImports: ["lucide-react", "framer-motion"],
=======
  // optimizePackageImports fue deprecado en Next.js 15
  // Next.js ahora optimiza automáticamente los imports
>>>>>>> 0a2b2ab (feat: add main components for the website including Hero, Gallery, Sectors, and Services sections)
};

export default nextConfig;
