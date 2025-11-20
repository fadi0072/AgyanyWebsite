import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patients',
  description: 'Your journey matters. Access patient resources, clinical trials, and support for Parkinson\'s disease. Agyany Pharma is committed to developing innovative treatments that bring hope and improve lives.',
  keywords: ['patient resources', 'clinical trials', 'Parkinson\'s disease patients', 'patient support', 'clinical research participation'],
};

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

