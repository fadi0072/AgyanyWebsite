import SlideUp from '../animation';
import LettersSlideUp from '../animation/letter';

const CulturalPillarSection = () => {
  return (
    <section className="relative bg-[url('/about-group.png')] bg-cover bg-no-repeat bg-center py:12  md:py-36 ">
      <div className="flex justify-center items-center max-w-[90%]  md:max-w-[80%]  mx-auto flex-col gap-6 mb-10 rounded-[24px] border py-20 border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
        <LettersSlideUp>
          <div className="text-[#297F95] max-w-max bg-white  font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-normal rounded-[400px]  px-6 py-3">
            Cultural Pillars
          </div>
        </LettersSlideUp>
        <SlideUp>
          <h2 className="text-[#10052F]  text-center font-['Plus_Jakarta_Sans'] text-lg md:text-[38px] font-semibold ">
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
