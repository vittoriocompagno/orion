'use client'

import { cn } from '@/lib/utils'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import { Input } from '@/components/ui/Input'
import { Star } from 'lucide-react'

const mockReviews = [
  {
    id: '1',
    author: 'Marco Rossi',
    rating: 5,
    content: 'Ottimo servizio, personale molto professionale e cordiale. Tornerò sicuramente!',
    date: '2024-01-08',
    sentiment: 'positive',
    source: 'google',
    replied: true
  },
  {
    id: '2',
    author: 'Laura Bianchi',
    rating: 3,
    content: 'Servizio nella media. Alcuni aspetti potrebbero essere migliorati.',
    date: '2024-01-07',
    sentiment: 'neutral',
    source: 'google',
    replied: false
  },
  {
    id: '3',
    author: 'Giuseppe Verdi',
    rating: 2,
    content: 'Non sono rimasto molto soddisfatto del servizio. Tempi di attesa troppo lunghi.',
    date: '2024-01-06',
    sentiment: 'negative',
    source: 'google',
    replied: true
  }
]

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">RECENSIONI_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Gestisci e rispondi alle recensioni dei tuoi clienti.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Cerca recensioni..."
          className="md:col-span-2"
        />
        <Select
          options={[
            { value: 'all', label: 'TUTTI I FILTRI' },
            { value: 'positive', label: 'POSITIVE' },
            { value: 'neutral', label: 'NEUTRALI' },
            { value: 'negative', label: 'NEGATIVE' },
            { value: 'replied', label: 'RISPOSTE' },
            { value: 'not_replied', label: 'NON RISPOSTE' }
          ]}
        />
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 gap-6">
        {mockReviews.map((review) => (
          <Card key={review.id} className="group hover:scale-[1.01] transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-mono text-lg text-gray-900">
                  {review.author}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-4 h-4',
                          i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        )}
                      />
                    ))}
                  </div>
                  <Badge
                    variant={
                      review.sentiment === 'positive' ? 'success' :
                      review.sentiment === 'neutral' ? 'warning' :
                      'danger'
                    }
                  >
                    {review.sentiment.toUpperCase()}
                  </Badge>
                  <Badge variant="secondary">
                    {review.source.toUpperCase()}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {review.replied ? (
                  <Badge variant="secondary">RISPOSTA INVIATA</Badge>
                ) : (
                  <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                    RISPONDI
                  </button>
                )}
              </div>
            </div>

            <div className="p-4 bg-black/[0.02] border border-black/5 rounded-2xl font-mono text-sm">
              {review.content}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
              <div className="font-mono text-xs text-gray-600">
                DATA: {new Date(review.date).toLocaleDateString('it-IT')}
              </div>
              <button className="font-mono text-xs text-gray-600 hover:text-black transition-colors">
                VEDI DETTAGLI
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 