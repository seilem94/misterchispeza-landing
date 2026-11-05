import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
} from '@/app/components/ui'
import type { RemodelacionFearsData } from '@/lib/constants/remodelacion-antiguas'

export function FearsSection({ data }: { data: RemodelacionFearsData }) {
  return (
    <Section id={data.id} className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
          {data.description}
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {data.items.map((item) => (
            <Card key={item.id}>
              <CardHeader title={item.question} />
              <CardContent className="text-base leading-relaxed text-slate-700">
                <p>{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
