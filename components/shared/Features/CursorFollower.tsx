'use client'

import { useCallback, useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export const CursorFollower = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleVisibility = useCallback((visible: boolean) => () => {
    setIsVisible(visible)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseenter', handleVisibility(true))
    document.body.addEventListener('mouseleave', handleVisibility(false))

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseenter', handleVisibility(true))
      document.body.removeEventListener('mouseleave', handleVisibility(false))
    }
  }, [handleMouseMove, handleVisibility])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-accent mix-blend-difference 
                   transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`
        }}
      />
      <div 
        className="fixed pointer-events-none z-40 w-12 h-12 border border-accent 
                   mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`
        }}
      />
    </>
  )
} 