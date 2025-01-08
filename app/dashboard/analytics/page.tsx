'use client'

import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import { ArrowUp, ArrowDown, Star, TrendingUp, MessageSquare, BarChart3 } from 'lucide-react'

const mockStats = {
  averageRating: 4.2,
  totalReviews: 156,
  positivePercentage: 75,
  negativePercentage: 15,
  neutralPercentage: 10,
  responseRate: 92,
  trends: {
    rating: 'up',
    reviews: 'up',
    responses: 'down'
  }
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">ANALYTICS_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Analizza le performance delle tue recensioni nel tempo.
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-end">
        <Select
          options={[
            { value: '7d', label: 'ULTIMI 7 GIORNI' },
            { value: '30d', label: 'ULTIMI 30 GIORNI' },
            { value: '90d', label: 'ULTIMI 90 GIORNI' },
            { value: '12m', label: 'ULTIMI 12 MESI' }
          ]}
          className="w-48"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Average Rating */}
        <Card className="group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <h3 className="font-mono text-sm text-gray-600">MEDIA RECENSIONI</h3>
            </div>
            <Badge
              variant={mockStats.trends.rating === 'up' ? 'success' : 'danger'}
              className="flex items-center gap-1"
            >
              {mockStats.trends.rating === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              +0.3
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="font-mono text-4xl font-bold">{mockStats.averageRating}</div>
            <div className="font-mono text-sm text-gray-600">/ 5.0</div>
          </div>
        </Card>

        {/* Total Reviews */}
        <Card className="group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-mono text-sm text-gray-600">TOTALE RECENSIONI</h3>
            </div>
            <Badge
              variant={mockStats.trends.reviews === 'up' ? 'success' : 'danger'}
              className="flex items-center gap-1"
            >
              {mockStats.trends.reviews === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              +12%
            </Badge>
          </div>
          <div className="font-mono text-4xl font-bold">{mockStats.totalReviews}</div>
        </Card>

        {/* Response Rate */}
        <Card className="group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-mono text-sm text-gray-600">TASSO DI RISPOSTA</h3>
            </div>
            <Badge
              variant={mockStats.trends.responses === 'up' ? 'success' : 'danger'}
              className="flex items-center gap-1"
            >
              {mockStats.trends.responses === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              -3%
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="font-mono text-4xl font-bold">{mockStats.responseRate}%</div>
          </div>
        </Card>
      </div>

      {/* Sentiment Distribution */}
      <Card className="group">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-5 h-5" />
          <h3 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
            DISTRIBUZIONE SENTIMENT
          </h3>
        </div>
        
        <div className="space-y-4">
          {/* Positive */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-sm">POSITIVE</div>
              <div className="font-mono text-sm">{mockStats.positivePercentage}%</div>
            </div>
            <div className="h-2 bg-black/[0.02] rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${mockStats.positivePercentage}%` }}
              />
            </div>
          </div>

          {/* Neutral */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-sm">NEUTRALI</div>
              <div className="font-mono text-sm">{mockStats.neutralPercentage}%</div>
            </div>
            <div className="h-2 bg-black/[0.02] rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full transition-all"
                style={{ width: `${mockStats.neutralPercentage}%` }}
              />
            </div>
          </div>

          {/* Negative */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-sm">NEGATIVE</div>
              <div className="font-mono text-sm">{mockStats.negativePercentage}%</div>
            </div>
            <div className="h-2 bg-black/[0.02] rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full transition-all"
                style={{ width: `${mockStats.negativePercentage}%` }}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 