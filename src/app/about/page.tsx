import React from 'react';
import Image from 'next/image';
import Link from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Car,
  Truck,
  Sparkles,
  Shirt,
  Home,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Corporate Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              About Marvis Multiline Ltd
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Operating across the United Kingdom with five integrated commercial divisions spanning verified pre-owned vehicles, heavy transport freight, professional men&apos;s grooming, tailored apparel, and home essentials.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Brand Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified British Enterprise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              A Unified Standard of Commercial Reliability
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Founded on principles of operational transparency, uncompromising preparation, and direct communication, Marvis Multiline Ltd manages multiple dedicated sectors under one respected brand identity.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              From our flagship Mercedes-Benz Actros freight operations to individually inspected executive saloons, our company prioritises customer certainty, accurate descriptions, and rigorous compliance with UK trade practices.
            </p>

            <div className="pt-2 flex items-center space-x-6 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>5 Active Divisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>UK Mainland Coverage</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl p-1.5 shadow border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Marvis Multiline Ltd Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">MARVIS MULTILINE LTD</h3>
                  <p className="text-xs text-brand-gold font-medium">Original Brand Identity & Seal</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-300 border-t border-brand-navy-light/60 pt-4">
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Headquarters / Operations:</span>
                  <span className="text-white font-medium">United Kingdom</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Official Contact:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-gold hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Direct Telephone:</span>
                  <a href={COMPANY_INFO.phoneHref} className="text-brand-gold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Currency & Market:</span>
                  <span className="text-white font-medium">GBP (£) Mainland UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Five Operating Divisions Detailed Grid */}
        <div className="border-t border-brand-navy-light/40 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Scope of Enterprise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our 5 Distinct Commercial Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-navy-light text-brand-gold flex items-center justify-center mb-3">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">01. Used Vehicle Sales</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Certified executive saloons, SUVs, and luxury vehicles prepared to showroom standards with comprehensive HPI background checks.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-navy-light text-brand-gold flex items-center justify-center mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">02. Transport Support</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Trunking, direct courier, and bulk pallet logistics across the UK road network with our Mercedes Actros fleet and satellite tracking.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-navy-light text-brand-gold flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">03. Hair & Beauty Products</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Curated gentleman&apos;s styling clay, argan beard elixirs, and scalp-fortifying cleansers free of harsh parabens and synthetic sulphates.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-navy-light text-brand-gold flex items-center justify-center mb-3">
                  <Shirt className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">04. Fashion Retail</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Classic British tailored overcoats, heavy Oxford cotton button-downs, and heavyweight organic t-shirts engineered for durability.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-navy-light text-brand-gold flex items-center justify-center mb-3">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">05. Household Products Retail</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Modern energy-saving air fryers, professional tri-ply induction cookware sets, and cyclonic HEPA vacuum cleaners.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-navy-light to-brand-navy-deep border border-brand-gold/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Contact Operations</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">Have a Direct Enquiry?</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Reach out directly to our central UK operations team via telephone or official email.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs">
                <a href={COMPANY_INFO.phoneHref} className="text-brand-gold font-bold hover:underline">
                  Call {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
