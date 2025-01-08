'use client'

import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({ label, value, trend, className }: StatsCardProps) {
  return (
    <Card className={cn("group hover:scale-[1.02] transition-transform", className)}>
      <div className="flex flex-col">
        <div className="font-mono text-sm text-gray-600 mb-2 group-hover:text-gray-900 transition-colors">
          {label}
        </div>
        <div className="font-mono text-4xl font-bold">
          {value}
        </div>
        {trend && (
          <div className={cn(
            "font-mono text-sm mt-2",
            trend.isPositive ? "text-green-500" : "text-red-500"
          )}>
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </div>
        )}
      </div>
    </Card>
  )
} 