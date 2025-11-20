'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // smooth & slightly slow
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9, // control wheel scroll speed
      touchMultiplier: 1.2,
      infinite: false,
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
