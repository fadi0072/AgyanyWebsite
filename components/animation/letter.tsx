'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface LettersSlideUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function LettersSlideUp({ children, className = '' }: LettersSlideUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split: any = new SplitType(ref.current, {
      types: 'chars',
      tagName: 'span',
    });

    const tl = gsap.timeline({ paused: true });

    tl.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.9, // smoother & slower
      ease: 'power4.out', // smoother easing
      stagger: 0.05, // slower stagger timing
    });

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.pause().progress(0),
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, []);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
