'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] px-4 md:px-0  rounded-b-4xl w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <img
        className="absolute rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/about-bg.png" // place your video file in /public/videos/
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10  max-w-3xl mr-auto text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl md:text-5xl  font-['Roboto'] font-semibold leading-tight">
              One Team
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-lg md:text-3xl font-medium font-['Roboto'] ">
              At Agyany, we build our culture from the power of the international team and the
              knowledge that together, we are better.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
