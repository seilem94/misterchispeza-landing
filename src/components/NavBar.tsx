"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import type { Route } from "next"

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  // “Contáctenos” va como CTA en desktop y dentro del menú móvil (abajo)
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  // Evita scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-black" aria-hidden />
            <span className="font-semibold">Mr Chispeza</span>
          </Link>
        </div>

        {/* Links en desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA en desktop (se oculta en móvil para liberar espacio) */}
        <div className="hidden md:flex">
          <Link
            href="/#contacto"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Contáctenos
          </Link>
        </div>

        {/* Botón hamburger (solo móvil) */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 outline-none ring-0 hover:bg-gray-100"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Menú móvil (full-screen overlay) */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="inline-block h-8 w-8 rounded-lg bg-black" aria-hidden />
            <span className="font-semibold">Mr Chispeza</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <div className="px-4 py-4">
          <ul className="space-y-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA dentro del menú móvil */}
          <div className="mt-6 border-t pt-6">
            <Link
              href="/#contacto"
              className="block w-full rounded-xl border px-4 py-3 text-center font-medium hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
