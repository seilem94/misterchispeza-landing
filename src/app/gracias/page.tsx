export const metadata = {
  title: "Gracias por contactarnos",
  description: "Hemos recibido tu mensaje. Te responderemos pronto.",
}

export default function GraciasPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">¡Gracias!</h1>
      <p className="mt-3 text-slate-600">
        Hemos recibido tu mensaje y te responderemos a la brevedad.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex rounded-xl border px-5 py-3 font-medium hover:bg-gray-50"
      >
        Volver al inicio
      </a>
    </main>
  )
}
