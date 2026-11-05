import type { Metadata } from 'next'
import { AdsVideoPlayer, Container, Section } from '@/app/components/ui'
import {
  contactData,
  heroData,
  includesData,
  includesSectionData,
  problemData,
  processData,
  processSectionData,
  solutionData,
  targetData,
  targetSectionData,
  videoData,
  viviendasNuevasMetadata,
  whatsappMessage,
} from '@/lib/constants/viviendas-nuevas'
import { ViviendasNuevasHero } from './_components/ViviendasNuevasHero'
import { ProblemSection } from './_components/ProblemSection'
import { SolutionSection } from './_components/SolutionSection'
import { ProcessSection } from './_components/ProcessSection'
import { IncludesSection } from './_components/IncludesSection'
import { TargetSection } from './_components/TargetSection'
import { CTAViviendasNuevas } from './_components/CTAViviendasNuevas'

export const metadata: Metadata = viviendasNuevasMetadata

export default function ViviendasNuevasPage() {
  return (
    <main className="min-h-screen">
      <ViviendasNuevasHero data={heroData} whatsappMessage={whatsappMessage} />
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
      <ProblemSection data={problemData} />
      <SolutionSection data={solutionData} />
      <ProcessSection data={processSectionData} steps={processData} />
      <IncludesSection data={includesSectionData} items={includesData} />
      <TargetSection data={targetSectionData} items={targetData} />
      <CTAViviendasNuevas
        data={contactData}
        whatsappMessage={whatsappMessage}
      />
    </main>
  )
}
