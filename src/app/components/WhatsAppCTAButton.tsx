'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/app/components/ui'
import { cn } from '@/lib/utils/cn'
import { openWhatsAppSelector } from '@/lib/utils/whatsapp'

interface WhatsAppCTAButtonProps {
  label: string
  message: string
  className?: string
}

export function WhatsAppCTAButton({
  label,
  message,
  className,
}: WhatsAppCTAButtonProps) {
  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      onClick={() => openWhatsAppSelector(message)}
      className={cn(
        'w-full gap-3 whitespace-normal rounded-2xl px-5 text-base shadow-md hover:shadow-lg sm:w-auto sm:px-7 sm:text-lg',
        className,
      )}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900"
        aria-hidden="true"
      >
        <MessageCircle className="h-8 w-8 text-amber-500" />
      </span>
      <span>{label}</span>
    </Button>
  )
}
