import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPanelSolarServiceBySlug, panelesSolares } from "@/lib/constants/paneles-solares";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Mr Chispeza";
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE ?? "/og.jpg";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return panelesSolares.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getPanelSolarServiceBySlug(params.slug);

  if (!item) return {};

  const path = `/paneles-solares/${item.slug}`;
  const url = SITE_URL ? `${SITE_URL}${path}` : undefined;

  return {
    title: item.title,
    description: item.shortDescription,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${item.title} | ${SITE_NAME}`,
      description: item.shortDescription,
      url,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.title }],
    },
  };
}

export default function PanelesSolaresDetallePage({ params }: Props) {
  const item = getPanelSolarServiceBySlug(params.slug);
  if (!item) return notFound();

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/paneles-solares"
        className="text-sm font-medium text-orange-600 hover:underline"
      >
        ← Volver a Paneles Solares
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">{item.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{item.longDescription}</p>

      {item.benefits?.length ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Beneficios</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {item.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {item.faqs?.length ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-4">
            {item.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border p-5">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl border p-6">
        <h3 className="text-xl font-semibold">Cotiza este servicio</h3>
        <p className="mt-2 text-muted-foreground">
          Escríbenos y te orientamos según tu caso.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/#contacto"
            className="rounded-xl bg-orange-600 px-4 py-2 font-medium text-white"
          >
            Ir a Contacto
          </Link>
          <Link
            href="/paneles-solares"
            className="rounded-xl border px-4 py-2 font-medium"
          >
            Ver todos los servicios de Paneles
          </Link>
        </div>
      </section>
    </main>
  );
}
