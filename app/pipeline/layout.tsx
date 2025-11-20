import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pipeline',
  description: 'Agyany is developing first-in-class therapies for Parkinson\'s disease, starting with Ambroxol. Explore our development pipeline and research stages.',
  keywords: ['drug pipeline', 'Ambroxol', 'GBA1 variant therapy', 'Parkinson\'s disease treatment', 'clinical development', 'AGPI-1', 'AGPI-2'],
};

export default function PipelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

