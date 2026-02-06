
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import { panelesSolares } from "@/lib/constants/paneles-solares";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Mr Chispeza";
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE ?? "/og.jpg";

const PAGE_PATH = "/paneles-solares";
const PAGE_URL = SITE_URL ? `${SITE_URL}${PAGE_PATH}` : undefined;

export const metadata: Metadata = {
  title: "Paneles solares",
  description:
    "Instalación y mantenimiento de paneles solares. Soluciones para hogares y empresas.",
  alternates: PAGE_URL ? { canonical: PAGE_URL } : undefined,
  openGraph: {
    title: `Paneles solares | ${SITE_NAME}`,
    description:
      "Instalación y mantenimiento de paneles solares. Soluciones para hogares y empresas.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Paneles solares" }],
  },
};


export default function PanelesSolaresPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Paneles Solares</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Instalación de sistemas solares para hogares y empresas.
          Te orientamos para elegir la mejor solución según tu consumo.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/paneles-solares#servicios-paneles"
            className="rounded-xl bg-orange-600 px-4 py-2 font-medium text-white"
          >
            Ver servicios
          </Link>
          <Link
            href="/paneles-solares#contacto-paneles"
            className="rounded-xl border px-4 py-2 font-medium"
          >
            Cotizar ahora
          </Link>
        </div>
      </header>

      {/* SUB-SERVICIOS */}
      <section id="servicios-paneles" className="mt-12">
        <h2 className="text-2xl font-semibold">Servicios de Paneles</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {panelesSolares.map((s) => (
            <article key={s.slug} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.shortDescription}</p>

              <div className="mt-4">
                <Link
                  href={`/paneles-solares/${s.slug}`}
                  className="text-orange-600 font-medium hover:underline"
                >
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto-paneles" className="mt-14 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">Cotiza tu proyecto</h2>
        <p className="mt-2 text-muted-foreground">
          Completa el formulario y te contactamos. Indica tu comuna y tu consumo aproximado.
        </p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
