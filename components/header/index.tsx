'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState<'top' | 'show' | 'hide'>('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      // On mobile, reduce the scroll threshold
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 200 : 500;

      if (window.scrollY > threshold) {
        if (window.scrollY > lastScrollY) {
          setShow('hide');
        } else {
          setShow('show');
        }
      } else {
        setShow('top');
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('header')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Patients', href: '/patient' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Pipeline', href: '/pipeline' },
    { label: 'Careers', href: '/careers' },
  ];

  // Header animation classes
  const headerClasses = `
    fixed top-2 sm:top-4 md:top-10 left-1/2 transform -translate-x-1/2
    container mx-auto rounded-lg sm:rounded-xl md:rounded-2xl bg-white backdrop-blur-md z-50
    transition-all duration-500 ease-in-out
    ${show === 'hide' ? '-translate-y-[120%] opacity-0' : 'translate-y-0 opacity-100'}
    ${show === 'top' ? 'shadow-none' : 'shadow-lg'}
    w-[95%] sm:w-[90%] md:w-full
    ${menuOpen ? 'shadow-xl' : ''}
  `;

  return (
    <header className={headerClasses}>
<div className="max-w-7xl mx-auto px-3 sm:px-3 md:px-4 py-0 flex justify-between items-center">
{/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide flex items-center shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            width={60}
            height={60}
            alt="logo"
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-lg font-semibold font-['Plus_Jakarta_Sans'] px-6 transition-colors ${
                  isActive ? 'text-[#297F95]' : 'text-[#0A0A0A] hover:text-[#297F95]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="text-base hidden md:flex font-semibold font-['Plus_Jakarta_Sans'] text-[#10052F] rounded-[400px] border-[1.2px] border-[#10052F] py-3 px-6 transition-all"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#297F95] focus:ring-offset-2"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 my-1 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-stretch py-4 space-y-1 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold font-['Plus_Jakarta_Sans'] transition-all py-3 px-4 rounded-lg text-center ${
                  isActive
                    ? 'text-[#297F95] bg-[#DEF5F7]'
                    : 'text-gray-800 hover:text-[#297F95] hover:bg-gray-50 active:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-3 border-[1.2px] border-[#10052F] rounded-full text-base font-semibold font-['Plus_Jakarta_Sans'] text-[#10052F] hover:bg-[#297F95] hover:text-white hover:border-[#297F95] transition-all active:scale-95 text-center"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
