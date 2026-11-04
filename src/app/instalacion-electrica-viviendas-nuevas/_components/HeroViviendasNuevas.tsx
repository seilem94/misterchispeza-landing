'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Cable, CheckCircle2, ArrowRight, TreePine } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'

export function HeroViviendasNuevas() {
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur"
          >
            <TreePine className="h-4 w-4 text-emerald-400" />
            <span>Construcción, Parcelas & Proyectos desde Cero</span>
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
            Instalación Eléctrica para{' '}
            <span className="bg-linear-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Viviendas Nuevas y Parcelas
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
            Ingeniería y ejecución eléctrica integral para casas nuevas, parcelas de agrado,
            cabañas y loteos rurales. Resolvemos empalmes a gran distancia, zanjas subterráneas,
            alimentadores sin caídas de tensión, bombas de pozo y tramitación completa SEC TE1
            ante la distribuidora.
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
              <Cable className="h-4 w-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Empalmes Aéreos y Subterráneos
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur border border-white/10">
              <Compass className="h-4 w-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Cero Caída de Tensión en Metrajes Largos
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Inscripción TE1 Aprobada por SEC
              </span>
            </div>
          </motion.div>

          {/* Botones */}
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
              href="#contacto-viviendas-nuevas"
              size="lg"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25"
            >
              Cotizar Proyecto en Parcela / Obra
            </Button>
            <Button
              href="#desafios-rurales"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold flex items-center justify-center gap-2"
            >
              <span>Ver Soluciones para Terrenos Rurales</span>
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
