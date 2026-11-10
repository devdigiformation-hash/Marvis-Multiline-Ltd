import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep border-t border-brand-navy-light/60 text-gray-300">
      {/* Brand highlight banner */}
      <div className="border-b border-brand-navy-light/40 py-8 bg-gradient-to-r from-brand-navy-dark via-brand-navy-deep to-brand-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0" />
              <p className="text-sm text-gray-200">
                <strong className="text-white">Marvis Multiline Ltd</strong> — Verified UK Commercial Operations across 5 Integrated Divisions.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="text-xs font-semibold text-brand-gold hover:underline flex items-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                {COMPANY_INFO.phone}
              </a>
              <span className="text-gray-600">|</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs font-semibold text-brand-gold hover:underline flex items-center"
              >
                <Mail className="w-3.5 h-3.5 mr-1" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 shadow-md border border-brand-gold/40 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Marvis Multiline Ltd"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  MARVIS MULTILINE LTD
                </span>
                <p className="text-xs text-brand-gold font-medium">
                  Multi-Category Enterprise • United Kingdom
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Delivering verified pre-owned vehicles, nationwide transport support, professional men&apos;s grooming, tailored menswear, and essential household goods with rigorous UK operational standards.
            </p>

            <div className="pt-2 text-xs space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Business Divisions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              5 Operating Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY_INFO.divisions.map((div) => (
                <li key={div.slug}>
                  <Link
                    href={`/${div.slug}`}
                    className="text-gray-300 hover:text-brand-gold transition-colors flex items-center group"
                  >
                    <span>{div.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick & Commercial Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Unified Catalogue
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About Our Operations
                </Link>
              </li>
              <li>
                <Link href="/transport-support#quote" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Transport Quote Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Direct Enquiry & Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-brand-gold/80 hover:text-brand-gold transition-colors font-mono text-[11px]">
                  [Admin Portal Preview]
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Privacy Policy & Data
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Commercial Terms of Sale
                </Link>
              </li>
            </ul>
            <div className="p-3 rounded-lg bg-brand-navy-light/40 border border-white/5 text-[11px] text-gray-400 mt-3 leading-relaxed">
              All vehicle and freight quotes are subject to physical check and formal confirmation prior to contractual binding.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-brand-navy-light/40 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {currentYear} Marvis Multiline Ltd. All rights reserved.</p>
          <p className="text-[11px]">
            Designed & Engineered with Cinematic Scroll Sequence Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}
