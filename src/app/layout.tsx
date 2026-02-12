import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Mejor rendimiento
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Env (server-side en layout)
 * - No uses NEXT_PUBLIC aquí salvo que lo necesites en cliente.
 * - Igual, GA ID se usa en <Script> (cliente) => debe ser NEXT_PUBLIC_*
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "HHL Electricidad";
const SITE_TAGLINE =
  process.env.NEXT_PUBLIC_SITE_TAGLINE ?? "Servicios Eléctricos y Electrónicos";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Servicios de instalaciones eléctricas y electrónicas.";
const SITE_LOCALE = process.env.NEXT_PUBLIC_SITE_LOCALE ?? "es_CL";
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE ?? "/logo-final.png"; // puede ser ruta relativa o URL absoluta

const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""; // ej: G-XXXXXXXXXX

const metadataBase = SITE_URL ? new URL(SITE_URL) : undefined;

export const metadata: Metadata = {
  metadataBase,

  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,
  keywords: [
    "electricista",
    "servicios eléctricos",
    "Valparaíso",
    "instalaciones eléctricas",
    "paneles solares",
    "mantenimiento eléctrico",
    "proyectos eléctricos",
    "Chile",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: SITE_URL ? { canonical: SITE_URL } : undefined,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL || undefined,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        // Si OG_IMAGE es relativo y existe metadataBase, Next lo vuelve absoluto
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Servicios Eléctricos`,
      },
    ],
  },

  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff9800",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
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
                  anonymize_ip: true,
                  page_path: window.location.pathname
              });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}