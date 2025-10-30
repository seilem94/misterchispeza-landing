import type { Metadata } from "next";
import { site } from "@/shared/config/site"
import Script from "next/script"
import "./globals.css";

export const metadata: Metadata = {
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // Search Console
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" >
     <head />
      <body className="antialiased">
        {/* GTM (Google Tag Manager) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            {/* Head script (migrated to next/script) */}
            <Script id="gtm-init" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
            </Script>
            {/* Body no-script fallback */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {children}
      </body>
    </html>
  )
}
