'use client'

import { cn } from '@/lib/utils'

interface KeywordTagProps {
  keyword: string
  count: number
  className?: string
}

export function KeywordTag({ keyword, count, className }: KeywordTagProps) {
  return (
    <div 
      className={cn(
        "px-3 py-1 font-mono text-sm bg-white/50 backdrop-blur-sm",
        "border border-black/5 rounded-full",
        "hover:bg-white/70 transition-colors",
        "text-gray-600 hover:text-gray-900",
        className
      )}
    >
      {keyword} ({count})
    </div>
  )
} 