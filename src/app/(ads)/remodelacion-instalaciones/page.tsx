import type { Metadata } from 'next'
import { RealWorkGallery } from '@/app/components/RealWorkGallery'
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
  realWorkGallery,
  remodelacionMetadata,
  symptomsData,
  videoData,
  whatsappMessage,
} from '@/lib/constants/remodelacion-antiguas'

export const metadata: Metadata = remodelacionMetadata

export default function RemodelacionInstalacionesPage() {
  return (
    <main className="min-h-screen">
      <RemodelacionHero
        data={heroData}
        video={videoData}
        whatsappMessage={whatsappMessage}
      />
      <SymptomsSection data={symptomsData} whatsappMessage={whatsappMessage} />
      <RealWorkGallery items={realWorkGallery} />
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
