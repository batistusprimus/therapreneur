'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
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

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'fade-in-up':
        return 'opacity-100 translate-y-0';
      case 'fade-in-left':
        return 'opacity-100 translate-x-0';
      case 'fade-in-right':
        return 'opacity-100 translate-x-0';
      case 'scale-in':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-in-left':
        return 'opacity-0 -translate-x-8';
      case 'fade-in-right':
        return 'opacity-0 translate-x-8';
      case 'scale-in':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-800 ease-out
        ${isVisible ? getAnimationClass() : getInitialClass()}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Hook personnalisé pour l'intersection observer
export function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}
