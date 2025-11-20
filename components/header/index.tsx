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
      if (window.scrollY > 500) {
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

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Patients', href: '/patient' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Pipeline', href: '/pipeline' },
    { label: 'Careers', href: '/careers' },
  ];

  // Header animation classes
  const headerClasses = `
    fixed top-2 md:top-10 left-1/2 transform -translate-x-1/2
    container mx-auto rounded-2xl bg-white backdrop-blur-md z-50
    transition-all duration-500 ease-in-out
    ${show === 'hide' ? '-translate-y-[120%] opacity-0' : 'translate-y-0 opacity-100'}
    ${show === 'top' ? 'shadow-none' : 'shadow-lg'}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-7 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide flex items-center">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-200 transition-all">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-medium hover:text-[#297F95]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 border border-gray-400 rounded-full text-sm font-medium hover:bg-[#297F95] hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
