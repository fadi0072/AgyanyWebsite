'use client';

import LettersSlideUp from '../animation/letter';
const HeroBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] px-4 md:px-0 rounded-b-4xl w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <img
        className="absolute rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/contact-banner.png" // place your video file in /public/videos/
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10  max-w-3xl mr-auto text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl md:text-5xl  font-['Roboto'] font-semibold leading-tight">
              Contact
            </h1>
          </LettersSlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
