'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Flame,
  AlertTriangle,
  ZapOff,
  Activity,
  ShieldAlert,
  LightbulbOff,
  AlertCircle,
  LucideIcon,
} from 'lucide-react'
import { Section, Container, Card, CardHeader, CardContent } from '@/app/components/ui'
import { senalesAlerta, WarningSign } from '@/lib/constants/remodelacion-antiguas'

const iconMap: Record<string, LucideIcon> = {
  Flame,
  AlertTriangle,
  ZapOff,
  Activity,
  ShieldAlert,
  LightbulbOff,
}

const riskBadges: Record<
  WarningSign['riskLevel'],
  { label: string; bg: string; text: string; border: string }
> = {
  critico: {
    label: 'Riesgo Crítico de Fuego',
    bg: 'bg-red-500/10',
    text: 'text-red-700',
    border: 'border-red-200',
  },
  alto: {
    label: 'Riesgo Alto de Sobrecarga',
    bg: 'bg-orange-500/10',
    text: 'text-orange-700',
    border: 'border-orange-200',
  },
  moderado: {
    label: 'Riesgo Moderado',
    bg: 'bg-amber-500/10',
    text: 'text-amber-700',
    border: 'border-amber-200',
  },
}

export function SenalesAlerta() {
  return (
    <Section id="riesgos" className="py-20 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs sm:text-sm font-semibold mb-4">
            <AlertCircle className="h-4 w-4" />
            <span>¿Tu casa tiene más de 20 años?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Señales de Alerta en Instalaciones Eléctricas Antiguas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Más del 60% de los incendios domésticos en Chile tienen origen eléctrico.
            Identifica a tiempo los síntomas de una instalación que ha superado su vida útil.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {senalesAlerta.map((senal, index) => {
            const Icon = iconMap[senal.iconName] || AlertTriangle
            const badge = riskBadges[senal.riskLevel]

            return (
              <motion.div
                key={senal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <Card hover className="h-full flex flex-col justify-between border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between p-6 pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    <CardHeader
                      title={senal.title}
                      className="px-6 pt-2 pb-1 text-lg font-bold text-slate-900"
                    />

                    <div className="px-6 pb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {senal.subtitle}
                    </div>

                    <CardContent className="px-6 pb-6 pt-1">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {senal.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Banner de tranquilidad */}
        <div className="mt-12 rounded-2xl bg-amber-500/10 border border-amber-300 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              ¿Reconoces uno o más de estos síntomas en tu hogar?
            </h3>
            <p className="text-sm text-slate-700">
              No esperes un amago de incendio o un corte imprevisto. Realizamos diagnósticos técnicos con instrumental de medición en toda la Región de Valparaíso.
            </p>
          </div>
          <a
            href="#contacto-remodelacion"
            className="shrink-0 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Agendar Evaluación
          </a>
        </div>
      </Container>
    </Section>
  )
}
