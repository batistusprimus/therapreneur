"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number; // in ms
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({ end, duration = 1200, suffix = "", className }: AnimatedCounterProps) {
  const [value, setValue] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(end * eased);
      setValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration]);

  return <span className={className}>{value}{suffix}</span>;
}


