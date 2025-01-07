'use client';

import { useEffect, useState, useRef } from 'react';
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
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      // Handle special cases
      if (value === '24/7') {
        setDisplayValue('24/7');
        return;
      }

      // Extract numeric value and suffix
      const numericMatch = value.match(/^([\d.]+)(.*)$/);
      if (!numericMatch) {
        setDisplayValue(value);
        return;
      }

      const targetNum = parseFloat(numericMatch[1]);
      const suffix = numericMatch[2] || '';
      const duration = 3000; // 3 seconds
      const steps = 100;
      const increment = targetNum / steps;
      let current = 0;
      let frame = 0;

      const easeOutQuart = (x: number): number => {
        return 1 - Math.pow(1 - x, 4);
      };

      const animate = () => {
        if (frame < steps) {
          const progress = easeOutQuart(frame / steps);
          current = targetNum * progress;
          setDisplayValue(`${Math.round(current * 10) / 10}${suffix}`);
          frame++;
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
} 