import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Agyany Pharma. Contact us for inquiries about our research, clinical trials, partnerships, or general information about Parkinson\'s disease treatments.',
  keywords: ['contact', 'inquiry', 'partnership', 'clinical trials contact', 'research collaboration'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

