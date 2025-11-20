'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenisScroll = () => {
  useEffect(() => {
    // Check if device is mobile/touch
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 1.8, // Faster on mobile for better UX
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9, // control wheel scroll speed
      touchMultiplier: isMobile ? 1.5 : 1.2, // Better touch responsiveness on mobile
      infinite: false,
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for native feel
    });

    // RAF loop — keeps GSAP in sync with Lenis
    const raf = (time: number): void => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // ✅ Correctly typed scrollerProxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number): number {
        if (typeof value === 'number') {
          lenis.scrollTo(value);
          return 0; // required for type safety
        }
        return lenis.scroll;
      },
      getBoundingClientRect(): any {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // ✅ Properly typed callback (void)
    const refreshHandler = (): void => {
      requestAnimationFrame(() => ScrollTrigger.update());
    };

    ScrollTrigger.addEventListener('refresh', refreshHandler);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener('refresh', refreshHandler);
    };
  }, []);
};
