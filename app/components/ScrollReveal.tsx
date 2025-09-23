'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any).__fadeInObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    (window as any).__fadeInObserver = observer;

    const onRouteChange = () => {
      document.querySelectorAll('.fade-in-section').forEach((el) => {
        if (!(el as HTMLElement).classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    };

    window.addEventListener('popstate', onRouteChange);
    window.addEventListener('pushstate', onRouteChange as any);

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', onRouteChange);
      window.removeEventListener('pushstate', onRouteChange as any);
      (window as any).__fadeInObserver = null;
    };
  }, []);

  return null;
}


