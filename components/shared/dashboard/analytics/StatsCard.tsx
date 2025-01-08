'use client'

import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function StatsCard({ title, children, className }: StatsCardProps) {
  return (
    <Card className={cn("group hover:scale-[1.01] transition-transform", className)}>
      <h3 className="font-mono text-lg mb-4 text-gray-600 group-hover:text-gray-900 transition-colors">
        {title}
      </h3>
      {children}
    </Card>
  )
} 