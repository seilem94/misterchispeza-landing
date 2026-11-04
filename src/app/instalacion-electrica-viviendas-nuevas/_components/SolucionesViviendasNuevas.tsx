'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  DraftingCompass,
  Building2,
  HardHat,
  Cpu,
  ShieldCheck,
  FileCheck2,
  Check,
  LucideIcon,
  Sparkles,
} from 'lucide-react'
import { Section, Container } from '@/app/components/ui'
import { solucionesViviendasNuevas } from '@/lib/constants/viviendas-nuevas'

const iconMap: Record<string, LucideIcon> = {
  DraftingCompass,
  Building2,
  HardHat,
  Cpu,
  ShieldCheck,
  FileCheck2,
}

export function SolucionesViviendasNuevas() {
  return (
    <Section id="soluciones" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span>Servicio Eléctrico Integral Llave en Mano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Soluciones para Construir con Respaldo y Cumplimiento Normativo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Acompañamos tu proyecto desde el primer bosquejo arquitectónico hasta que la
            distribuidora instala el medidor definitivo y energiza tu nueva vivienda.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solucionesViviendasNuevas.map((solucion, index) => {
            const Icon = iconMap[solucion.iconName] || ShieldCheck

            return (
              <motion.article
                key={solucion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-emerald-600 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {solucion.title}
                  </h3>

                  <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                    {solucion.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {solucion.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
