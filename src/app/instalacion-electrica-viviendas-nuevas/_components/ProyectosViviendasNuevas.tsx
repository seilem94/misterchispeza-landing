'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin, Calendar, CheckCircle2, Zap } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { proyectosObraNueva } from '@/lib/constants/viviendas-nuevas'

export function ProyectosViviendasNuevas() {
  return (
    <section id="proyectos" className="py-20 bg-slate-900 text-white">
      <Container>
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 text-emerald-300 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4 border border-emerald-500/30">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Experiencia Comprobada en Terreno</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proyectos Eléctricos en Parcelas y Viviendas Nuevas
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Obras ejecutadas desde los cimientos en valles, zonas rurales y sectores residenciales
            de la Región de Valparaíso con certificación SEC TE1 aprobada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyectosObraNueva.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-lg transition-all hover:border-emerald-500/50 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    width={proyecto.width}
                    height={proyecto.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    quality={85}
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-slate-950 shadow-md">
                    {proyecto.destacado}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between text-xs text-amber-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {proyecto.ubicacion}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {proyecto.año}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {proyecto.titulo}
                  </h3>

                  <div className="mb-2 text-xs font-semibold text-slate-400">
                    {proyecto.tipoTerreno}
                  </div>

                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-slate-700/60 px-2 py-0.5 text-xs font-medium text-emerald-300">
                    <Zap className="h-3 w-3 text-emerald-400" />
                    <span>Potencia: {proyecto.potencia}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {proyecto.alcance}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-700/60 p-4 px-6 bg-slate-800/80">
                <span className="text-xs text-emerald-300 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Declaración TE1 aprobada ante la SEC
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
