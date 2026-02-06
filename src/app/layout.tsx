import type { Metadata } from "next";
<<<<<<< HEAD
import { site } from "@/shared/config/site"
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

=======
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
>>>>>>> 88cf58b (feat: add panel solar services pages and constants)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Env (server-side en layout)
 * - No uses NEXT_PUBLIC aquí salvo que lo necesites en cliente.
 * - Igual, GA ID se usa en <Script> (cliente) => debe ser NEXT_PUBLIC_*
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "HHL Electricidad";
const SITE_TAGLINE = process.env.NEXT_PUBLIC_SITE_TAGLINE ?? "Servicios Eléctricos";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Servicios de instalaciones eléctricas y electrónicas.";
const SITE_LOCALE = process.env.NEXT_PUBLIC_SITE_LOCALE ?? "es_CL";
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE ?? "/og.jpg"; // puede ser ruta relativa o URL absoluta

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""; // ej: G-XXXXXXXXXX

const metadataBase = SITE_URL ? new URL(SITE_URL) : undefined;

export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website", siteName: site.name, url: site.url, locale: site.locale,
    images: [{ 
      url: site.ogImage, 
      width: 1200, 
      height: 630 
    }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
    verification: {
    google: "ZEuHaCA9yEXiCfRudpSLX-_WZwNKoyxS0eLCWR7VoZY",
  },
}
=======
  metadataBase,

  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  alternates: SITE_URL ? { canonical: SITE_URL } : undefined,

  robots: { index: true, follow: true },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL || undefined,
    locale: SITE_LOCALE,
    images: [
      {
        // Si OG_IMAGE es relativo y existe metadataBase, Next lo vuelve absoluto
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
};
>>>>>>> 88cf58b (feat: add panel solar services pages and constants)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <html lang="es" >
      <body 
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* 📄 Contenido principal */}
        {/* <main id="contenido">{children}</main> */}

        {/* GTM (Google Tag Manager) */}
        {/* {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            {/* Head script (migrated to next/script) */}
            {/* <Script id="gtm-init" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
            </Script> */}
            {/* Body no-script fallback */}
            {/* <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )} */}
{/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9K1TQYW9D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y9K1TQYW9D');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
=======
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
                gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
<<<<<<< HEAD
>>>>>>> 0a2b2ab (feat: add main components for the website including Hero, Gallery, Sectors, and Services sections)
=======
>>>>>>> 88cf58b (feat: add panel solar services pages and constants)
