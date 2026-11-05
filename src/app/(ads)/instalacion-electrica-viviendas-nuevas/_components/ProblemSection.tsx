import { CircleAlert } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import type { ViviendasNuevasProblemData } from '@/lib/constants/viviendas-nuevas'

export function ProblemSection({ data }: { data: ViviendasNuevasProblemData }) {
  return (
    <Section id={data.id} variant="accent" className="py-12 sm:py-16">
      <Container>
        <h2 className="max-w-3xl text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {data.items.map((item) => (
            <li key={item.id}>
              <Card className="h-full">
                <CircleAlert
                  className="mb-4 h-6 w-6 text-amber-700"
                  aria-hidden="true"
                />
                <p className="font-medium leading-relaxed text-slate-900">
                  {item.text}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
