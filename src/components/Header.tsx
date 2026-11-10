'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  ShoppingBag,
  ChevronDown,
  Car,
  Truck,
  Sparkles,
  Shirt,
  Home,
  ShieldCheck,
  Search
} from 'lucide-react';
import { useCart } from './CartContext';
import { COMPANY_INFO } from '@/data/catalogue';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

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
    setIsDropdownOpen(false);
  }, [pathname]);

  const navDivisions = [
    { name: 'Used Vehicles', href: '/used-vehicles', icon: Car, desc: 'Quality UK inventory & viewings' },
    { name: 'Transport Support', href: '/transport-support', icon: Truck, desc: 'Nationwide freight & quotes' },
    { name: 'Hair & Beauty', href: '/hair-beauty', icon: Sparkles, desc: "Men's grooming essentials" },
    { name: 'Fashion Retail', href: '/fashion', icon: Shirt, desc: "Tailored men's apparel" },
    { name: 'Household Products', href: '/household', icon: Home, desc: 'Appliances, cookware & storage' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy-deep/95 backdrop-blur-md shadow-xl border-b border-brand-navy-light/60 py-2.5'
          : 'bg-brand-navy-deep/80 backdrop-blur-sm border-b border-brand-gold/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Preserves exact uploaded logo */}
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
                Limited • UK Multi-Division
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-brand-gold bg-brand-navy-light/60' : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
              }`}
            >
              Home
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  navDivisions.some((d) => pathname.startsWith(d.href))
                    ? 'text-brand-gold bg-brand-navy-light/60'
                    : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
                }`}
                aria-expanded={isDropdownOpen}
              >
                <span>5 Operating Divisions</span>
                <ChevronDown className="ml-1 w-4 h-4 text-brand-gold" />
              </button>

              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className="absolute left-0 mt-1 w-80 rounded-xl bg-brand-navy-deep border border-brand-gold/40 shadow-2xl py-2 z-50 animate-fadeIn"
                >
                  <div className="px-3 py-2 border-b border-brand-navy-light/40 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                      Active Business Divisions
                    </span>
                  </div>
                  {navDivisions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start px-3 py-2.5 hover:bg-brand-navy-light/60 transition-colors rounded-lg mx-1 group"
                      >
                        <div className="p-2 rounded-lg bg-brand-navy-light/80 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy-deep transition-colors mr-3 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/shop"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/shop' ? 'text-brand-gold bg-brand-navy-light/60' : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
              }`}
            >
              Unified Catalogue
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/about' ? 'text-brand-gold bg-brand-navy-light/60' : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/contact' ? 'text-brand-gold bg-brand-navy-light/60' : 'text-gray-300 hover:text-white hover:bg-brand-navy-light/40'
              }`}
            >
              Contact
            </Link>
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

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-brand-navy-light/60 hover:bg-brand-navy-light text-white border border-white/10 hover:border-brand-gold/40 transition-colors"
              aria-label="View Cart and Enquiries"
            >
              <ShoppingBag className="w-5 h-5 text-brand-gold" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-brand-gold text-brand-navy-deep rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </button>

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
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-navy-light"
            >
              Home
            </Link>
            <div className="px-3 pt-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
              5 Operating Divisions
            </div>
            {navDivisions.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light/40 rounded-lg"
              >
                <item.icon className="w-4 h-4 mr-2.5 text-brand-gold" />
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="border-t border-brand-navy-light/40 my-2 pt-2">
              <Link
                href="/shop"
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light rounded-md"
              >
                Unified Catalogue
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light rounded-md"
              >
                About Company
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-brand-gold hover:bg-brand-navy-light rounded-md"
              >
                Contact & Support
              </Link>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
