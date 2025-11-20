'use client';
import HeroBanner from '@/components/banners/contact';
import ContactSection from '@/components/contact/form';
import { useLenisScroll } from '@/hooks/use-lenis-scroll';

const Page = () => {
  useLenisScroll();
  return (
    <>
      <HeroBanner />
      <ContactSection />
    </>
  );
};

export default Page;
