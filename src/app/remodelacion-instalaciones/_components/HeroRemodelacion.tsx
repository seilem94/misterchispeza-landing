'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Flame, CheckCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'

export function HeroRemodelacion() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-28 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0 bg-auto bg-bottom"
          style={{ backgroundImage: "url('/grid-pattern.webp')" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur"
          >
            <ShieldAlert className="h-4 w-4 text-amber-400" />
            <span>Seguridad & Renovación Eléctrica para Casas Antiguas</span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="mb-4 sm:mb-6 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Remodelación de{' '}
            <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Instalaciones Antiguas
            </span>
          </motion.h1>

          {/* Bajada */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.35,
            }}
            className="mb-8 text-base sm:text-lg lg:text-xl font-normal text-slate-300 leading-relaxed max-w-3xl"
          >
            Moderniza el sistema eléctrico de tu hogar. Reemplazamos cables de tela y plomo,
            instalamos tableros modernos con disyuntores salvavidas, aumentamos la potencia y
            regularizamos con certificación SEC TE1 para proteger a tu familia y tu patrimonio.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
            className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-6"
          >
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur border border-white/10">
              <Flame className="h-4 w-4 text-orange-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Eliminamos Riesgo de Incendio
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur border border-white/10">
              <Zap className="h-4 w-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Cables Libres de Halógenos
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur border border-white/10">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Certificación SEC TE1 Garantizada
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.65,
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              href="#contacto-remodelacion"
              size="lg"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25"
            >
              Solicitar Diagnóstico en Terreno
            </Button>
            <Button
              href="#riesgos"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold flex items-center justify-center gap-2"
            >
              <span>Ver Señales de Alerta</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-slate-950 to-transparent" />
    </section>
  )
}
