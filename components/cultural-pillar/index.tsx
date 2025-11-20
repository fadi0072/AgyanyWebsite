import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';

const CulturalPillarSection = () => {
  return (
    <section className="relative bg-[url('/about-group.png')] bg-cover bg-no-repeat bg-center py-12 md:py-24 lg:py-36 px-4 md:px-0">
      <div className="flex justify-center items-center max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto flex-col gap-4 md:gap-6 mb-8 md:mb-10 rounded-[24px] border py-12 md:py-16 lg:py-20 border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
        <LettersSlideUp>
          <div className="text-[#297F95] max-w-max bg-white font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] px-4 md:px-6 py-2 md:py-3">
            Cultural Pillars
          </div>
        </LettersSlideUp>
        <SlideUp>
          <h2 className="text-[#10052F] text-center font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[38px] font-semibold px-4">
            We thrive on curiosity and trust in the power of the team that helps us find
            breakthroughs in the development of treatment of Parkinson disease. We are inspired by
            patients to turn these breakthroughs into innovation and support. The resilience and
            hope of patients give us a goal that enables us to work with urgency, knowing that they
            are waiting.
          </h2>
        </SlideUp>
      </div>
    </section>
  );
};

export default CulturalPillarSection;
