'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote:
      'Joleen Istaiti is a remarkable example of a fine human being combined with an efficient and thoughtful member of the research community. She is a delightful person with whom to work and she will always bring something positive, forward-looking and new to the table. She is an asset to the research community and business and I am sure is to this company.',
    author: 'J.S, Australia',
  },
  {
    quote:
      'Joleen Istaiti is a remarkable example of a fine human being combined with an efficient and thoughtful member of the research community. She is a delightful person with whom to work and she will always bring something positive, forward-looking and new to the table. She is an asset to the research community and business and I am sure is to this company.',
    author: 'J.S, Australia',
  },
  {
    quote:
      'Joleen Istaiti is a remarkable example of a fine human being combined with an efficient and thoughtful member of the research community. She is a delightful person with whom to work and she will always bring something positive, forward-looking and new to the table. She is an asset to the research community and business and I am sure is to this company.',
    author: 'J.S, Australia',
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="custom-dots">{dots}</ul> {/* custom class */}
      </div>
    ),
  };

  return (
    <section className="relative bg-[url('/testimonials-bg.png')] bg-contain bg-no-repeat bg-bottom-left py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-20">
        <div className="mb-5 text-[#297F95] max-w-max mx-auto md:mx-0 font-['Plus_Jakarta_Sans'] text-base md:text-[18px] font-bold leading-normal rounded-[400px] bg-[#DEF5F7] px-4 md:px-6 py-2 md:py-3">
          Testimonials
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center hidden lg:flex"></div>

          <div className="lg:col-span-7 w-full">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="border p-4 md:p-8 lg:p-10 rounded-2xl border-[#FFF] bg-transparent backdrop-blur-[5.55px] min-h-[200px] md:h-[250px] lg:h-[273px] flex flex-col justify-between"
                >
                  <p className="text-[#10052F] font-['Plus_Jakarta_Sans'] text-base md:text-lg lg:text-[20px] pb-2 font-semibold">
                    "{t.quote}"
                  </p>
                  <p className="text-[#297F95] font-['Sofia_Sans'] text-base md:text-[18px] font-bold mt-auto">
                    {t.author}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
