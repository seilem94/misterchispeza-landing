import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site, siteSocialImage } from '@/shared/config/site'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // ✅ Mejor rendimiento
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

/**
 * Env (server-side en layout)
 * - No uses NEXT_PUBLIC aquí salvo que lo necesites en cliente.
 * - Igual, GA ID se usa en <Script> (cliente) => debe ser NEXT_PUBLIC_*
 */
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? ''
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '' // ej: G-XXXXXXXXXX

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },

  description: site.description,
  keywords: [
    'electricista',
    'servicios eléctricos',
    'Valparaíso',
    'instalaciones eléctricas',
    'paneles solares',
    'mantenimiento eléctrico',
    'proyectos eléctricos',
    'Chile',
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ ...siteSocialImage, type: 'image/webp' }],
  },

  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      {
        url: '/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: 'default',
  },

  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ff9800',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`relative ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* GA4 (solo si hay ID) */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { 
                  anonymize_ip: true
              });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
