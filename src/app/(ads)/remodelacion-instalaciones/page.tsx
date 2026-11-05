import type { Metadata } from 'next'
import { AdsVideoPlayer, Container, Section } from '@/app/components/ui'
import { RemodelacionHero } from './_components/RemodelacionHero'
import { SymptomsSection } from './_components/SymptomsSection'
import { FearsSection } from './_components/FearsSection'
import { ProcessSection } from './_components/ProcessSection'
import { IncludesSection } from './_components/IncludesSection'
import { CTARemodelacion } from './_components/CTARemodelacion'
import {
  contactData,
  fearsData,
  heroData,
  includesData,
  includesSectionData,
  processData,
  processSectionData,
  remodelacionMetadata,
  symptomsData,
  videoData,
  whatsappMessage,
} from '@/lib/constants/remodelacion-antiguas'

export const metadata: Metadata = remodelacionMetadata

export default function RemodelacionInstalacionesPage() {
  return (
    <main className="min-h-screen">
      <RemodelacionHero data={heroData} whatsappMessage={whatsappMessage} />
      <Section id={videoData.id} className="py-12 sm:py-16">
        <Container size="md">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            {videoData.title}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
            {videoData.description}
          </p>
          <figure className="mt-6">
            <AdsVideoPlayer
              src={videoData.src}
              poster={videoData.poster}
              label={videoData.label}
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
              {videoData.pendingNote}
            </figcaption>
          </figure>
        </Container>
      </Section>
      <SymptomsSection data={symptomsData} />
      <FearsSection data={fearsData} />
      <ProcessSection data={processSectionData} steps={processData} />
      <IncludesSection data={includesSectionData} items={includesData} />
      <CTARemodelacion data={contactData} whatsappMessage={whatsappMessage} />
    </main>
  )
}
