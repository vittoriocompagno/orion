'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number
  className?: string
}

export function Marquee({ items, speed = 15, className = '' }: MarqueeProps) {
  const content = [...items, ...items] // Duplicate items for seamless loop

  return (
    <div className={`marquee-container ${className}`}>
      <motion.div 
        className="marquee-content"
        style={{
          '--gradient-speed': `${speed}s`,
        } as any}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="inline-block px-8 font-mono text-sm text-gray-600"
          >
            {item}
            {i < content.length - 1 && (
              <span className="mx-4 text-black/20">|</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  )
} 