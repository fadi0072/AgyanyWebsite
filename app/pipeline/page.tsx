'use client';
import HeroBanner from '@/components/banners/pipeline';
import ContactSection from '@/components/contact';
import ProgressStages from '@/components/pipeline/stage';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';
import { ArrowRight } from 'lucide-react';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />
      <section className="bg-center flex items-center justify-center px-4 md:px-0">
        <div className="bg-[url('/pipline-kang.png')] mt-12 md:mt-20 bg-top bg-no-repeat bg-contain md:bg-auto">
          <div className="w-full mx-auto max-w-[95%] md:max-w-[90%] lg:max-w-[70%] px-4 mb-12 md:mb-25 pt-8 md:pt-10">
            <h2 className="font-['Plus_Jakarta_Sans'] text-center text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent">
              Agyany is developing first-in-class therapies for Parkinson's disease, starting with a
              well-known and proven drug, ambroxol.
            </h2>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto py-8 md:py-16 px-4 md:px-0 bg-[#DEF5F7] rounded-2xl md:rounded-3xl mb-5 md:mb-20">
        <div className="flex justify-center items-center flex-col gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="text-[#297F95] max-w-max bg-white font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] px-4 md:px-6 py-2 md:py-3">
            Our pipeline
          </div>

          <h2 className="text-[#10052F] max-w-[95%] md:max-w-[90%] lg:max-w-[70%] text-center font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold">
            Pioneering Breakthroughs in Parkinson's Disease Treatment through Scientific
            Innovation
          </h2>

          <ProgressStages />
        </div>
      </section>

      <section className="bg-[url('/refrence-bg.png')] py-12 md:py-20 px-4 md:px-0 bg-center min-h-[60vh] md:h-screen bg-cover bg-no-repeat">
        <div className="container mx-auto py-12 md:py-20">
          <div className="mb-6 md:mb-8 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
            References
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
            <div className="col-span-1">
              <div className="min-h-[200px] md:h-[250px] flex flex-col items-start justify-between px-4 md:px-5 py-3 rounded-[24px] border border-[var(--Neutral-s50,#FFF)] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
                <div className="flex items-center justify-between w-full mb-4">
                  <h6 className="text-base md:text-lg text-[#38C1CD] font-semibold font-['Plus_Jakarta_Sans'] leading-5">
                    2022
                  </h6>
                  <button className="w-8 h-8 md:w-9 md:h-9 cursor-pointer flex items-center justify-center rounded-full border border-[#0A0E0D] text-[#0A0E0D] bg-white hover:bg-[#0A0E0D] hover:text-white transition-all duration-300" aria-label="View reference">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                <div>
                  <p className="text-base md:text-lg lg:text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-6 md:leading-7">
                    Increased incidence of Parkinson disease among relatives of patients with
                    Gaucher disease
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="min-h-[200px] md:h-[250px] flex flex-col items-start justify-between px-4 md:px-5 py-3 rounded-[24px] border border-[var(--Neutral-s50,#FFF)] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
                <div className="flex items-center justify-between w-full mb-4">
                  <h6 className="text-base md:text-lg text-[#39C1CD] font-semibold font-['Plus_Jakarta_Sans'] leading-5">
                    2006
                  </h6>
                  <button className="w-8 h-8 md:w-9 md:h-9 cursor-pointer flex items-center justify-center rounded-full border border-[#0A0E0D] text-[#0A0E0D] bg-white hover:bg-[#0A0E0D] hover:text-white transition-all duration-300" aria-label="View reference">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                <div>
                  <p className="text-base md:text-lg lg:text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-6 md:leading-7">
                    Increased incidence of Parkinson disease among relatives of patients with
                    Gaucher disease
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Page;
