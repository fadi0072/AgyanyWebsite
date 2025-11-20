import SlideUp from '../animation';
import LinkButton from '../custom-btn';

const ContactSection = () => {
  return (
    <section
      className="relative h-screen  bg-cover bg-center w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/contact-bg.png')" }} // 🔹 change this path to your actual image
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative z-10  max-w-3xl mr-auto text-start px-4 text-white">
          <SlideUp>
            <div className="mb-5 text-[#297F95] max-w-max  font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-6 py-3">
              Contact
            </div>
          </SlideUp>
          <SlideUp delay={0.2}>
            <h1 className="text-[#FFFFFF] text-2xl md:text-5xl font-semibold font-['Plus_Jakarta_Sans']">
              Get in Touch — <br className="hidden md:block" />
              We’re Here to Help.
            </h1>
          </SlideUp>
          <SlideUp delay={0.4}>
            <p className="mt-4 text-lg md:text-3xl text-[#FFFFFF] font-medium font-['Roboto']">
              Whether you’re a healthcare professional, researcher, or partner, our team is ready to
              answer your questions and explore how we can collaborate to advance Parkinson’s
              innovation.
            </p>
          </SlideUp>
          <SlideUp delay={0.5}>
            <div className="mt-8">
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
