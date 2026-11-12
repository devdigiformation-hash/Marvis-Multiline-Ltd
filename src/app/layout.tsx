import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marvis-multiline-ltd.vercel.app'),
  title: 'Marvis Multiline Ltd | Automotive & Bicycle Repair Specialists UK',
  description:
    'Marvis Multiline Ltd provides dedicated car inspections, engine diagnostics, vehicle maintenance, and professional bicycle stand repairs across the United Kingdom.',
  keywords: [
    'Marvis Multiline Ltd',
    'Car Repairing UK',
    'Engine Diagnostics',
    'Brake Servicing',
    'Vehicle Maintenance',
    'Cycle Repairing UK',
    'Bicycle Mechanic',
    'Gear Indexing',
    'Bike Safety Check',
  ],
  authors: [{ name: 'Marvis Multiline Ltd' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Marvis Multiline Ltd | Car & Cycle Repair Specialists',
    description:
      'Independent automotive diagnostics, routine car maintenance, and professional bicycle workshop repairs in the UK.',
    url: 'https://marvis-multiline-ltd.vercel.app',
    siteName: 'Marvis Multiline Ltd',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Marvis Multiline Ltd',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#001F49',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} dark`}>
      <body className="bg-brand-surface-dark text-slate-100 antialiased selection:bg-brand-gold selection:text-brand-navy-deep min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
