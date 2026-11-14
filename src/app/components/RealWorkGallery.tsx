import Image from 'next/image'
import { Container, Section } from '@/app/components/ui'
import { adsStyles, adsWorkGalleryContent } from '@/lib/constants/ads'
import type { AdsWorkGalleryItem } from '@/lib/types/ads'
import { cn } from '@/lib/utils/cn'

export function RealWorkGallery({
  items,
}: {
  items: readonly AdsWorkGalleryItem[]
}) {
  return (
    <Section id={adsWorkGalleryContent.id} variant="default" className="pb-20">
      <Container>
        <h2
          id={`${adsWorkGalleryContent.id}-title`}
          className={cn(adsStyles.heading, 'mb-4')}
        >
          {adsWorkGalleryContent.title}
        </h2>
        <p className={adsStyles.description}>
          {adsWorkGalleryContent.description}
        </p>
        <div
          role="region"
          aria-labelledby={`${adsWorkGalleryContent.id}-title`}
          tabIndex={0}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {items.map((item) => (
            <figure
              key={item.src}
              className="w-[85vw] min-w-0 shrink-0 snap-center md:w-auto"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 3), 85vw"
                  className="aspect-square rounded-xl object-cover shadow-md"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-500">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
