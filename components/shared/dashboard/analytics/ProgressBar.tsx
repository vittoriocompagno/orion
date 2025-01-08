'use client'

import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  label?: string
  sublabel?: string
  color?: string
  className?: string
}

export function ProgressBar({ 
  value, 
  label, 
  sublabel,
  color = "bg-indigo-500/80",
  className 
}: ProgressBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {(label || sublabel) && (
        <div className="flex items-center justify-between font-mono text-sm">
          {label && <span className="text-gray-600">{label}</span>}
          {sublabel && <span className="font-bold">{sublabel}</span>}
        </div>
      )}
      <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full backdrop-blur-sm transition-all duration-500",
            color
          )} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
} 