'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';

export default function AboutSection() {
  return (
    <section className="relative container mx-auto py-16 px-4 md:px-0 ">
      <div className="mb-10">
        <LettersSlideUp>
          <div className="mb-5 text-[#297F95] max-w-max  font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-6 py-3">
            About Us
          </div>
        </LettersSlideUp>
        <SlideUp>
          <h2
            className="font-['Plus_Jakarta_Sans']  
                 text-xl md:text-[38px] 
                 font-semibold leading-[120%] 
                 bg-linear-to-r
                 from-[#10052F] to-[#297F95] 
                 bg-clip-text text-transparent"
          >
            "Empowering lives through innovative neuroscience solutions, Agyany is dedicated to
            redefining Parkinson&apos;s disease treatment and delivering hope to patients
            worldwide."
          </h2>
        </SlideUp>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
        {/* Left Side: Image */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <Image
            src="/who-we-are.png"
            alt="Doctors analyzing brain scan"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center md:text-center lg:text-left space-y-5">
          <div>
            <LettersSlideUp>
              <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-[30px] font-semibold leading-[120%]">
                Who We Are
              </h3>
            </LettersSlideUp>
            <SlideUp>
              <p className="text-black font-['Roboto'] text-xl md:text-[22px] font-normal  my-5">
                Agyany Pharma is pioneering neuroscience research with a singular mission: to
                deliver accessible, effective, and targeted therapies for Parkinson’s disease.
              </p>
            </SlideUp>
          </div>

          <Link
            href="#research"
            className="inline-flex items-center px-6 gap-3 py-3 max-w-max text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all"
          >
            Discover Our Journey
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
