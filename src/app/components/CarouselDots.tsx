'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { adsCarouselContent } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'

interface CarouselDotsProps {
  carouselId: string
  itemCount: number
  label: string
}

function getActiveIndex(track: HTMLElement, itemCount: number) {
  const viewportCenter =
    track.getBoundingClientRect().left +
    track.clientLeft +
    track.clientWidth / 2
  let activeIndex = 0
  let closestDistance = Infinity

  Array.from(track.children)
    .slice(0, itemCount)
    .forEach((item, index) => {
      const bounds = item.getBoundingClientRect()
      const distance = Math.abs(bounds.left + bounds.width / 2 - viewportCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        activeIndex = index
      }
    })

  return activeIndex
}

export function CarouselDots({
  carouselId,
  itemCount,
  label,
}: CarouselDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const track = document.getElementById(carouselId)
    if (!track) return

    const updatePosition = () => {
      if (track.clientWidth > 0) {
        setActiveIndex(getActiveIndex(track, itemCount))
      }
    }

    const observer = new ResizeObserver(updatePosition)
    observer.observe(track)
    Array.from(track.children).forEach((item) => observer.observe(item))
    track.addEventListener('scroll', updatePosition, { passive: true })
    updatePosition()

    return () => {
      track.removeEventListener('scroll', updatePosition)
      observer.disconnect()
    }
  }, [carouselId, itemCount])

  const selectItem = (index: number) => {
    const track = document.getElementById(carouselId)
    const item = track?.children.item(index)
    if (!track || !item) return

    const bounds = item.getBoundingClientRect()
    const viewportCenter =
      track.getBoundingClientRect().left +
      track.clientLeft +
      track.clientWidth / 2
    const left =
      track.scrollLeft + bounds.left + bounds.width / 2 - viewportCenter

    track.scrollTo({
      left: Math.max(0, Math.min(left, track.scrollWidth - track.clientWidth)),
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  if (itemCount < 2) return null

  return (
    <div
      role="group"
      aria-label={label}
      className="flex justify-center items-center gap-2 mt-4 md:hidden"
    >
      {Array.from({ length: itemCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={adsCarouselContent.itemLabel(index + 1, itemCount)}
          aria-controls={carouselId}
          aria-current={index === activeIndex ? 'true' : undefined}
          onClick={() => selectItem(index)}
          className="flex h-6 min-w-6 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          <span
            aria-hidden="true"
            className={cn(
              'h-2 rounded-full transition-all duration-300 motion-reduce:transition-none',
              index === activeIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300',
            )}
          />
        </button>
      ))}
    </div>
  )
}
