import { Container } from '@/app/components/ui'
import { Zap, TrendingDown, Leaf, Shield, Clock, Award } from 'lucide-react'

const beneficios = [
  {
    icon: TrendingDown,
    title: 'Reduce tu Factura',
    description: 'Ahorra hasta un 90% en tu cuenta de electricidad mensual',
  },
  {
    icon: Leaf,
    title: 'Energía Limpia',
    description: 'Contribuye al medio ambiente con energía 100% renovable',
  },
  {
    icon: Zap,
    title: 'Independencia Energética',
    description: 'Genera tu propia electricidad y protégete de alzas',
  },
  {
    icon: Shield,
    title: 'Garantía Extendida',
    description: 'Paneles con 25 años de garantía de fabricante',
  },
  {
    icon: Clock,
    title: 'Instalación Rápida',
    description: 'Sistema operativo en 5-7 días hábiles',
  },
  {
    icon: Award,
    title: 'Certificación SEC',
    description: 'Instalaciones certificadas según normativa chilena',
  },
]

export function BeneficiosPaneles() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12 text-center ">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            ¿Por qué instalar paneles solares?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Invierte en tu futuro energético con tecnología limpia y eficiente
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {beneficios.map((beneficio) => {
            const Icon = beneficio.icon
            return (
              <div
                key={beneficio.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-amber-400 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {beneficio.title}
                </h3>
                <p className="text-slate-600">{beneficio.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
