import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Agyany Pharma in our mission to transform neuroscience research into life-changing treatments. Explore career opportunities, benefits, and our collaborative culture.',
  keywords: ['careers', 'jobs', 'biotechnology careers', 'pharmaceutical jobs', 'neuroscience careers', 'research positions'],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

