import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-4 md:px-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid bg-white grid-cols-12">
          <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src="/footer-logo.png" alt="FlowBite Logo" />
            </Link>

            <h6
              className="text-sm my-2
font-medium
font-['Plus_Jakarta_Sans'] text-[#10052F]"
            >
              Follow us
            </h6>
            <a
              href="#research"
              className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold font-['Plus_Jakarta_Sans'] text-[#297F95] rounded-[400px] border-[1.2px] border-[#297F95] transition-all"
            >
              <img src="/linkedin-icon.png" alt="" />
              Linkedin
            </a>
          </div>
          <div className="col-span-12 md:col-span-2">
            <h2 className="mb-3 mt-8 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#10052F]">
              Navigation
            </h2>
            <ul className="text-md md:text-lg font-bold font-['Plus_Jakarta_Sans'] text-[#0A0A0A]">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Patients
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Innovation
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Pipeline
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <h2 className="mb-3 mt-8 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#10052F]">
              Contact Information
            </h2>
            <ul className="text-md md:text-lg font-bold font-['Plus_Jakarta_Sans'] text-[#0A0A0A]">
              <li className="mb-4">
                <a href="" className="hover:underline ">
                  +972 52 6659995
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Doreen.Niemann@agyanypharma.com
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline capitalize">
                  Hadishon 14, Jerusalem, Israel
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Chamerstrasse 174, 6300 Zug, Switzerland
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-[#F6F6F6] ">
        <div className="mx-auto   sm:flex sm:items-center sm:justify-between w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <ul className="flex flex-wrap items-center justify-center md:justify-start mb-6 text-sm font-medium text-[#474747] font-['Roboto'] sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Imprint
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
          </ul>
          <p className="text-sm text-center md:text-start font-medium font-['Roboto'] text-[#474747]">
            ©All rights reserved to Agyany Pharma LTD 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
