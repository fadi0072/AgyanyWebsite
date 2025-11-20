'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] px-4 md:px-0 rounded-b-4xl w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/patientmain.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10  max-w-3xl mr-auto text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl md:text-5xl  font-['Roboto'] font-semibold leading-tight">
              Patients
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-lg md:text-3xl font-medium font-['Roboto'] ">
              Your journey matters. We're committed to developing innovative treatments that bring hope and improve lives for those affected by Parkinson's disease.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

