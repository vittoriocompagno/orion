'use client'

import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface ReviewListProps {
  className?: string
}

interface Review {
  id: string
  author: string
  source: string
  rating: number
  date: string
  content: string
  response?: {
    content: string
    date: string
    status: 'sent' | 'draft' | 'pending'
  }
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Mario R.',
    source: 'Google',
    rating: 5.0,
    date: '15 GEN 2024',
    content: 'Servizio eccellente, personale molto professionale. Tornerò sicuramente! La qualità è sempre al top e i prezzi sono competitivi.',
    response: {
      content: 'Grazie mille per il tuo feedback positivo, Mario! Siamo felici che tu sia soddisfatto del nostro servizio.',
      date: '15 GEN 2024',
      status: 'sent'
    }
  },
  {
    id: '2',
    author: 'Laura B.',
    source: 'Google',
    rating: 3.0,
    date: '14 GEN 2024',
    content: 'Buono ma migliorabile. I tempi di attesa sono un po\' lunghi e il personale sembrava molto occupato.',
    response: {
      content: '',
      date: '',
      status: 'pending'
    }
  }
]

export function ReviewList({ className }: ReviewListProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-green-500"
    if (rating >= 3) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className={cn("space-y-4", className)}>
      {mockReviews.map((review) => (
        <Card key={review.id} className="group hover:scale-[1.01] transition-transform">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={getRatingColor(review.rating)}>●</span>
                <span className="font-mono font-bold">{review.rating.toFixed(1)}</span>
              </div>
              <div className="font-mono text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {review.author} • {review.source}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {review.date}
              </div>
              <button className="font-mono text-sm text-indigo-500 hover:text-indigo-600 transition-colors group/btn relative">
                VEDI SU {review.source} →
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover/btn:w-full" />
              </button>
            </div>
          </div>
          
          <p className="font-mono text-sm mb-6">
            "{review.content}"
          </p>

          <div className="border-t border-black/5 pt-4">
            {review.response?.status === 'sent' ? (
              <>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                    RISPOSTA AUTOMATICA INVIATA • {review.response.date}
                  </div>
                  <button className="font-mono text-sm text-indigo-500 hover:text-indigo-600 transition-colors group/btn relative">
                    MODIFICA RISPOSTA
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover/btn:w-full" />
                  </button>
                </div>
                <p className="font-mono text-sm text-gray-600 mt-2">
                  "{review.response.content}"
                </p>
              </>
            ) : review.response?.status === 'draft' ? (
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  BOZZA SALVATA
                </div>
                <div className="flex items-center gap-2">
                  <button className="font-mono text-sm text-gray-600 hover:text-black transition-colors">
                    ELIMINA BOZZA
                  </button>
                  <button className="font-mono text-sm px-4 py-2 bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                    MODIFICA BOZZA
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                  IN ATTESA DI RISPOSTA
                </div>
                <button className="font-mono text-sm px-4 py-2 bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                  RISPONDI
                </button>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
} 