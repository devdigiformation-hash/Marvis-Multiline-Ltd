import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
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
              Operating dedicated independent mechanical repair services across the United Kingdom, specialising in automotive vehicle maintenance, engine diagnostics, and workshop stand bicycle tune-ups.
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
              A Unified Standard of Mechanical Craftsmanship
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Founded on principles of operational transparency, thorough mechanical inspection, and direct communication, Marvis Multiline Ltd delivers professional car and cycle maintenance solutions under a respected British identity.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              From our electronic engine management diagnostics and safety-critical brake servicing to precision bicycle derailleur indexing on dedicated workshop repair stands, our company prioritises customer safety, accurate diagnosis, and transparent itemised estimates before work begins.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>2 Dedicated Repair Divisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>UK Mainland Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>Clear Itemised Estimates</span>
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
                  <p className="text-xs text-brand-gold font-medium">Original Corporate Brand Identity & Seal</p>
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

        {/* Two Operating Divisions Detailed Grid */}
        <div className="border-t border-brand-navy-light/40 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Scope of Enterprise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our 2 Core Mechanical Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-brand-gold mb-1">DIVISION 01</div>
                <h4 className="text-xl font-bold text-white mb-2">Car Repairing & Diagnostics</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  Professional OBD-II electronic diagnostic scanning, brake pad and disc overhauls, interim/full manufacturer-specification servicing, suspension repairs, and pre-MOT mechanical inspections.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-navy-light/60 flex items-center justify-between">
                <Link
                  href="/car-repairing"
                  className="text-xs font-bold text-brand-gold hover:text-brand-gold-light inline-flex items-center space-x-1.5"
                >
                  <span>Explore Car Repairs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-brand-gold mb-1">DIVISION 02</div>
                <h4 className="text-xl font-bold text-white mb-2">Cycle Repairing & Workshop Stand Servicing</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  Bicycle workshop stand maintenance for commuting, hybrid, road, and mountain bikes. Precision derailleur indexing, hydraulic disc brake bleeding, drivetrain degreasing, and wheel truing.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-navy-light/60 flex items-center justify-between">
                <Link
                  href="/cycle-repairing"
                  className="text-xs font-bold text-brand-gold hover:text-brand-gold-light inline-flex items-center space-x-1.5"
                >
                  <span>Explore Cycle Repairs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Operational Transparency & Disclosure */}
        <div className="p-8 rounded-3xl bg-brand-navy-deep/60 border border-brand-navy-light/60 text-xs sm:text-sm text-gray-300 space-y-3">
          <div className="flex items-center space-x-2 text-brand-gold font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Illustrative Media Disclosure</span>
          </div>
          <p className="leading-relaxed font-light">
            {COMPANY_INFO.disclaimer}
          </p>
        </div>

      </div>

    </div>
  );
}
