'use client';

import Image from 'next/image';
import SlideUp from '../animation';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InnovationSection() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -100,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative container mx-auto py-16 pb-42 bg-[#DEF5F7]">

      {/* Heading */}
      <div className="flex justify-center items-center flex-col gap-6 mb-10">
        <SlideUp>
          <div className="text-[#297F95] max-w-max bg-white font-['Plus_Jakarta_Sans'] text-[18px] font-bold rounded-[400px] px-6 py-3">
            Innovation
          </div>
        </SlideUp>

        <SlideUp>
          <h2 className="text-[#10052F] max-w-[85%] md:max-w-[70%] mx-auto text-center font-['Plus_Jakarta_Sans'] text-xl md:text-[38px] font-semibold">
            Pioneering Breakthroughs in Parkinson's Disease Treatment through Scientific Innovation
          </h2>
        </SlideUp>
      </div>

      {/* Sticky Sections */}
      <div className="relative">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full min-h-screen sticky-section"
          >
            {/* Left Image */}
            <div className="relative w-[70%] md:w-full text-center max-w-md mx-auto">
             <Image
                src={`/innovation-${item}.png`}
                alt={`brain scan ${item}`}
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>

            {/* Right Text */}
            <div className="flex flex-col justify-center text-center lg:text-left space-y-5">
              <div className="max-w-[85%] md:max-w-[70%] mx-auto">
                <h3 className="text-[#0A0A0A] mb-3 font-['Plus_Jakarta_Sans'] text-2xl md:text-[30px] font-semibold">
                 Discovery
                </h3>

                <p className="text-[#474747] font-['Roboto'] text-xl md:text-[22px] font-normal">
                  Our journey starts in the genome — uncovering the GBA1 gene and its link to Parkinson’s disease.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
