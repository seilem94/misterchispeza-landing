"use client"

import { motion } from "framer-motion"
import { Sun, Zap, TrendingDown, DollarSign } from "lucide-react"
import { Container } from "@/app/components/ui"
import { Button } from "@/app/components/ui/Button"

export function HeroPaneles() {
  return (
    <section className="relative overflow-hidden bg-slate-900/50 py-16 sm:py-20 lg:py-28 text-white">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid-pattern.jpg')] bg-auto bg-bottom" />
      </div>

      <Container className="relative z-10">
        {/* Content wrapper - Responsive max-width */}
        <div className="max-w-4xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-medium backdrop-blur"
          >
            <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-slate-900">Energía Solar Profesional</span>
          </motion.div>

          {/* Título - Mejor escalado responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="mb-4 sm:mb-6 lg:mb-8 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Instalación de{" "}
            <span className="text-amber-500">Paneles Solares</span>
          </motion.h1>

          {/* Descripción - Mejor legibilidad */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4,
            }}
            className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl font-medium text-slate-300 leading-relaxed"
          >
            Reduce tu factura eléctrica hasta un 90% con energía limpia y renovable
          </motion.p>

          {/* Features - Stack en mobile, inline en desktop */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6,
            }}
            className="mb-8 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row sm:flex-wrap justify-start gap-3 sm:gap-4 lg:gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Instalación Certificada
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Ahorro Garantizado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Desde $8MM + IVA
                <span className="hidden lg:inline"> — instalación tipo 8 kW</span>
              </span>
            </div>
          </motion.div>

          {/* Botones - Stack en mobile, row en sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.8,
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              href="#contacto-paneles"
              size="lg"
              className="w-full sm:w-auto bg-white/95 text-amber-600 hover:bg-amber-100 font-semibold"
            >
              Solicitar Cotización
            </Button>
            <Button
              href="#proceso"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-amber-500/90 border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold transition-colors"
            >
              Ver Proceso
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
    </section>
  )
}
