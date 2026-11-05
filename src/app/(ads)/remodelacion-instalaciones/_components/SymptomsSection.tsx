import { CircleAlert } from 'lucide-react'
import { Card, Container, Section } from '@/app/components/ui'
import type { RemodelacionSymptomsData } from '@/lib/constants/remodelacion-antiguas'

export function SymptomsSection({ data }: { data: RemodelacionSymptomsData }) {
  return (
    <Section
      id={data.id}
      variant="accent"
      className="scroll-mt-6 py-12 sm:py-16"
    >
      <Container>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <li key={item.id}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <p className="font-medium leading-relaxed text-slate-900">
                    {item.text}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
