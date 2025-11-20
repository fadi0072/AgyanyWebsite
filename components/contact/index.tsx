import SlideUp from '../animation';
import LinkButton from '../custom-btn';

const ContactSection = () => {
  return (
    <section
      className="relative min-h-[70vh] h-screen bg-cover bg-center w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/contact-bg.png')" }}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative z-10 max-w-3xl mx-auto md:mr-auto text-center md:text-start px-4 text-white">
          <SlideUp>
            <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
              Contact
            </div>
          </SlideUp>
          <SlideUp delay={0.2}>
            <h1 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Plus_Jakarta_Sans']">
              Get in Touch — <br className="hidden md:block" />
              We're Here to Help.
            </h1>
          </SlideUp>
          <SlideUp delay={0.4}>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#FFFFFF] font-medium font-['Roboto']">
              Whether you're a healthcare professional, researcher, or partner, our team is ready to
              answer your questions and explore how we can collaborate to advance Parkinson's
              innovation.
            </p>
          </SlideUp>
          <SlideUp delay={0.5}>
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <LinkButton
                text=" Contact Our Team"
                href="/contact"
                icon={true}
                textColor="#ffffff"
                hoverTextColor="#0A0E0D"
              />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
