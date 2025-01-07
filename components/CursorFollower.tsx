import { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-accent mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
      {/* Secondary cursor */}
      <div
        className="fixed pointer-events-none z-40 w-12 h-12 border border-accent mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />
    </>
  );
} 