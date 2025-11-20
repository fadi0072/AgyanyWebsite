'use client';
import SlideUp from '@/components/animation';
import LettersSlideUp from '@/components/animation/letter';
import HeroBanner from '@/components/banners/innovation';
import ContactSection from '@/components/contact';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';
import { Download } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />

      <section className="relative py-12 md:py-16 px-4 md:px-0">
        <div className="container mx-auto px-4 md:px-0 mb-0">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Vision
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left mb-0 pb-0">
              Combining excellent clinical understanding and patient centric programs with
              cutting-edge technologies for the development of new treatment for Parkinson disease
              requires exceptional performance at every level. A sustainable and responsible
              development and long-term growth strategy for our company will include criteria and
              metrics that demonstrate our commitment as a medical doctors, scientists and
              entrepreneurs ,including our commitment to patients, employees, customers, and
              investors, along with the communities where we work and live.
            </h2>
          </SlideUp>
        </div>
        <div className="relative w-full -mx-4 md:-mx-0 z-10 -mt-2 md:-mt-3 mb-4 md:mb-6">
          <Image
            src="/vision.png"
            alt="Vision"
            width={1200}
            height={1300}
            className="object-contain w-full md:w-[30%] h-auto relative z-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <Image
                src="/science.png"
                alt="Doctors analyzing brain scan"
                width={600}
                height={700}
                className="object-cover w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5">
              <div>
                <SlideUp>
                  <div className="mb-5 text-[#297F95] max-w-max mx-auto lg:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
                    Science
                  </div>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold font-['Plus_Jakarta_Sans'] wrap-break-word leading-6 md:leading-7">
                    We share our concepts for developing new treatments for patients with
                    Parkinson&apos;s disease (PD) with innovative research, aiming to advance
                    neuroscience breakthroughs into specialized medicines. The identification of the
                    link between mutations in the Gaucher gene, known as GBA1, responsible for
                    encoding the lysosomal enzyme glucocerebrosidase, and synucleinopathies,
                    directly emerged from the clinical recognition of Gaucher disease patients
                    exhibiting Parkinsonism. Mutations in the glucocerebrosidase gene (GBA1)
                    represent the most prevalent known genetic risk factor for PD.
                  </h2>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <h3 className="text-base md:text-lg lg:text-xl wrap-break-word font-normal font-['Roboto'] leading-6 md:leading-7">
                    Understanding the connection between glucocerebrosidase and alpha-synuclein has
                    led to novel therapeutic approaches for Gaucher disease andGBA1-related PD. This
                    insight highlights the role of the Endoplasmic Reticulum (ER) and the chronic
                    stress it undergoes due to the misfolding of the glucocerebrosidase enzyme
                    caused by mutations. Unlike current Gaucher disease treatments, new small
                    molecule therapies, including competitive and non-competitive chaperones like
                    ambroxol, aim to boost glucocerebrosidase.These drugs, demonstrated to enhance
                    glucocerebrosidase activity in various disease models, hold potential for
                    treating Gaucher disease and GBA1- related PD, and may even prevent the early
                    stages of PD development before symptoms arise.
                  </h3>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-16 mt-6 md:mt-10 px-4 md:px-0 bg-[url('/cards-bg.png')] bg-cover bg-center">
        <div className="relative container mx-auto">
          <div className="mb-12 md:mb-20 flex items-center justify-center">
            <div className="mb-5 text-[#297F95] max-w-max font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Academic collaborators
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
            <div className="col-span-1">
              <SlideUp delay={0.3}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] min-h-[180px] md:h-[250px] lg:h-[273px] pt-6 px-4 pb-6 md:pb-10">
                  <Image src="/p1.png" alt="Ambroxol" width={50} height={50} className="mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-base md:text-xl lg:text-[24px] font-semibold">
                    Ambroxol – GBA1 Variant Therapy
                  </h3>
                </div>
              </SlideUp>
            </div>
            <div className="col-span-1">
              <SlideUp delay={0.5}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] min-h-[180px] md:h-[250px] lg:h-[273px] pt-6 px-4 pb-6 md:pb-10">
                  <Image src="/p2.png" alt="AGPI-1" width={50} height={50} className="mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-base md:text-xl lg:text-[24px] font-semibold">
                    AGPI-1 (Discovery Stage)
                  </h3>
                </div>
              </SlideUp>
            </div>
            <div className="col-span-1">
              <SlideUp delay={0.7}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] min-h-[180px] md:h-[250px] lg:h-[273px] pt-6 px-4 pb-6 md:pb-10">
                  <Image src="/p3.png" alt="AGPI-2" width={50} height={50} className="mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-base md:text-xl lg:text-[24px] font-semibold">
                    AGPI-2 (Early Research)
                  </h3>
                </div>
              </SlideUp>
            </div>
            <div className="col-span-1">
              <SlideUp delay={0.9}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px] min-h-[180px] md:h-[250px] lg:h-[273px] pt-6 px-4 pb-6 md:pb-10">
                  <Image src="/p4.png" alt="Pipeline" width={50} height={50} className="mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-base md:text-xl lg:text-[24px] font-semibold">
                    See Our Pipeline
                  </h3>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto py-8 md:py-16 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 mb-12 md:mb-20">
          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5 order-2 lg:order-1">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-2xl md:text-[30px] font-semibold leading-[120%]">
                  Investors
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  Agyany is an innovation driven company that intends to develop cutting – edge
                  concepts for the treatment of Parkinson disease, mostly genetically based
                  etiologies. We are developing a corporate governance structure that is designed to
                  empower the senior executives to drive all business goals and create long term
                  value for our investors, while ensuring proper checks and balances to guarantee
                  transparency, integrity, and accountability for the way we implement our
                  strategies.
                </p>
              </SlideUp>
            </div>
          </div>
          <div className="relative md:max-w-lg mx-auto order-1 lg:order-2">
            <Image
              src="/investor.png"
              alt="Investors"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          <div className="relative max-w-lg mx-auto order-1 lg:order-1">
            <Image
              src="/partnering.png"
              alt="Partnering"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5 order-2 lg:order-2">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-2xl md:text-[30px] font-semibold leading-[120%]">
                  Partnering
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  Deep and honest relationships are at the core of our innovation ecosystem; it is a
                  system of co-creation. The Parkinson-treatment innovation program is based on
                  mutual respect for the expertise that each partner brings. Our research partners
                  bring unique knowledge of the biology of Parkinson disease. Agyany can contribute
                  its clinical and basic science skills in genetic neurodegenerative diseases and
                  provide a pathway to transform a breakthrough into a clinical development
                  candidate.
                </p>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/kang.png')] px-4 md:px-0 mb-10 bg-contain bg-no-repeat py-12 md:py-20 bg-center flex items-center justify-center">
        <div className="w-full mx-auto max-w-[95%] md:max-w-[669px] bg-[#E4F7F9] rounded-[16px] p-4 md:p-6">
          <div className="text-[#297F95] max-w-max bg-white mx-auto font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] px-4 md:px-6 py-2 md:py-3">
            Corporate Presentation
          </div>
          <div className="w-full pt-8 md:pt-16 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            <h2 className="text-[#0A0E0D] text-lg md:text-[24px] text-center font-semibold font-['Plus_Jakarta_Sans']">
              Investors Pitch
            </h2>
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 border border-[#0A0E0D] rounded-full text-[#0A0E0D] font-medium text-sm transition-all duration-300 hover:bg-[#0A0E0D] hover:text-white">
              Download <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Page;
