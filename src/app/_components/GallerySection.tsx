import Image from 'next/image'
import { Card, Section, Container } from '@/app/components/ui'
import { CarouselDots } from '@/app/components/CarouselDots'
import { galleryImages, homeGalleryContent } from '@/lib/constants/gallery'
import { GalleryContactLink } from './GalleryContactLink'

export function GallerySection() {
  const carouselId = 'galeria-home-carousel'

  return (
    <Section id="galeria" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <h2
          id="galeria-home-title"
          className="mb-8 text-center text-2xl font-bold text-slate-900 sm:mb-12 sm:text-3xl md:text-4xl"
        >
          {homeGalleryContent.title}
        </h2>

        <div
          id={carouselId}
          role="region"
          aria-labelledby="galeria-home-title"
          tabIndex={0}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 md:mx-auto md:grid md:max-w-5xl md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0"
        >
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group w-[85vw] min-w-0 shrink-0 snap-center overflow-hidden bg-white p-0 transition-all duration-300 sm:w-[340px] md:w-auto md:hover:-translate-y-1.5 md:hover:shadow-xl motion-reduce:transition-none motion-reduce:md:hover:translate-y-0"
            >
              <GalleryContactLink>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1152px) 325px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 3), (min-width: 640px) 340px, 85vw"
                    className="object-cover transition-transform duration-500 md:group-hover:scale-105 motion-reduce:transition-none motion-reduce:md:group-hover:scale-100"
                  />
                </div>
                <div className="flex grow flex-col gap-1 bg-white p-4">
                  <h3 className="text-lg font-bold leading-tight text-slate-900">
                    {image.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {image.location}
                  </p>
                  <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600">
                    {homeGalleryContent.ctaText}{' '}
                    <span aria-hidden="true">→</span>
                  </p>
                </div>
              </GalleryContactLink>
            </Card>
          ))}
        </div>
        <CarouselDots
          carouselId={carouselId}
          itemCount={galleryImages.length}
          label={homeGalleryContent.title}
        />

        {galleryImages.length === 0 && (
          <p className="py-12 text-center text-lg text-slate-500">
            {homeGalleryContent.emptyText}
          </p>
        )}
      </Container>
    </Section>
  )
}
