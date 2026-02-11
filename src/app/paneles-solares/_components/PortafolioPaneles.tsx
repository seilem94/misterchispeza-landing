import { Container } from '@/app/components/ui'
import Image from 'next/image'
import { proyectosPaneles } from '@/lib/constants/paneles-solares'

export function PortafolioPaneles() {
  return (
    <section id="portafolio" className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Proyectos Realizados
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Instalaciones solares en Valparaíso y la región
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyectosPaneles.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={proyecto.imagen}
                  alt={`Instalación de paneles solares ${proyecto.capacidad} en ${proyecto.ubicacion}`}
                  width={proyecto.width}
                  height={proyecto.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  priority={index === 0}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                />
                <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                  {proyecto.capacidad}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {proyecto.titulo}
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  {proyecto.ubicacion}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Ahorro:</span>{' '}
                    <strong className="text-green-600">{proyecto.ahorro}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Año:</span>{' '}
                    <strong className="text-slate-900">{proyecto.año}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
