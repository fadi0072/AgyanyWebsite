import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-4 md:px-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid bg-white grid-cols-12 gap-6 md:gap-0">
          <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <img src="/footer-logo.png" alt="FlowBite Logo" className="w-auto h-auto max-w-[200px]" />
            </Link>

            <h6
              className="text-sm my-4 font-medium font-['Plus_Jakarta_Sans'] text-[#10052F]"
            >
              Follow us
            </h6>
            <a
              href="#research"
              className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] text-[#297F95] rounded-[400px] border-[1.2px] border-[#297F95] transition-all hover:bg-[#297F95] hover:text-white"
            >
              <img src="/linkedin-icon.png" alt="" className="w-5 h-5" />
              Linkedin
            </a>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 mb-6 md:mb-0">
            <h2 className="mb-3 mt-4 md:mt-8 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#10052F]">
              Navigation
            </h2>
            <ul className="text-base md:text-lg font-bold font-['Plus_Jakarta_Sans'] text-[#0A0A0A]">
              <li className="mb-3 md:mb-4">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-3 md:mb-4">
                <Link href="/patient" className="hover:underline">
                  Patients
                </Link>
              </li>
              <li className="mb-3 md:mb-4">
                <Link href="/innovation" className="hover:underline">
                  Innovation
                </Link>
              </li>
              <li className="mb-3 md:mb-4">
                <Link href="/pipeline" className="hover:underline">
                  Pipeline
                </Link>
              </li>
              <li className="mb-3 md:mb-4">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 mb-6 md:mb-0">
            <h2 className="mb-3 mt-4 md:mt-8 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#10052F]">
              Contact Information
            </h2>
            <ul className="text-sm md:text-base lg:text-lg font-bold font-['Plus_Jakarta_Sans'] text-[#0A0A0A]">
              <li className="mb-3 md:mb-4 break-words">
                <a href="tel:+972526659995" className="hover:underline">
                  +972 52 6659995
                </a>
              </li>
              <li className="mb-3 md:mb-4 break-words">
                <a href="mailto:Doreen.Niemann@agyanypharma.com" className="hover:underline">
                  Doreen.Niemann@agyanypharma.com
                </a>
              </li>
              <li className="mb-3 md:mb-4 break-words">
                <a href="" className="hover:underline capitalize">
                  Hadishon 14, Jerusalem, Israel
                </a>
              </li>
              <li className="mb-3 md:mb-4 break-words">
                <a href="" className="hover:underline">
                  Chamerstrasse 174, 6300 Zug, Switzerland
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6]">
        <div className="mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-screen-xl p-4 py-6 lg:py-8 gap-4">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-0 text-xs sm:text-sm font-medium text-[#474747] font-['Roboto']">
            <li>
              <a href="#" className="hover:underline me-0 sm:me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-0 sm:me-4 md:me-6">
                Imprint
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-center sm:text-start font-medium font-['Roboto'] text-[#474747]">
            ©All rights reserved to Agyany Pharma LTD 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
