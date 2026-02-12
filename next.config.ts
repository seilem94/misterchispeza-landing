import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  typedRoutes: true,
<<<<<<< HEAD
<<<<<<< HEAD
  optimizePackageImports: ["lucide-react", "framer-motion"],
=======
  // optimizePackageImports fue deprecado en Next.js 15
  // Next.js ahora optimiza automáticamente los imports
>>>>>>> 0a2b2ab (feat: add main components for the website including Hero, Gallery, Sectors, and Services sections)
=======
>>>>>>> 88cf58b (feat: add panel solar services pages and constants)
};
=======
  experimental: {
    typedRoutes: true,
  },
  
=======

>>>>>>> fa1d53a (correccion de warning vercel)
  // ✅ Configuración optimizada de imágenes
=======
  typedRoutes: true,

>>>>>>> a75748b (feat: enhance component responsiveness and styling; update image configurations and translations)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ NUEVO: Configurar qualities permitidos
    qualities: [70, 75, 80, 85, 90, 95, 100],

    // ✅ Dominios externos permitidos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
>>>>>>> a2ded9c (feat: Optimización de carga de imagenes en Paneles Solares)

export default nextConfig
