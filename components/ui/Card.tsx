'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'dark'
  withAnimation?: boolean
  delay?: number
  hover?: boolean
}

export function Card({
  children,
  className,
  variant = 'default',
  withAnimation = true,
  delay = 0,
  hover = false,
  ...props
}: CardProps) {
  const baseStyles = "relative overflow-hidden rounded-[32px] p-8"
  const variantStyles = {
    default: cn(
      "bg-white/80 backdrop-blur-xl border border-black/5 shadow-lg shadow-black/[0.03]",
      hover && "hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]"
    ),
    dark: cn(
      "bg-black/80 backdrop-blur-xl border border-white/5 shadow-lg shadow-black/[0.03] text-white",
      hover && "hover:bg-black/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05]"
    )
  }

  const content = (
    <div 
      className={cn(
        baseStyles, 
        variantStyles[variant],
        "group transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )

  if (!withAnimation) return content

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay,
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {content}
    </motion.div>
  )
} 