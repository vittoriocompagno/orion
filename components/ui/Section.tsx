'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'dark'
  withGradient?: boolean
  gradientPosition?: 'left' | 'right' | 'center'
  gridSize?: 'small' | 'large'
}

export function Section({
  children,
  className,
  variant = 'default',
  withGradient = true,
  gradientPosition = 'right',
  gridSize = 'large',
  ...props
}: SectionProps) {
  const baseStyles = "relative overflow-hidden py-32 px-8"
  const variantStyles = {
    default: "bg-white/70 backdrop-blur-sm",
    dark: "bg-black/70 backdrop-blur-sm text-white"
  }

  const gridSizes = {
    small: "32px",
    large: "64px"
  }

  const gradientPositions = {
    left: "circle 800px at 0% 50%",
    right: "circle 800px at 100% 50%",
    center: "circle 800px at 50% 50%"
  }

  return (
    <section 
      className={cn(
        baseStyles, 
        variantStyles[variant],
        "border-y border-black/5",
        className
      )} 
      {...props}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div 
          className={cn(
            "absolute inset-0 bg-[linear-gradient(transparent_1px,var(--grid-color)_1px),linear-gradient(90deg,transparent_1px,var(--grid-color)_1px)] [background-position:center_center]",
            {
              '[--grid-color:rgba(99,102,241,0.04)]': variant === 'default',
              '[--grid-color:rgba(129,140,248,0.04)]': variant === 'dark',
            }
          )} 
          style={{ backgroundSize: gridSizes[gridSize] }}
        />
        
        {/* Gradient */}
        {withGradient && (
          <div 
            className={cn(
              "absolute inset-0",
              {
                "bg-[radial-gradient(var(--gradient-shape),rgba(99,102,241,0.02),transparent)]": variant === 'default',
                "bg-[radial-gradient(var(--gradient-shape),rgba(129,140,248,0.02),transparent)]": variant === 'dark'
              }
            )}
            style={{
              '--gradient-shape': gradientPositions[gradientPosition]
            } as React.CSSProperties}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
} 