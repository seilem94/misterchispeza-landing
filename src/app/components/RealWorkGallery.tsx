import Image from 'next/image'
import { Container, Section } from '@/app/components/ui'
import type { AdsWorkGalleryItem } from '@/lib/types/ads'

export function RealWorkGallery({
  items,
}: {
  items: readonly AdsWorkGalleryItem[]
}) {
  return (
    <Section variant="default" className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <figure key={item.src} className="min-w-0">
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 3), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
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
