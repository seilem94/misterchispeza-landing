'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { faqsViviendasNuevas } from '@/lib/constants/viviendas-nuevas'

export function FAQViviendasNuevas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4 text-emerald-600" />
            <span>Dudas sobre Conexión y Terrenos</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Preguntas Frecuentes sobre Instalaciones Nuevas y Parcelas
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Respuestas claras para resolver la electrificación de tu nuevo hogar o parcela.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsViviendasNuevas.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.respuesta}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
