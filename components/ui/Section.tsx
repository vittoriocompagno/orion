'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'dark'
  gridSize?: 'small' | 'large'
  withGradient?: boolean
  gradientPosition?: 'left' | 'right' | 'center'
}

export function Section({
  children,
  className,
  variant = 'default',
  gridSize = 'large',
  withGradient = true,
  gradientPosition = 'right',
  ...props
}: SectionProps) {
  const baseStyles = "relative overflow-hidden py-32 px-8 md:px-16"
  const variantStyles = {
    default: "bg-white",
    dark: "bg-black text-white"
  }

  const gridSizeStyles = {
    small: "bg-[size:20px_20px]",
    large: "bg-[size:30px_30px]"
  }

  const gradientPositions = {
    left: "circle 800px at 0% 50%",
    right: "circle 800px at 100% 50%",
    center: "circle 800px at 50% 50%"
  }

  return (
    <section className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className={cn(
            "absolute inset-0 bg-[linear-gradient(transparent_1px,var(--grid-color)_1px),linear-gradient(90deg,transparent_1px,var(--grid-color)_1px)] [background-position:center_center] border-[1px]",
            gridSizeStyles[gridSize],
            {
              '[--grid-color:#fff]': variant === 'default',
              '[--grid-color:#000] opacity-20': variant === 'dark',
              'opacity-30': variant === 'default'
            }
          )} 
        />
        {withGradient && (
          <div 
            className={cn(
              "absolute inset-0",
              {
                "bg-[radial-gradient(var(--gradient-shape),rgba(0,0,0,0.03),transparent)]": variant === 'default',
                "bg-[radial-gradient(var(--gradient-shape),rgba(0,0,0,0.15),transparent)]": variant === 'dark'
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