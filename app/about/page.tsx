'use client';
import SlideUp from '@/components/animation';
import LettersSlideUp from '@/components/animation/letter';
import HeroBanner from '@/components/banners/about';
import ContactSection from '@/components/contact';
import CulturalPillarSection from '@/components/cultural-pillar';
import TeamSection from '@/components/our-team';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />
      <section className="relative container mx-auto py-16  ">
        <div className="mb-10 px-4 md:px-0 ">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-6 py-3">
              About Us
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg md:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent">
              We know that each individual performance contributes to the broader purpose. We align
              the personal growth of our employees with the shared goals of the organization. We
              work hard to identify how each employee can contribute to achieving the unthinkable;
              we stand together building on each other’s strengths. We believe in empowerment.
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 md:px-0">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <Image
              src="/ethics.png"
              alt="Doctors analyzing brain scan"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>

          <div className="flex flex-col justify-center text-left space-y-5">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-2xl md:text-[30px] font-semibold leading-[120%]">
                  Ethics and responsibility
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-[22px] font-normal  my-5">
                  At Agyany, together we are on a path to achieve the best solutions for our
                  patients. We are all working hard to build an integrated neuroscience company and
                  reach patients. In doing so, we are committed to doing things the right way. When
                  each of us acts with honesty and integrity, we gain the trust of our colleagues,
                  patients, and communities. Each of us contributes to our reputation by living our
                  core values every day and making the best decisions for Agyany and the many people
                  we serve.
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

      <TeamSection />
      <CulturalPillarSection />
      <ContactSection />
    </>
  );
};

export default Page;
