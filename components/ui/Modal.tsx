import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={cn(
          'w-full max-w-lg',
          'bg-white/80 backdrop-blur-xl',
          'border border-black/5',
          'rounded-[32px]',
          'p-6',
          'shadow-lg shadow-black/[0.03]',
          'animate-in fade-in-0 zoom-in-95',
          className
        )}
      >
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h2 className="font-mono text-lg">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="p-2 -m-2 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
} 