import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'

export function CTAPaneles() {
  return (
    <section className="bg-linear-to-br from-slate-900 to-slate-800 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            ¿Listo para generar tu propia energía?
          </h2>
          <p className="mb-8 text-xl text-slate-300">
            Obtén una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              href="#contacto-paneles" 
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600"
            >
              Solicitar Cotización Gratis
            </Button>
            <Button 
              href="tel:+56996774423" 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Llamar Ahora
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Respuesta entre 24 y 48 horas • Visita técnica gratuita
          </p>
        </div>
      </Container>
    </section>
  )
}
