'use client';

import Image from 'next/image';
import SlideUp from '../animation';

export default function PipelineSection() {
  return (
    <section className="py-12 md:py-16 mt-0 md:mt-10  bg-[url('/cards-bg.png')] bg-cover bg-center">
      <div className="relative container mx-auto px-4 md:px-0">
        <div className="mb-20">
          <SlideUp>
            <div className="mb-5 text-[#297F95] max-w-max  font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-6 py-3">
              Pipeline
            </div>
          </SlideUp>
          <SlideUp>
            <h2 className="text-[#10052F] font-['Plus_Jakarta_Sans'] text-2xl md:text-[38px] font-semibold mb-3">
              Our development pipeline is built on strong, evidence-based science focused on
              translating the core mechanisms of Parkinson’s disease into effective therapies.
            </h2>
          </SlideUp>
          <SlideUp>
            <p className="text-[#474747] font-['Roboto'] text-xl md:text-[28px] font-normal ">
              {' '}
              At Agyany Pharma, we are advancing first-in-class treatments, beginning with Ambroxol
              — a well-established compound now being studied for patients carrying the GBA1 genetic
              variant.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-12 gap-10 w-full">
          <div className="col-span-9 md:col-span-6  lg:col-span-3 ">
            <SlideUp delay={0.3}>
              <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] h-[200px] md:h-[273px] pt-6 px-4 pb-10">
                <Image src="/p1.png" alt="Ambroxol" width={50} height={50} className=" mb-4" />
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-[24px] font-semibold">
                  Ambroxol – GBA1 Variant Therapy
                </h3>
              </div>
            </SlideUp>
          </div>
          <div className="col-span-9 md:col-span-6  lg:col-span-3 ">
            <SlideUp delay={0.5}>
              <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] h-[200px] md:h-[273px] pt-6 px-4 pb-10">
                <Image src="/p2.png" alt="Ambroxol" width={50} height={50} className=" mb-4" />
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-[24px] font-semibold">
                  AGPI-1 (Discovery Stage)
                </h3>
              </div>
            </SlideUp>
          </div>
          <div className="col-span-9 md:col-span-6  lg:col-span-3 ">
            <SlideUp delay={0.7}>
              <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] h-[200px] md:h-[273px] pt-6 px-4 pb-10">
                <Image src="/p3.png" alt="Ambroxol" width={50} height={50} className=" mb-4" />
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-[24px] font-semibold">
                  AGPI-2 (Early Research)
                </h3>
              </div>
            </SlideUp>
          </div>
          <div className="col-span-9 md:col-span-6  lg:col-span-3 ">
            <SlideUp delay={0.9}>
              <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] h-[200px] md:h-[273px] pt-6 px-4 pb-10">
                <Image src="/p4.png" alt="Ambroxol" width={50} height={50} className=" mb-4" />
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-[24px] font-semibold">
                  See Our Pipeline
                </h3>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
