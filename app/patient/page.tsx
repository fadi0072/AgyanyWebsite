'use client';
import SlideUp from '@/components/animation';
import LettersSlideUp from '@/components/animation/letter';
import HeroBanner from '@/components/banners/patient';
import ContactSection from '@/components/contact';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';
import { ArrowRight, Heart, Users, FileText, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />

      {/* Patient Resources Section */}
      <section className="relative container mx-auto py-12 md:py-16 px-4 md:px-0">
        <div className="mb-8 md:mb-10">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Patient Resources
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left">
              Empowering patients and families with information, support, and access to innovative treatments.
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <Image
              src="/teams.png"
              alt="Patient support"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-[30px] font-semibold leading-[120%]">
                  Your Health Journey
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  We understand that living with Parkinson's disease affects not just patients, but entire families. Our patient-centric approach ensures that every treatment we develop is designed with your needs, comfort, and quality of life in mind.
                </p>
              </SlideUp>
            </div>

            <Link
              href="#clinical-trials"
              className="inline-flex items-center px-4 md:px-6 gap-2 md:gap-3 py-2 md:py-3 max-w-max mx-auto lg:mx-0 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all hover:bg-black hover:text-white"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Trials Section */}
      <section className="relative bg-[#DEF5F7] py-12 md:py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="mb-8 md:mb-10">
            <LettersSlideUp>
              <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 bg-white font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold rounded-[400px] px-4 md:px-6 py-2 md:py-3">
                Clinical Trials
              </div>
            </LettersSlideUp>
            <SlideUp>
              <h2 className="text-[#10052F] max-w-[95%] md:max-w-[90%] lg:max-w-[70%] text-center mx-auto font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold">
                Participate in Groundbreaking Research
              </h2>
            </SlideUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Search,
                title: 'Find Trials',
                description: 'Discover clinical trials that may be right for you or your loved one.',
              },
              {
                icon: FileText,
                title: 'Learn More',
                description: 'Understand what participation in clinical trials involves and what to expect.',
              },
              {
                icon: Heart,
                title: 'Patient Support',
                description: 'Access resources and support throughout your treatment journey.',
              },
            ].map((item, index) => (
              <SlideUp key={index} delay={index * 0.2}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-white backdrop-blur-[5.55px] min-h-[200px] md:h-[250px] pt-6 px-4 md:px-6 pb-6 md:pb-10">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#297F95] mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-xl lg:text-[24px] font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#474747] font-['Roboto'] text-sm md:text-base font-normal">
                    {item.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className="relative container mx-auto py-12 md:py-16 px-4 md:px-0">
        <div className="mb-8 md:mb-10">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Patient Stories
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left">
              Real stories from real patients. Your journey inspires our research.
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5 order-2 lg:order-1">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-[30px] font-semibold leading-[120%]">
                  Hope Through Innovation
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  Every breakthrough starts with understanding the patient experience. We listen to your stories, learn from your challenges, and channel that knowledge into developing treatments that truly make a difference.
                </p>
              </SlideUp>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 md:px-6 gap-2 md:gap-3 py-2 md:py-3 max-w-max mx-auto lg:mx-0 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all hover:bg-black hover:text-white"
            >
              Share Your Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
            <Image
              src="/testimonials.png"
              alt="Patient testimonials"
              width={600}
              height={400}
              className="object-cover w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Page;

