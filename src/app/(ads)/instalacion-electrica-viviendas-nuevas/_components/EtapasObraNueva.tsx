'use client'

import React from 'react'
import {
  MapPin,
  FileText,
  Hammer,
  Wrench,
  Award,
  Clock,
  Check,
  LucideIcon,
  Layers,
} from 'lucide-react'
import { Container, Button } from '@/app/components/ui'
import { etapasObraNueva } from '@/lib/constants/viviendas-nuevas'

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  FileText,
  Hammer,
  Wrench,
  Award,
}

export function EtapasObraNueva() {
  return (
    <section id="etapas" className="bg-slate-50 py-20">
      <Container>
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4">
            <Layers className="h-4 w-4 text-emerald-600" />
            <span>Coordinación de Obra</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Etapas de Ejecución Eléctrica en Viviendas Nuevas
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
            Trabajamos en perfecta sincronía con tu constructor o arquitecto, asegurando que las
            canalizaciones queden listas en el momento justo sin retrasar la obra civil.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora desktop */}
          <div
            className="absolute left-8 top-0 hidden h-full w-0.5 bg-emerald-200 md:block"
            style={{ left: '2rem' }}
          />

          <div className="space-y-8">
            {etapasObraNueva.map((etapa) => {
              const Icon = iconMap[etapa.iconName] || Hammer

              return (
                <div
                  key={etapa.numero}
                  className="relative flex flex-col gap-6 md:flex-row md:items-start"
                >
                  {/* Número e icono */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-emerald-600 text-white shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                          Etapa {etapa.numero}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {etapa.fase}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5 text-amber-600" />
                        {etapa.duracion}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {etapa.descripcion}
                    </p>

                    <div className="border-t border-slate-100 pt-3">
                      <div className="flex flex-wrap gap-2">
                        {etapa.hitos.map((hito, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-900 border border-emerald-100"
                          >
                            <Check className="h-3 w-3 text-emerald-600" />
                            {hito}
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
            ¿Vas a comenzar a construir pronto? Te recomendamos coordinar la visita técnica antes de hormigonar el radier.
          </p>
          <Button
            href="#contacto-viviendas-nuevas"
            size="lg"
            className="bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
          >
            Coordinar con un Instalador SEC
          </Button>
        </div>
      </Container>
    </section>
  )
}
