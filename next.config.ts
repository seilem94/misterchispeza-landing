import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  typedRoutes: true,

  async redirects() {
    return [
      {
        source: '/proyectos-nuevos',
        destination: '/instalacion-electrica-viviendas-nuevas',
        permanent: false,
      },
      {
        source: '/instalacion-electrica-casa-nueva',
        destination: '/instalacion-electrica-viviendas-nuevas',
        permanent: false,
      },
      {
        source: '/remodelacion-instalaciones-antiguas',
        destination: '/remodelacion-instalaciones',
        permanent: false,
      },
      {
        source: '/remodelacion-electrica',
        destination: '/remodelacion-instalaciones',
        permanent: false,
      },
    ]
  },

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
        hostname: 'gapghs72pvdn9hax.public.blob.vercel-storage.com',
        port: '',
        pathname: '/remodelacion/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'gapghs72pvdn9hax.public.blob.vercel-storage.com',
        port: '',
        pathname: '/proyectos-nuevos/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
