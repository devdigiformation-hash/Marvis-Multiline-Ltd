import React from 'react';
import Link from 'next/link';
import { HelpCircle, Phone, Mail, ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Division 01: Car Repairing & Diagnostics',
      items: [
        {
          q: 'What types of cars and light vehicles do you service?',
          a: 'We service and maintain most popular UK petrol, diesel, and hybrid passenger cars, estate cars, and light commercial vehicles for routine mechanical servicing, brake system overhauls, suspension repairs, and electronic diagnostics.'
        },
        {
          q: 'How does your engine diagnostic process work?',
          a: 'We connect professional OBD-II diagnostic equipment to scan the engine management, ABS, transmission, and body control units. We analyze live data streams and fault codes to diagnose issues before quoting or beginning any mechanical repairs.'
        },
        {
          q: 'Do you replace brake pads and discs with manufacturer-specification parts?',
          a: 'Yes. All brake replacements use certified OEM-specification or higher-grade brake pads and discs. We also measure disc runout, inspect calipers and flexi-hoses, and test fluid boiling points.'
        },
        {
          q: 'Can you help prepare my car for its annual MOT test?',
          a: 'Yes. Our pre-MOT inspection covers exterior lighting, tyre wear and sidewall condition, suspension play, wiper efficiency, and exhaust mountings to identify potential failure points in advance.'
        }
      ]
    },
    {
      category: 'Division 02: Cycle Repairing & Workshop Stand Servicing',
      items: [
        {
          q: 'What styles of bicycles do you service?',
          a: 'Our workshop handles road bikes, commuter and hybrid cycles, mountain bikes, and gravel bikes equipped with Shimano, SRAM, or Campagnolo mechanical or electronic gear systems.'
        },
        {
          q: 'How do you fix slipping gears and chain rub?',
          a: 'We mount your bicycle on a dedicated repair stand, check derailleur hanger alignment with a precision gauge, set high and low limit screws, calibrate B-tension, and index cable tension across all sprockets.'
        },
        {
          q: 'Can you service both mechanical and hydraulic disc brakes on bicycles?',
          a: 'Yes. We align calipers to eliminate rotor drag, inspect pad thickness, replace cables and housing, and perform complete mineral oil or DOT fluid bleeds for crisp lever modulation.'
        },
        {
          q: 'What is the typical turnaround time for a bicycle tune-up?',
          a: 'Routine tune-ups, gear indexing, and brake adjustments are typically completed within 24 to 48 hours depending on parts requirements and workshop scheduling.'
        }
      ]
    },
    {
      category: 'Estimates, Warranties & Website Media',
      items: [
        {
          q: 'Do you provide an estimate before carrying out repairs?',
          a: 'Yes. Transparency is our core principle. Following an initial diagnostic check or physical assessment, we provide an itemised estimate outlining parts and labour for your approval before proceeding.'
        },
        {
          q: 'Are parts and workmanship covered by a guarantee?',
          a: 'Yes. Replaced new parts carry manufacturer warranties, and workshop repair workmanship is guaranteed under standard UK Consumer Rights provisions.'
        },
        {
          q: 'Are the photos and videos on this website real customer jobs?',
          a: 'The cinematic video frame sequences and photography displayed on this website are illustrative stock-style media designed to showcase professional mechanical inspection standards. They do not claim to depict specific customer vehicles, proprietary premises, or private workshops.'
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
              Clear answers regarding our automotive repair procedures, bicycle workshop stand servicing, transparent estimates, and workshop standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {faqs.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-brand-gold uppercase tracking-wider border-b border-brand-navy-light/60 pb-2">
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

        {/* Still have questions CTA */}
        <div className="p-8 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Have a Specific Mechanical Query?</h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light">
            Contact our UK operations desk directly or message us on WhatsApp for advice and booking availability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs sm:text-sm hover:bg-brand-gold-light transition-all"
            >
              Contact Workshop Team
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm hover:bg-[#25D366]/30 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
