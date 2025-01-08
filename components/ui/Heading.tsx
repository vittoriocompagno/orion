'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  variant?: 'default' | 'dark'
  withAnimation?: boolean
  delay?: number
}

export function Heading({
  children,
  className,
  as: Component = 'h2',
  size = '5xl',
  variant = 'default',
  withAnimation = true,
  delay = 0,
  ...props
}: HeadingProps) {
  const baseStyles = "font-mono font-bold leading-tight tracking-tight"
  const sizeStyles = {
    lg: "text-lg",
    xl: "text-xl",
    '2xl': "text-2xl",
    '3xl': "text-3xl",
    '4xl': "text-4xl",
    '5xl': "text-5xl",
    '6xl': "text-6xl",
    '7xl': "text-7xl"
  }
  const variantStyles = {
    default: "text-gray-900",
    dark: "text-white"
  }

  const content = (
    <Component 
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )

  if (!withAnimation) return content

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {content}
    </motion.div>
  )
} 