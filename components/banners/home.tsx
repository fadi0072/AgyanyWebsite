'use client';

import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';
import LinkButton from '../custom-btn';

const HeroBanner = () => {
  return (
    <section className="relative h-screen  rounded-b-4xl pt-10 md:pt-0 px-4 md:px-0 w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute rounded-b-4xl inset-0 w-full h-full object-cover"
        src="/banner.mp4" // place your video file in /public/videos/
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="relative z-10  max-w-3xl mr-auto text-start px-4 text-white">
          <LettersSlideUp>
            <h1 className="text-2xl md:text-5xl  font-['Roboto'] font-semibold leading-tight">
              We see beyond symptoms.
            </h1>
          </LettersSlideUp>
          <SlideUp>
            <p className="mt-4 text-xl md:text-3xl font-medium font-['Roboto'] ">
              Combining excellent clinical understanding and patient centric programs with
              cutting-edge technologies for the development of new treatments for Parkinson disease
              and related disorders.
            </p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <div className="mt-8">
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
