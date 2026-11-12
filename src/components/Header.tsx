'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  Wrench,
  Bike,
  Briefcase,
  Info,
  Mail,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Car Repairing', href: '/car-repairing', icon: Wrench },
    { name: 'Cycle Repairing', href: '/cycle-repairing', icon: Bike },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy-deep/95 backdrop-blur-md shadow-xl border-b border-brand-navy-light/60 py-2.5'
          : 'bg-brand-navy-deep/85 backdrop-blur-sm border-b border-brand-gold/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Preserves exact approved MARVIS MULTILINE LTD logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg p-1 shadow-md border border-brand-gold/40 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Marvis Multiline Ltd Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-200">
                MARVIS MULTILINE
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-gold uppercase">
                Car & Cycle Repair Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-gold bg-brand-navy-light/70 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Phone Call Link */}
            <a
              href={COMPANY_INFO.phoneHref}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-navy-light/60 hover:bg-brand-navy-light text-brand-gold border border-brand-gold/30 transition-colors"
              title="Call Marvis Multiline Ltd"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Direct Booking CTA */}
            <Link
              href="/contact?subject=service-booking"
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep transition-all duration-200 shadow-md shadow-brand-gold/20 flex items-center space-x-1.5"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Service</span>
              <span className="sm:hidden">Book</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-brand-navy-light/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy-deep border-b border-brand-gold/30 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon || Wrench;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-gold bg-brand-navy-light/70 font-semibold'
                      : 'text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light/40'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2.5 text-brand-gold" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-brand-navy-light/40 space-y-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg bg-brand-navy-light text-brand-gold font-bold text-xs border border-brand-gold/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <Link
                href="/contact?subject=service-booking"
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Service / Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
