  import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Gracias por contactarnos | Mr. Chispeza",
  description:
    "Hemos recibido tu mensaje correctamente. Te responderemos a la brevedad.",
}

export default function GraciasPage() {
  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        {/* Ícono de confirmación */}
        <CheckCircle className="mx-auto h-16 w-16 text-amber-400 mb-6" aria-hidden />

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-400">
          ¡Gracias por tu mensaje!
        </h1>

        {/* Descripción */}
        <p className="mt-4 text-slate-300 leading-relaxed">
          Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo
          lo antes posible.
        </p>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-amber-400 px-6 py-3 font-semibold text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition"
          >
            Volver al inicio
          </Link>

          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition"
          >
            Enviar otro mensaje
          </Link>
        </div>
      </div>
    </section>
  )
}
