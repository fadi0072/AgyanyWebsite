'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';

const slides = [
  {
    title: 'Who We Are',
    description:
      "Agyany Pharma is pioneering neuroscience research with a singular mission: to deliver accessible, effective, and targeted therapies for Parkinson's disease.",
    link: '#research',
  },
  {
    title: 'Our Philosophy',
    description:
      'We believe innovation should translate into measurable patient impact — every molecule we develop, every study we conduct, brings us closer to transforming lives.',
    link: '#research',
  },
];

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative container mx-auto py-12 md:py-16 px-4 md:px-0 overflow-visible">
      <div className="mb-8 md:mb-10">
        <LettersSlideUp>
          <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
            About Us
          </div>
        </LettersSlideUp>
        <SlideUp>
          <h2
            className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left"
          >
            &ldquo;Empowering lives through innovative neuroscience solutions, Agyany is dedicated
            to redefining Parkinson&apos;s disease treatment and delivering hope to patients
            worldwide.&rdquo;
          </h2>
        </SlideUp>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 overflow-visible">
        {/* Left Side: Image */}
        <div
          className="relative w-full max-w-lg mx-auto lg:mx-0 overflow-visible"
          style={{ paddingBottom: '2rem', paddingTop: '1rem' }}
        >
          {/* Blurred decorative circles - hidden on mobile */}
          <div
            className="hidden md:block absolute w-64 h-56 bg-[#297F95] rounded-full blur-3xl opacity-20 -z-10"
            style={{ top: '-4rem', left: '-8rem' }}
          />
          <div
            className="hidden md:block absolute w-64 h-56 bg-[#DEF5F7] rounded-full blur-3xl -z-10"
            style={{ bottom: '-4rem', right: '-8rem' }}
          />

          {/* Dots indicator - adjusted for mobile */}
          <div className="absolute left-4 md:left-[62px] top-4 md:top-[48px] origin-top-left rotate-90 inline-flex flex-col justify-start items-start gap-3 md:gap-4 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border transition-all ${
                  index === activeSlide
                    ? 'bg-[#297F95] border-[#297F95]'
                    : 'bg-transparent border-[#10052F]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Background Image - adjusted for mobile */}
          <img
            src="/mainpage/whoweareBG.png"
            alt=""
            className="hidden md:block absolute object-contain object-bottom-right"
            style={{
              zIndex: 0,
              width: 'calc(100% + 30rem)',
              height: 'calc(100% + 6rem)',
              left: '-15rem',
              top: '-2rem',
              bottom: '-4rem',
              right: '-10rem',
              maxWidth: 'none',
              maxHeight: 'none',
            }}
          />
          {/* Foreground Image */}
          <div className="relative z-10">
            <Image
              src="/who-we-are.png"
              alt="Doctors analyzing brain scan"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5 relative min-h-[300px] md:min-h-[400px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-center space-y-4 md:space-y-5 transition-opacity duration-500 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div>
                <LettersSlideUp>
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-2xl md:text-[30px] font-semibold leading-[120%]">
                    {slide.title}
                  </h3>
                </LettersSlideUp>
                <SlideUp>
                  <p className="text-black font-['Roboto'] text-base md:text-xl lg:text-[22px] font-normal my-4 md:my-5">
                    {slide.description}
                  </p>
                </SlideUp>
              </div>

              <Link
                href={slide.link}
                className="inline-flex items-center px-4 md:px-6 gap-2 md:gap-3 py-2 md:py-3 max-w-max mx-auto lg:mx-0 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all hover:bg-black hover:text-white"
              >
                Discover Our Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
