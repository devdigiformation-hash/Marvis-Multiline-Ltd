import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/components/CartContext';

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
  title: 'Marvis Multiline Ltd | Premium UK Multi-Category E-Commerce',
  description:
    'Marvis Multiline Ltd operates five premier divisions: Used Vehicle Sales, Transport Support, Hair & Beauty, Fashion Retail, and Household Products across the United Kingdom.',
  keywords: [
    'Marvis Multiline Ltd',
    'Used Vehicles UK',
    'Transport Support',
    'Haulage Logistics',
    'Mens Grooming',
    'Menswear Fashion',
    'Household Appliances UK',
  ],
  authors: [{ name: 'Marvis Multiline Ltd' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Marvis Multiline Ltd | UK Multi-Division Enterprise',
    description:
      'Explore verified pre-owned vehicles, UK freight transport, professional grooming, tailored menswear, and premium household essentials.',
    url: 'https://marvis-multiline.co.uk',
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
        <CartProvider>
          <Header />
          <main className="flex-1 pt-16 sm:pt-20">{children}</main>
          <CartDrawer />
          <WhatsAppButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
