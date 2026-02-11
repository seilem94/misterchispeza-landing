import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
  images: {
    formats: ['image/avif', 'image/webp'], // Formatos modernos (50% más livianos)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Thumbnails
    minimumCacheTTL: 31536000, // Cache 1 año (60 * 60 * 24 * 365)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
>>>>>>> a2ded9c (feat: Optimización de carga de imagenes en Paneles Solares)



export default nextConfig
