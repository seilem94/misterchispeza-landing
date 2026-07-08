import type { Metadata } from 'next'
import { Container } from '@/app/components/ui'
import GraciasContent from './_components/GraciasContent'

export const metadata: Metadata = {
  title: "Gracias por contactarnos | Mr. Chispeza",
  description:
    "Hemos recibido tu mensaje. Te contactaremos a la brevedad.",
  robots: {
    index: false, // ✅ No indexar esta página
    follow: true,
  },    
};

export default function GraciasPage() {
   return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-4 py-16">
      <Container>
        <GraciasContent />
      </Container>
    </main>
  )
}