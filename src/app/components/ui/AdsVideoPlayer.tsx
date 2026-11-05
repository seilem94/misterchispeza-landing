import { adsVideoContent } from '@/lib/constants/ads'
import { cn } from '@/lib/utils/cn'

export interface AdsVideoPlayerProps {
  src: string
  poster: string
  label?: string
  className?: string
  captions?: {
    src: string
    language: string
    label: string
  }
}

export function AdsVideoPlayer({
  src,
  poster,
  label = adsVideoContent.label,
  className,
  captions,
}: AdsVideoPlayerProps) {
  return (
    <video
      src={src}
      poster={poster}
      controls
      preload="none"
      playsInline
      aria-label={label}
      className={cn('aspect-video w-full rounded-2xl bg-slate-950', className)}
    >
      {captions && (
        <track
          kind="captions"
          src={captions.src}
          srcLang={captions.language}
          label={captions.label}
          default
        />
      )}
      {adsVideoContent.fallback}
    </video>
  )
}
