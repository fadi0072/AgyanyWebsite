'use client';
import SlideUp from '@/components/animation';
import LettersSlideUp from '@/components/animation/letter';
import HeroBanner from '@/components/banners/careers';
import ContactSection from '@/components/contact';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';
import { ArrowRight, Briefcase, Users, Target, Zap, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  useLenisScroll();
  
  const jobOpenings = [
    {
      title: 'Senior Research Scientist',
      department: 'Research & Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Clinical Research Coordinator',
      department: 'Clinical Operations',
      location: 'On-site',
      type: 'Full-time',
    },
    {
      title: 'Regulatory Affairs Specialist',
      department: 'Regulatory',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Hybrid',
      type: 'Full-time',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.',
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with a diverse, international team of experts.',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Be part of groundbreaking neuroscience research.',
    },
  ];

  return (
    <>
      <HeroBanner />

      {/* Why Join Us Section */}
      <section className="relative container mx-auto py-12 md:py-16 px-4 md:px-0 overflow-hidden">
        {/* Kangaroo Background Image with Blur */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
          <Image
            src="/kang.png"
            alt=""
            width={1000}
            height={1000}
            className="object-contain"
            style={{ 
              filter: 'blur(80px)',
              transform: 'scale(1.5)',
              opacity: 0.4
            }}
          />
        </div>
        <div className="mb-8 md:mb-10 relative z-10">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Why Join Agyany
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left">
              Build your career while making a meaningful impact on patients' lives.
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 relative z-10">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <Image
              src="/career.jpg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-[30px] font-semibold leading-[120%]">
                  A Mission-Driven Team
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  At Agyany, we're not just building a company—we're advancing neuroscience research to transform how Parkinson's disease is treated. Every team member plays a crucial role in bringing innovative therapies from concept to patients.
                </p>
              </SlideUp>
            </div>

            <Link
              href="#open-positions"
              className="inline-flex items-center px-4 md:px-6 gap-2 md:gap-3 py-2 md:py-3 max-w-max mx-auto lg:mx-0 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all hover:bg-black hover:text-white"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-[#DEF5F7] py-12 md:py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="mb-8 md:mb-10">
            <LettersSlideUp>
              <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 bg-white font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold rounded-[400px] px-4 md:px-6 py-2 md:py-3">
                Benefits & Perks
              </div>
            </LettersSlideUp>
            <SlideUp>
              <h2 className="text-[#10052F] max-w-[95%] md:max-w-[90%] lg:max-w-[70%] text-center mx-auto font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold">
                We Invest in Our People
              </h2>
            </SlideUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <SlideUp key={index} delay={index * 0.15}>
                <div className="flex flex-col items-start justify-between rounded-[24px] border border-[#FFF] bg-white backdrop-blur-[5.55px] min-h-[180px] md:h-[220px] pt-6 px-4 md:px-6 pb-6 md:pb-10">
                  <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-[#297F95] mb-4" />
                  <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-xl lg:text-[24px] font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#474747] font-['Roboto'] text-sm md:text-base font-normal">
                    {benefit.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="relative container mx-auto py-12 md:py-16 px-4 md:px-0">
        <div className="mb-8 md:mb-10">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Open Positions
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left">
              Join Our Growing Team
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {jobOpenings.map((job, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="rounded-[24px] border border-[#E5E5E5] bg-white p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-lg md:text-xl font-semibold mb-2">
                      {job.title}
                    </h3>
                    <p className="text-[#297F95] font-['Roboto'] text-sm md:text-base font-medium">
                      {job.department}
                    </p>
                  </div>
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#297F95] flex-shrink-0 ml-2" />
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                  <span className="text-[#474747] font-['Roboto'] text-xs md:text-sm px-2 md:px-3 py-1 bg-[#F5F5F5] rounded-full">
                    {job.location}
                  </span>
                  <span className="text-[#474747] font-['Roboto'] text-xs md:text-sm px-2 md:px-3 py-1 bg-[#F5F5F5] rounded-full">
                    {job.type}
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#297F95] font-['Plus_Jakarta_Sans'] text-sm font-semibold hover:underline"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative container mx-auto py-12 md:py-16 px-4 md:px-0">
        <div className="mb-8 md:mb-10">
          <LettersSlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Our Culture
            </div>
          </LettersSlideUp>
          <SlideUp>
            <h2 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl lg:text-[38px] font-semibold wrap-break-word leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent text-center md:text-left">
              Where Innovation Meets Collaboration
            </h2>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-5 order-2 lg:order-1">
            <div>
              <SlideUp>
                <h3 className="text-[#0A0A0A] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-[30px] font-semibold leading-[120%]">
                  Work That Matters
                </h3>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="text-black font-['Roboto'] text-base md:text-lg lg:text-[22px] font-normal my-4 md:my-5">
                  We foster an environment where curiosity thrives, ideas are valued, and every contribution moves us closer to our goal of transforming Parkinson's disease treatment. Our international team brings diverse perspectives that drive innovation.
                </p>
              </SlideUp>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-4 md:px-6 gap-2 md:gap-3 py-2 md:py-3 max-w-max mx-auto lg:mx-0 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-black rounded-[400px] border-[1.2px] border-black transition-all hover:bg-black hover:text-white"
            >
              Learn About Our Values
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
            <Image
              src="/career.jpg"
              alt="Team culture"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full shadow-lg"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Page;

