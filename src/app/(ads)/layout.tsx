import type { ReactNode } from 'react'
import Image from 'next/image'
import { Container } from '@/app/components/ui'
import { WhatsAppWidget } from '@/app/components/WhatsAppWidget'
import { adsLayoutContent } from '@/lib/constants/ads'

export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-slate-200 bg-white">
        <Container className="flex justify-center py-4">
          <Image
            src={adsLayoutContent.logo.src}
            alt={adsLayoutContent.logo.alt}
            width={adsLayoutContent.logo.width}
            height={adsLayoutContent.logo.height}
            sizes="176px"
            className="h-auto w-44"
          />
        </Container>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-slate-200 bg-white">
        <Container className="py-6 text-center text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} {adsLayoutContent.copyright.holder}.{' '}
            {adsLayoutContent.copyright.rights}
          </p>
        </Container>
      </footer>

      <WhatsAppWidget />
    </div>
  )
}
