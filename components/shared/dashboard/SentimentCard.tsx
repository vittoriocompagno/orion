'use client'

import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface SentimentData {
  label: string
  value: number
  color: string
}

interface SentimentCardProps {
  data: SentimentData[]
  className?: string
}

export function SentimentCard({ data, className }: SentimentCardProps) {
  return (
    <Card className={cn("group", className)}>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {item.label}
              </span>
              <span className="font-bold">
                {item.value}%
              </span>
            </div>
            <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full backdrop-blur-sm transition-all duration-500",
                  item.color
                )} 
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
} 