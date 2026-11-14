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
    <div className="isolate mx-auto aspect-[9/16] w-full max-w-[320px] transform-gpu overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950 shadow-2xl shadow-black/50 sm:max-w-sm">
      <video
        src={src}
        poster={poster}
        controls
        muted
        preload="none"
        playsInline
        aria-label={label}
        className={cn(
          'backface-hidden block h-full w-full transform-gpu object-cover brightness-100',
          className,
        )}
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
    </div>
  )
}
