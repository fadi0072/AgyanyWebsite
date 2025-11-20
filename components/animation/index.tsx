'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  start?: string;
  className?: string;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 1.2,
  start = 'top 85%',
  className = '',
}: SlideUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        y: 60,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        delay,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, [delay, duration, start]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
