'use client'

import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface ReviewCardProps {
  author: string
  rating: number
  time: string
  content: string
  status: 'responded' | 'pending'
  className?: string
}

export function ReviewCard({ 
  author, 
  rating, 
  time, 
  content, 
  status,
  className 
}: ReviewCardProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-green-500"
    if (rating >= 3) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <Card className={cn("group hover:scale-[1.01] transition-transform", className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-mono text-sm text-gray-600 mb-1 group-hover:text-gray-900 transition-colors">
            {author}
          </div>
          <div className="flex items-center gap-2">
            <span className={getRatingColor(rating)}>●</span>
            <span className="font-mono font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="font-mono text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
          {time}
        </div>
      </div>

      <p className="font-mono text-sm mb-4">
        "{content}"
      </p>

      <div className="flex items-center justify-between">
        <div className="font-mono text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
          {status === 'responded' ? 'RISPOSTA AUTOMATICA INVIATA' : 'IN ATTESA DI RISPOSTA'}
        </div>
        {status === 'responded' ? (
          <button className="font-mono text-sm text-indigo-500 hover:text-indigo-600 transition-colors group/btn relative">
            MODIFICA RISPOSTA
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover/btn:w-full" />
          </button>
        ) : (
          <button className="font-mono text-sm px-4 py-2 bg-black text-white hover:bg-black/90 transition-colors rounded-full">
            RISPONDI
          </button>
        )}
      </div>
    </Card>
  )
} 