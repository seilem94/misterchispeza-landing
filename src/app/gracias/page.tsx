import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'

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
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" aria-hidden="true" />
            </div>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold text-amber-400">
            ¡Gracias por contactarnos!
          </h1>
          
          <p className="mb-6 text-lg text-slate-400">
            Hemos recibido tu mensaje correctamente. Nuestro equipo te contactará a la brevedad para atender tu solicitud.
          </p>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Tiempo de respuesta estimado: <strong>24-48 horas hábiles</strong>
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/" size="md">
                Volver al inicio
              </Button>
              <Button href="/#servicios" variant="outline" size="md">
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}