import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/animation/top';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Agyany Pharma - Pioneering Neuroscience Research for Parkinson\'s Disease',
    template: '%s | Agyany Pharma'
  },
  description: 'Agyany Pharma is pioneering neuroscience research with a singular mission: to deliver accessible, effective, and targeted therapies for Parkinson\'s disease. Join us in transforming lives through innovative treatments.',
  keywords: ['Parkinson\'s disease', 'neuroscience research', 'GBA1 gene', 'Ambroxol', 'clinical trials', 'biotechnology', 'pharmaceutical research', 'neurological disorders'],
  authors: [{ name: 'Agyany Pharma' }],
  creator: 'Agyany Pharma',
  publisher: 'Agyany Pharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agyany.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agyany.com',
    siteName: 'Agyany Pharma',
    title: 'Agyany Pharma - Pioneering Neuroscience Research for Parkinson\'s Disease',
    description: 'Agyany Pharma is pioneering neuroscience research with a singular mission: to deliver accessible, effective, and targeted therapies for Parkinson\'s disease.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agyany Pharma - Pioneering Neuroscience Research',
    description: 'Transforming Parkinson\'s disease treatment through innovative neuroscience research.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className={`${plusJakartaSans.variable} ${roboto.variable} antialiased`}>
        <ScrollToTop />
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
