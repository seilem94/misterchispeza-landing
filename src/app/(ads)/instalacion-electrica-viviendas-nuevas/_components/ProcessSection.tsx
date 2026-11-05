import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
} from '@/app/components/ui'
import type {
  ViviendasNuevasProcessStep,
  ViviendasNuevasSectionData,
} from '@/lib/constants/viviendas-nuevas'

interface ProcessSectionProps {
  data: ViviendasNuevasSectionData
  steps: readonly ViviendasNuevasProcessStep[]
}

export function ProcessSection({ data, steps }: ProcessSectionProps) {
  return (
    <Section id={data.id} variant="accent" className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <ol className="mt-8 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.id}>
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 font-bold text-slate-950"
                >
                  {step.number}
                </span>
                <CardHeader title={step.title} />
                <CardContent className="text-base leading-relaxed text-slate-700">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
