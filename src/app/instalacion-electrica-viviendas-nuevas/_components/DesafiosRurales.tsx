'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  Zap,
  Mountain,
  Droplets,
  ShieldPlus,
  LucideIcon,
  CheckCircle,
  HelpCircle,
} from 'lucide-react'
import { Section, Container, Card, CardHeader, CardContent } from '@/app/components/ui'
import { desafiosRurales } from '@/lib/constants/viviendas-nuevas'

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Zap,
  Mountain,
  Droplets,
  ShieldPlus,
}

export function DesafiosRurales() {
  return (
    <Section id="desafios-rurales" className="py-20 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4 text-emerald-600" />
            <span>¿Construyendo en parcela o sector rural?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Los Desafíos Eléctricos de Construir en Terrenos Rurales y Loteos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Una casa en el campo o en una parcela no funciona como un departamento en la ciudad.
            Requiere cálculos especiales para no perder fuerza en los cables y proteger bombas y equipos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {desafiosRurales.map((desafio, index) => {
            const Icon = iconMap[desafio.iconName] || Zap

            return (
              <motion.div
                key={desafio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <Card hover className="h-full flex flex-col justify-between border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div className="p-6 pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-4">
                        <Icon className="h-6 w-6" />
                      </div>

                      <CardHeader
                        title={desafio.title}
                        className="p-0 pb-1 text-lg font-bold text-slate-900"
                      />

                      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                        {desafio.subtitle}
                      </div>

                      <CardContent className="p-0">
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {desafio.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 bg-emerald-50/50 p-4 px-6 rounded-b-2xl">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <p className="text-xs sm:text-sm font-medium text-emerald-950">
                        <strong className="text-emerald-800">Nuestra solución:</strong> {desafio.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Card resumen de experiencia en terreno */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-emerald-900 to-slate-900 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              ¿Tienes dudas sobre la distancia a la red o el tipo de empalme?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Realizamos inspecciones preliminares de terreno en Casablanca, Limache, Olmué, Quillota, Puchuncaví, Curacaví y toda la Región de Valparaíso para medir distancias y cotizar la solución óptima.
            </p>
          </div>
          <a
            href="#contacto-viviendas-nuevas"
            className="shrink-0 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg"
          >
            Solicitar Factibilidad en Terreno
          </a>
        </div>
      </Container>
    </Section>
  )
}
