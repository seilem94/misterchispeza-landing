import { Container } from "@/app/components/ui";
import { Button } from "@/app/components/ui/Button";
import { Sun, Zap, TrendingDown } from "lucide-react";

export function HeroPaneles() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-amber-500 via-orange-400 to-amber-300 py-20 text-white">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
      </div>

      <Container className="relative z-10">
        {/* ✅ CAMBIA: mx-auto max-w-4xl text-center → max-w-4xl text-left */}
        <div className="max-w-4xl text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sun className="h-4 w-4" />
            Energía Solar Profesional
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Instalación de Paneles Solares
          </h1>

          <p className="mb-8 text-xl text-amber-50 md:text-2xl">
            Reduce tu factura eléctrica hasta un 90% con energía limpia y renovable
          </p>

          {/* ✅ CAMBIA: justify-center → justify-start */}
          <div className="mb-12 flex flex-wrap justify-start gap-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-medium">Instalación Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <TrendingDown className="h-5 w-5" />
              </div>
              <span className="font-medium">Ahorro Garantizado</span>
            </div>
          </div>

          {/* ✅ CAMBIA: sm:justify-center → sm:justify-start */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
            <Button 
              href="#contacto-paneles" 
              size="lg"
              className="bg-white text-amber-600 hover:bg-amber-100"
            >
              Solicitar Cotización
            </Button>
            <Button 
              href="#proceso" 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Ver Proceso
            </Button>
          </div>
        </div>
      </Container>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
    </section>
  )
}
