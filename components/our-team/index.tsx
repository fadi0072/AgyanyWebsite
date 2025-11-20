'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prof. Dr. Arndt Rolfs',
    title: 'Co-Founder and Chief Executive Officer',
    image: '/teams.png',
    description:
      'Prof. Dr. Arndt Rolfs is an experienced leader with a strong background in genetics, biotechnology, and executive management.',
  },
  {
    name: 'Prof. Dr. Ari Zimran',
    title: 'Business & Financial Operations Specialist',
    image: '/teams.png',
    description:
      'Prof. Dr. Ari Zimran is a renowned expert in business operations and strategic planning for global ventures.',
  },
  {
    name: 'Noel Mueller',
    title: 'Chief Financial Officer',
    image: '/teams.png',
    description:
      'Noel Mueller brings years of financial and strategic expertise to the executive team.',
  },
  {
    name: 'John Smith',
    title: 'Head of Research & Development',
    image: '/teams.png',
    description:
      'John leads the R&D team with a focus on innovation and cutting-edge solutions in life sciences.',
  },
  {
    name: 'Maria Gonzalez',
    title: 'Clinical Research Director',
    image: '/teams.png',
    description:
      'Maria oversees clinical research operations and ensures regulatory compliance across all global studies.',
  },
  {
    name: 'Dr. Lisa Brown',
    title: 'Chief Scientific Officer',
    image: '/teams.png',
    description:
      'Dr. Lisa Brown drives scientific strategy and innovation across our research initiatives.',
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Section Title */}

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2">
          <p className="text-[#297F95] text-2xl md:text-xl text-center md:text-left font-bold font-['Plus_Jakarta_Sans'] mb-6">
            Our Team
          </p>
        </div>
        {/* Grid */}
        <div className="col-span-12 md:col-span-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Image */}
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={240}
                    height={240}
                    className="rounded-[12px] object-cover"
                  />
                  {/* Arrow Button */}
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="absolute top-2 right-2 w-9 h-9 cursor-pointer flex items-center justify-center rounded-full border border-[#0A0E0D] text-[#0A0E0D] bg-white hover:bg-[#0A0E0D] hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Name & Title */}
                <h3 className="mt-4 text-[#0A0E0D] text-lg font-semibold font-['Plus_Jakarta_Sans']">
                  {member.name}
                </h3>
                <p className="text-[#007F8C] text-sm font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-[16px] max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 cursor-pointer text-gray-600 hover:text-black"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            <div className="flex flex-col   gap-4">
              <div className="flex gap-10 items-center justify-start">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={150}
                  height={150}
                  className="rounded-[12px] object-cover"
                />

                <div className="">
                  <h3 className="text-xl font-semibold text-[#0A0E0D]">{selectedMember.name}</h3>
                  <p className="text-[#007F8C] text-sm font-medium">{selectedMember.title}</p>
                </div>
              </div>
              <p className="text-[#555] text-base leading-relaxed mt-2">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
