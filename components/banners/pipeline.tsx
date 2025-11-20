'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
const HeroBanner = () => {
  return (
    <section className="relative min-h-[70vh] h-[90vh] px-4 md:px-0 rounded-b-2xl md:rounded-b-4xl w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute rounded-b-2xl md:rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/contact-banner.png"
        alt="Pipeline background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10 max-w-3xl mx-auto md:mr-auto text-center md:text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Roboto'] font-semibold leading-tight">
              Pipeline
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Roboto']">
              Our pipeline starts with strong science aimed at translating important and central
              mechanisms of PD development into new medicines.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
