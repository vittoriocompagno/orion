'use client'

import Link from 'next/link'
import { Heading } from '@/components/ui/Heading'
import { StatsCard } from '@/components/shared/dashboard/StatsCard'
import { ReviewCard } from '@/components/shared/dashboard/ReviewCard'
import { SentimentCard } from '@/components/shared/dashboard/SentimentCard'

const mockReviews = [
  {
    author: 'Mario R.',
    rating: 5.0,
    time: '2 ORE FA',
    content: 'Servizio eccellente, personale molto professionale. Tornerò sicuramente!',
    status: 'responded' as const
  },
  {
    author: 'Laura B.',
    rating: 3.0,
    time: '5 ORE FA',
    content: 'Buono ma migliorabile. I tempi di attesa sono un po\' lunghi.',
    status: 'pending' as const
  }
]

const sentimentData = [
  { label: 'POSITIVO', value: 75, color: 'bg-green-500/80' },
  { label: 'NEUTRO', value: 20, color: 'bg-yellow-500/80' },
  { label: 'NEGATIVO', value: 5, color: 'bg-red-500/80' }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          label="RECENSIONI TOTALI" 
          value={128}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          label="MEDIA VALUTAZIONI" 
          value={4.5}
          trend={{ value: 0.3, isPositive: true }}
        />
        <StatsCard 
          label="RISPOSTE AUTOMATICHE" 
          value="85%"
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard 
          label="SENTIMENT POSITIVO" 
          value="92%"
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      {/* Recent Reviews */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Heading>RECENSIONI RECENTI_</Heading>
          <Link 
            href="/dashboard/reviews" 
            className="font-mono text-sm text-indigo-500 hover:text-indigo-600 transition-colors group relative"
          >
            VEDI TUTTE →
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current opacity-50 transition-all group-hover:w-full" />
          </Link>
        </div>

        <div className="space-y-4">
          {mockReviews.map((review) => (
            <ReviewCard 
              key={review.author}
              {...review}
            />
          ))}
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div>
        <Heading className="mb-6">ANALISI SENTIMENT_</Heading>
        <SentimentCard data={sentimentData} />
      </div>
    </div>
  )
} 