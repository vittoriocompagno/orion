'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function GradientFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Create smooth spring animations
  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth) * 100
      const yPos = (e.clientY / window.innerHeight) * 100
      mouseX.set(xPos)
      mouseY.set(yPos)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div 
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: x.get() === 0 
          ? 'none' 
          : `radial-gradient(circle 1000px at ${x}% ${y}%, rgba(0,0,0,0.02), transparent 50%)`
      }}
    />
  )
} 