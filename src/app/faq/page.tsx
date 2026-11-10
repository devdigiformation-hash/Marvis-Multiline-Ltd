import React from 'react';
import Link from 'next/link';
import { HelpCircle, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Used Vehicles Division',
      items: [
        {
          q: 'How are showroom vehicles checked before being offered for sale?',
          a: 'Every pre-owned vehicle listed by Marvis Multiline Ltd undergoes a thorough multi-point mechanical inspection, complete HPI history check to ensure clear title without outstanding finance or write-off history, and verification of digital service records.'
        },
        {
          q: 'Can I test drive or inspect a vehicle in person?',
          a: 'Yes, physical viewings and test inspections are arranged by appointment. You can submit a viewing request through our vehicle listings or contact our vehicle coordinator directly.'
        },
        {
          q: 'Are the registration numbers displayed genuine?',
          a: 'To safeguard security and privacy, registration plates are partially masked in public listings (e.g. MV21 ***). Full unmasked registration details and VIN numbers are disclosed during formal viewing or upon enquiry.'
        }
      ]
    },
    {
      category: 'Transport & Freight Support',
      items: [
        {
          q: 'What types of freight do you handle?',
          a: 'Our transport division operates full-trailer curtainsiders (Mercedes-Benz Actros, up to 28,000 kg capacity) for commercial pallet trunking, as well as high-roof long-wheelbase vans for direct express consignments across the UK mainland.'
        },
        {
          q: 'Is my cargo insured during transit?',
          a: 'Yes. All goods transported by Marvis Multiline Ltd are covered under comprehensive Goods in Transit insurance according to UK RHA / commercial standards.'
        },
        {
          q: 'Does submitting a quote form guarantee vehicle booking?',
          a: 'No. Quote submissions are processed as pricing and availability inquiries. An official booking confirmation is provided once route schedules and vehicle allocation are formally agreed.'
        }
      ]
    },
    {
      category: 'Retail Divisions (Hair & Beauty, Fashion, Household)',
      items: [
        {
          q: 'What are your delivery timescales across the UK?',
          a: 'Standard UK mainland courier delivery typically takes 2–4 business days following commercial payment or order confirmation. Tracking numbers are issued upon dispatch.'
        },
        {
          q: 'Are hair and grooming products cruelty-free?',
          a: 'Yes. Our grooming formulations are manufactured to strict UK cosmetics standards and are never tested on animals, free of parabens and harsh synthetic sulphates.'
        },
        {
          q: 'What is the return policy for clothing and appliances?',
          a: 'Unworn fashion garments with tags intact and unused appliances in original packaging may be returned within 14 days of delivery. Please contact customer care for returns authorization.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Transparent answers regarding our vehicle showroom standards, haulage quote workflows, and retail commercial distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {faqs.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <h2 className="text-lg font-bold text-brand-gold uppercase tracking-wider border-b border-brand-navy-light/60 pb-2">
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-navy-deep border border-brand-gold/20"
                >
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{item.q}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Assistance Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-navy-dark via-brand-navy-deep to-brand-navy-dark border border-brand-gold/40 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Have a specific question?</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Our operational team is available to assist with vehicle technical files, freight routing, or commercial wholesale enquiries.
          </p>
          <div className="flex justify-center items-center space-x-4 pt-2">
            <a
              href={COMPANY_INFO.phoneHref}
              className="px-5 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs hover:bg-brand-gold-light transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-brand-navy-light text-white font-medium text-xs hover:bg-brand-navy transition-colors border border-white/10"
            >
              Send Message
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
