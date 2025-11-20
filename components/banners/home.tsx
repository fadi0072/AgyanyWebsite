'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
import LinkButton from '../custom-btn';

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen h-screen rounded-b-2xl md:rounded-b-4xl pt-20 md:pt-0 px-4 md:px-0 w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute rounded-b-2xl md:rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10 max-w-3xl mx-auto md:mr-auto text-center md:text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Roboto'] font-semibold leading-tight">
              We see beyond symptoms.
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Roboto']">
              Combining excellent clinical understanding and patient centric programs with
              cutting-edge technologies for the development of new treatments for Parkinson disease
              and related disorders.
            </p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <LinkButton
                text="Explore Our Research"
                href="#research"
                icon={true}
                textColor="#ffffff"
                hoverTextColor="#0A0E0D"
              />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
