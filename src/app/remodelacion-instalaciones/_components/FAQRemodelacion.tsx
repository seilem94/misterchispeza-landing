'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { faqsRemodelacion } from '@/lib/constants/remodelacion-antiguas'

export function FAQRemodelacion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3.5 py-1 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4 text-amber-600" />
            <span>Dudas Frecuentes</span>
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Preguntas Frecuentes sobre Remodelaciones Eléctricas
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Todo lo que necesitas saber antes de modernizar la red eléctrica de tu casa o departamento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsRemodelacion.map((faq, index) => {
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
                    className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-300 ${
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
