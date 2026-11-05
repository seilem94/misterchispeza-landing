import { CheckCircle2 } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
} from '@/app/components/ui'
import type {
  RemodelacionIncludedItem,
  RemodelacionIncludesData,
} from '@/lib/constants/remodelacion-antiguas'

interface IncludesSectionProps {
  data: RemodelacionIncludesData
  items: readonly RemodelacionIncludedItem[]
}

export function IncludesSection({ data, items }: IncludesSectionProps) {
  return (
    <Section id={data.id} className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <Card className="h-full">
                <CardHeader
                  title={item.title}
                  icon={
                    <CheckCircle2
                      className="h-5 w-5 text-amber-800"
                      aria-hidden="true"
                    />
                  }
                />
                <CardContent className="text-base leading-relaxed text-slate-700">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
          {data.scopeNote}
        </p>
      </Container>
    </Section>
  )
}
