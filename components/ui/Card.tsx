'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark'
  hover?: boolean
  delay?: number
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  delay = 0,
  ...props 
}: CardProps) {
  const baseStyles = "relative p-8 border transition-all duration-300"
  const variantStyles = {
    default: "border-black/5 bg-white/50",
    dark: "border-white/10 bg-white/5"
  }
  const hoverStyles = hover ? "group" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative"
      {...props}
    >
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
        {children}
      </div>
    </motion.div>
  )
} 