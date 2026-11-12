import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ShieldCheck, ArrowUpRight, Wrench, Bike, Briefcase } from 'lucide-react';
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
                <strong className="text-white">Marvis Multiline Ltd</strong> — Independent UK Car Repairing & Bicycle Workshop Services.
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
                  Automotive & Bicycle Repair Services • UK
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Providing dependable vehicle diagnostics, brake and engine maintenance, routine servicing, and professional bicycle stand tune-ups, gear indexing, and brake servicing across the United Kingdom.
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

          {/* Core Repair Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Repair Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/car-repairing"
                  className="text-gray-300 hover:text-brand-gold transition-colors flex items-center group"
                >
                  <Wrench className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  <span>Car Repairing</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cycle-repairing"
                  className="text-gray-300 hover:text-brand-gold transition-colors flex items-center group"
                >
                  <Bike className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  <span>Cycle Repairing</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-brand-gold transition-colors flex items-center group"
                >
                  <Briefcase className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  <span>Careers / Jobs</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Contact & Bookings
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-brand-gold/80 hover:text-brand-gold transition-colors font-mono text-[11px]">
                  [Admin Ledger]
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
                  Service Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="p-3 rounded-lg bg-brand-navy-light/40 border border-white/5 text-[11px] text-gray-400 mt-3 leading-relaxed">
              Images and footage on this site are illustrative stock-style media. All mechanical repair quotes are subject to physical inspection.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-brand-navy-light/40 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {currentYear} Marvis Multiline Ltd. All rights reserved.</p>
          <p className="text-[11px]">
            Car & Cycle Repair Specialists • United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
