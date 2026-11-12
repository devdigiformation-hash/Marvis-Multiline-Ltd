import React from 'react';
import { ShieldAlert, FileText, Phone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Workshop Regulations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Terms & Conditions of Mechanical Repair Services
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Standard operating terms governing automotive inspections, car repairs, and bicycle workshop servicing from Marvis Multiline Ltd.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">1. Estimates, Inspections & Authorisation</h2>
          <p>
            All online booking submissions, website enquiries, and preliminary discussions constitute requests for mechanical inspection and estimates. Work commences only after the customer has reviewed and formally authorised an itemised quotation detailing required parts and estimated labour in GBP.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">2. Automotive Diagnostic Procedures & Parts</h2>
          <p>
            Electronic diagnostic scans identify fault codes and live sensor data at the time of testing. Should unforeseen wear or damage be uncovered during mechanical disassembly (e.g. seized caliper sliders or stripped threads), the customer will be notified promptly with a revised estimate prior to fitting replacement components. All parts supplied meet or exceed OEM specifications.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">3. Bicycle Workshop Servicing & Safety Standards</h2>
          <p>
            Bicycles submitted for stand servicing, derailleur indexing, brake maintenance, or wheel truing undergo multi-point safety checks. Any safety-critical structural fatigue discovered in bicycle frames, carbon forks, or rims will be brought to the customer&apos;s attention immediately.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">4. Illustrative Media & Website Content</h2>
          <p>
            Cinematic video sequences and photographic assets displayed on this website are illustrative stock-style media designed to illustrate repair standards and procedures. They do not depict specific customer vehicles, proprietary premises, or private client workshops.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">5. Settlement & Governing Law</h2>
          <p>
            Completed repairs are settled upon vehicle or bicycle handover unless corporate credit terms have been arranged in advance. These terms and any service contracts shall be governed by and construed in accordance with the laws of England and Wales.
          </p>
        </div>
      </div>
    </div>
  );
}
