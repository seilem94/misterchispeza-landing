import type { Metadata } from 'next'
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
      <ViviendasNuevasHero
        data={heroData}
        video={videoData}
        whatsappMessage={whatsappMessage}
      />
      <ProblemSection data={problemData} />
      <SolutionSection
        data={solutionData}
        ctaText={heroData.ctaText}
        whatsappMessage={whatsappMessage}
      />
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
