import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation',
  description: 'Pioneering breakthroughs in Parkinson\'s disease treatment through scientific innovation. Discover our vision, science, and collaborative approach to advancing neuroscience.',
  keywords: ['innovation', 'scientific research', 'Parkinson\'s disease treatment', 'neuroscience innovation', 'GBA1 gene', 'medical research'],
};

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

