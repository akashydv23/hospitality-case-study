import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

interface StatNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function StatNumber({ value, suffix = '', duration = 2, className = '' }: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      // Format number with commas
      const formatted = Math.floor(latest).toLocaleString();
      // If it's the exact final value, we might have formatting rules (like 230K+)
      if (latest === value && value >= 1000) {
         setDisplayValue(`${(value/1000).toFixed(0)}K`);
      } else {
         setDisplayValue(formatted);
      }
    });
  }, [spring, value]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}{suffix}
    </motion.span>
  );
}
