'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountingNumberProps {
  value: string;
  className?: string;
}

export default function CountingNumber({ value, className }: CountingNumberProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const { ref, inView } = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Handle non-numeric values (e.g., "24/7")
    if (!/^\d/.test(value)) {
      setDisplayValue(value);
      return;
    }

    // Parse numeric value and suffix
    const [, number = '0', suffix = ''] = value.match(/^([\d.]+)(.*)$/) || [];
    const targetNum = parseFloat(number);
    
    const animate = () => {
      const steps = 100;
      const duration = 3000;
      let frame = 0;

      const step = () => {
        if (frame >= steps) {
          setDisplayValue(value);
          return;
        }

        const progress = 1 - Math.pow(1 - frame / steps, 4); // easeOutQuart
        const current = targetNum * progress;
        setDisplayValue(`${(Math.round(current * 10) / 10)}${suffix}`);
        
        frame++;
        requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    animate();
  }, [inView, value]);

  return <span ref={ref} className={className}>{displayValue}</span>;
} 