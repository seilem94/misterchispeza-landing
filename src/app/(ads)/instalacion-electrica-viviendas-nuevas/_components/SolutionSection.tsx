import { ClipboardCheck } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import type { ViviendasNuevasSolutionData } from '@/lib/constants/viviendas-nuevas'

export function SolutionSection({
  data,
}: {
  data: ViviendasNuevasSolutionData
}) {
  return (
    <Section id={data.id} className="py-12 sm:py-16">
      <Container>
        <Card
          className="gap-6 border-amber-200 bg-amber-50 md:flex-row md:items-start"
          padding="lg"
        >
          <ClipboardCheck
            className="h-10 w-10 shrink-0 text-amber-800"
            aria-hidden="true"
          />
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              {data.description}
            </p>
            <p className="mt-5 text-lg font-semibold text-slate-950">
              {data.statement}
            </p>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
