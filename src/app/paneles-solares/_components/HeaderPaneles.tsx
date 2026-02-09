'use client'
import React from 'react'
import Link from 'next/link'
import { Sun, Phone, ArrowLeft } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { Button } from '@/app/components/ui/Button'

const navItems = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto-paneles' },
]

export function HeaderPaneles() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo + Volver */}
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Volver</span>
          </Link>
          
          <div className="h-6 w-px bg-slate-300" />
          
          <Link href="/paneles-solares" className="flex items-center gap-2" aria-label="Paneles Solares">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white">
              <Sun className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-left leading-tight">
              <div className="text-sm font-bold tracking-wide text-slate-900">Paneles Solares</div>
              <div className="text-[10px] uppercase text-amber-600">Energía Renovable</div>
            </div>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden gap-6 text-sm font-medium md:flex" aria-label="Navegación paneles solares">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+56996774423" 
            className="hidden items-center gap-2 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors lg:flex"
          >
            <Phone className="h-4 w-4" />
            <span>+569 9677 4423</span>
          </a>
          <Button 
            size="sm" 
            href="#contacto-paneles"
            className="bg-linear-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
          >
            Cotizar
          </Button>
        </div>
      </Container>
    </header>
  )
}
