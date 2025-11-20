import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Agyany Pharma - our mission, team, ethics, and cultural pillars. We align personal growth with organizational goals to achieve breakthroughs in Parkinson\'s disease treatment.',
  keywords: ['about Agyany', 'team', 'ethics', 'company culture', 'neuroscience company'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

