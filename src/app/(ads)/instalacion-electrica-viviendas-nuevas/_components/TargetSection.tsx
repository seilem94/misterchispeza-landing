import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
} from '@/app/components/ui'
import type {
  ViviendasNuevasItem,
  ViviendasNuevasSectionData,
} from '@/lib/constants/viviendas-nuevas'

interface TargetSectionProps {
  data: ViviendasNuevasSectionData
  items: readonly ViviendasNuevasItem[]
}

export function TargetSection({ data, items }: TargetSectionProps) {
  return (
    <Section id={data.id} variant="accent" className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.id}>
              <Card className="h-full">
                <CardHeader title={item.title} />
                <CardContent className="text-base leading-relaxed text-slate-700">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
