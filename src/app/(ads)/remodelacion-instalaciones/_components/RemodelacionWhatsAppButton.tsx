'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/app/components/ui'
import { cn } from '@/lib/utils/cn'
import { openWhatsAppSelector } from '@/lib/utils/whatsapp'

interface RemodelacionWhatsAppButtonProps {
  label: string
  message: string
  className?: string
}

export function RemodelacionWhatsAppButton({
  label,
  message,
  className,
}: RemodelacionWhatsAppButtonProps) {
  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      onClick={() => openWhatsAppSelector(message)}
      className={cn(
        'w-full whitespace-normal px-5 text-base sm:w-auto sm:text-lg',
        className,
      )}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </Button>
  )
}
