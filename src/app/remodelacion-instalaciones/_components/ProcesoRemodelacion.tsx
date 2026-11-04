'use client'

import React from 'react'
import {
  Search,
  Calculator,
  Wrench,
  CheckCircle2,
  Award,
  Clock,
  Check,
  LucideIcon,
} from 'lucide-react'
import { Container, Button } from '@/app/components/ui'
import { pasosRemodelacion } from '@/lib/constants/remodelacion-antiguas'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Calculator,
  Wrench,
  CheckCircle2,
  Award,
}

export function ProcesoRemodelacion() {
  return (
    <section id="proceso" className="bg-slate-50 py-20">
      <Container>
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4">
            <Clock className="h-4 w-4 text-amber-600" />
            <span>Planificación por Etapas</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            ¿Cómo Trabajamos la Remodelación de tu Casa?
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
            Un método ordenado, limpio y sin sorpresas. Cuidamos la integridad de tu vivienda
            y organizamos las faenas para minimizar cualquier corte de suministro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora desktop */}
          <div
            className="absolute left-8 top-0 hidden h-full w-0.5 bg-amber-200 md:block"
            style={{ left: '2rem' }}
          />

          <div className="space-y-8">
            {pasosRemodelacion.map((paso) => {
              const Icon = iconMap[paso.iconName] || Wrench

              return (
                <div
                  key={paso.numero}
                  className="relative flex flex-col gap-6 md:flex-row md:items-start"
                >
                  {/* Número e icono */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                        Etapa {paso.numero}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5 text-amber-600" />
                        {paso.duracion}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {paso.titulo}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {paso.descripcion}
                    </p>

                    <div className="border-t border-slate-100 pt-3">
                      <div className="flex flex-wrap gap-2">
                        {paso.entregables.map((entregable, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            <Check className="h-3 w-3 text-emerald-600" />
                            {entregable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-sm sm:text-base font-medium text-slate-700">
            Tiempo estimado de recableado residencial completo:{' '}
            <strong className="text-amber-600 font-bold">2 a 5 días hábiles</strong> según metraje.
          </p>
          <Button
            href="#contacto-remodelacion"
            size="lg"
            className="bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
          >
            Solicitar Evaluación de mi Casa
          </Button>
        </div>
      </Container>
    </section>
  )
}
