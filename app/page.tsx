'use client';
import AboutSection from '@/components/about';
import HeroBanner from '@/components/banners/home';
import ContactSection from '@/components/contact';
import InnovationSection from '@/components/innovation';
import PipelineSection from '@/components/pipeline';
import Testimonials from '@/components/testimonials';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <InnovationSection />
      <PipelineSection />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Page;
