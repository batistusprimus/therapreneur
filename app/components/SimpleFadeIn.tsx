'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SimpleFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SimpleFadeIn({ children, className = '', delay = 0 }: SimpleFadeInProps) {
  const [isVisible, setIsVisible] = useState(true); // Toujours visible par défaut
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Seulement si on est côté client et que l'utilisateur préfère les animations
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(false);
      setShouldAnimate(true);

      const timer = setTimeout(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
              observer.disconnect();
            }
          },
          {
            threshold: 0.1,
            rootMargin: '50px',
          }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }

        return () => observer.disconnect();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        ${shouldAnimate ? 'transition-all duration-700 ease-out' : ''}
        ${shouldAnimate && !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
