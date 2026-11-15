import Image from 'next/image'
import { Card, Container, Section } from '@/app/components/ui'
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
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0"
        >
          {items.map((item) => (
            <Card
              key={item.src}
              className="group flex w-[85vw] min-w-0 shrink-0 snap-center flex-col overflow-hidden border-slate-100 bg-white p-0 shadow-md transition-all duration-300 md:w-auto md:hover:-translate-y-1.5 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0"
            >
              <div className="relative m-0 aspect-[4/5] w-full overflow-hidden p-0">
                <Image
                  src={item.src}
                  alt={`${item.title} - ${item.location}`}
                  fill
                  sizes="(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 3), 85vw"
                  className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105 motion-reduce:transition-none motion-reduce:md:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col gap-1 bg-white p-4">
                <h3 className="text-lg font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {item.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
