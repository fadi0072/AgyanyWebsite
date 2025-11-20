'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
  icon?: boolean;
  bgColor?: string; // hover background color
  textColor?: string; // normal text color
  borderColor?: string;
  hoverTextColor?: string; // text color on hover
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  icon = false,
  bgColor = '#ffffff',
  textColor = '#ffffff',
  borderColor = '#ffffff',
  hoverTextColor = '#000000',
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative overflow-hidden inline-flex items-center gap-3 px-6 py-3 text-base font-semibold font-['Plus_Jakarta_Sans'] rounded-[400px] border transition-all duration-700 ease-out group"
      style={{
        color: isHover ? hoverTextColor : textColor,
        borderColor: borderColor,
      }}
    >
      {/* Text */}
      <span className="relative z-10 transition-colors duration-700 ease-out">{text}</span>

      {/* Optional Icon */}
      {icon && <ArrowRight className="relative z-10 transition-colors duration-700 ease-out" />}

      {/* Hover Background */}
      <span
        className="absolute inset-0 w-[120%] scale-x-0 origin-left rounded-[400px] transition-all duration-700 ease-out group-hover:scale-x-100"
        style={{
          backgroundColor: bgColor,
        }}
      ></span>
    </Link>
  );
};

export default LinkButton;
