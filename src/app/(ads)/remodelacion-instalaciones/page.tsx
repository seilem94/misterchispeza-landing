import type { Metadata } from 'next'
import { AdsVideoSection } from '@/app/components/AdsVideoSection'
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
      <AdsVideoSection data={videoData} />
      <SymptomsSection data={symptomsData} />
      <FearsSection
        data={fearsData}
        ctaText={heroData.ctaText}
        whatsappMessage={whatsappMessage}
      />
      <ProcessSection data={processSectionData} steps={processData} />
      <IncludesSection data={includesSectionData} items={includesData} />
      <CTARemodelacion data={contactData} whatsappMessage={whatsappMessage} />
    </main>
  )
}
