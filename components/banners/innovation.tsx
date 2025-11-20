'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
const HeroBanner = () => {
  return (
    <section className="relative min-h-[70vh] h-[90vh] px-4 md:px-0 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/innovation-bg.png"
        alt="Innovation background"
      />

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10 max-w-3xl mx-auto md:mr-auto text-center md:text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Roboto'] font-semibold leading-tight">
              Innovation
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Roboto']">
              We bring our concepts to develop new treatments for patients with Parkinson disease
              (PD) to pioneering researchers with the intent to advance neuroscience breakthroughs
              into differentiated medicines for patients with PD.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
