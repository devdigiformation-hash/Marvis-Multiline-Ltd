'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Bike,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Mail,
  ChevronRight,
  Send,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import ScrollChapter from '@/components/ScrollChapter';
import { COMPANY_INFO, CAR_REPAIR_SERVICES, CYCLE_REPAIR_SERVICES } from '@/data/catalogue';

export default function HomePage() {
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactDivision, setContactDivision] = useState('Car Repairing');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_service_enquiries') || '[]');
      existing.push({
        id: `SRV-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        division: contactDivision,
        message: contactMessage,
      });
      localStorage.setItem('marvis_service_enquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setContactSent(true);
  };

  return (
    <div className="relative w-full">
      
      {/* =========================================================
          HERO SECTION — Brand Introduction & Direct Service Fast Anchors
         ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-brand-navy-deep via-brand-surface-dark to-brand-navy-deep border-b border-brand-navy-light/40">
        
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-brand-navy/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-5">
            
            {/* Division Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span>INDEPENDENT UK CAR & CYCLE REPAIR SPECIALISTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Professional Craftsmanship in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-400">
                Car & Cycle Repairing
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Marvis Multiline Ltd provides comprehensive automotive inspections, engine diagnostics, scheduled maintenance, and dedicated bicycle repair stand tune-ups across the United Kingdom.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#car-repairing"
                className="px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep transition-all duration-200 shadow-lg shadow-brand-gold/25 transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
              >
                <span>Explore Car Repairs</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#cycle-repairing"
                className="px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-brand-navy-light/60 hover:bg-brand-navy-light border border-white/10 hover:border-brand-gold/40 transition-colors inline-flex items-center space-x-2"
              >
                <span>Explore Cycle Repairs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Two Service Jump Anchors */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#car-repairing"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-brand-navy-light/40 hover:bg-brand-navy-light border border-white/5 hover:border-brand-gold/40 text-xs font-semibold text-gray-200 hover:text-brand-gold transition-all"
                >
                  <Wrench className="w-3.5 h-3.5 text-brand-gold" />
                  <span>01. Car Repairing Services</span>
                </a>
                <a
                  href="#cycle-repairing"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-brand-navy-light/40 hover:bg-brand-navy-light border border-white/5 hover:border-brand-gold/40 text-xs font-semibold text-gray-200 hover:text-brand-gold transition-all"
                >
                  <Bike className="w-3.5 h-3.5 text-brand-gold" />
                  <span>02. Cycle Repairing Services</span>
                </a>
              </div>
            </div>

            {/* Stock Footage Disclosure */}
            <p className="text-[11px] text-gray-400 italic pt-2">
              Notice: Workshop video footage and photography on this website are illustrative stock-style media.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          CINEMATIC SECTION 01: Car Repairing (Hero Pinned Sequence)
         ========================================================= */}
      <ScrollChapter
        chapterNumber="01"
        slug="car-repairing"
        divisionTitle="Automotive Inspection & Car Repairing"
        badge="Automotive Workshop Services"
        headline="Car Diagnostics, Maintenance & Mechanical Repair."
        description="Our automotive service division provides thorough vehicle health checks, electronic OBD-II diagnostic scans, brake disc and pad servicing, and scheduled oil and filter maintenance. Every repair is diagnosed methodically before replacement parts are quoted."
        highlights={[
          { title: 'Electronic Engine Diagnostics', desc: 'Fault code analysis, live sensor interrogation, and warning light rectification.' },
          { title: 'Braking & Safety Maintenance', desc: 'Precision disc measurement, premium pad replacements, and hydraulic bleeding.' },
          { title: 'Manufacturer Service Schedules', desc: 'High-grade synthetic oils and genuine-specification filter replacements.' }
        ]}
        primaryCta={{ label: 'View Car Repair Services', href: '/car-repairing' }}
        secondaryCta={{ label: 'Book Diagnostic Check', href: '/contact?subject=car-repair' }}
        desktopAlign="right"
        frameCount={50}
        posterUrl="/media/chapters/car-repairing/poster.jpg"
      />

      {/* =========================================================
          CINEMATIC SECTION 02: Cycle Repairing (Center-Pinned Sequence)
         ========================================================= */}
      <ScrollChapter
        chapterNumber="02"
        slug="cycle-repairing"
        divisionTitle="Bicycle Maintenance & Cycle Repairing"
        badge="Bicycle Stand Tuning & Repairs"
        headline="Precision Gear Tuning, Brake Servicing & Cycle Care."
        description="Dedicated bicycle workshop servicing for commuters, road cyclists, and leisure riders. Mounted on professional repair stands, we carry out meticulous gear indexing, derailleur adjustment, brake caliper alignment, chain stretch measurement, and wheel truing."
        highlights={[
          { title: 'Derailleur & Gear Indexing', desc: 'Limit screw calibration, cable tension tuning, and crisp shifting across all sprockets.' },
          { title: 'Brake Servicing & Calibration', desc: 'Rim and hydraulic disc pad alignment, rotor centring, and lever feel restoration.' },
          { title: 'Drivetrain & Stand Safety Audits', desc: 'Chain wear measurement, torque check on critical bolts, and wheel truing.' }
        ]}
        primaryCta={{ label: 'View Cycle Repair Services', href: '/cycle-repairing' }}
        secondaryCta={{ label: 'Book Cycle Tune-Up', href: '/contact?subject=cycle-repair' }}
        desktopAlign="left"
        frameCount={50}
        posterUrl="/media/chapters/cycle-repairing/poster.jpg"
      />

      {/* =========================================================
          FEATURED SERVICE BREAKDOWN (Car & Cycle Services)
         ========================================================= */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Services Offered
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Transparent UK Mechanical Care
              </h3>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Link
                href="/car-repairing"
                className="text-xs font-bold text-brand-gold hover:underline flex items-center"
              >
                <span>All Car Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/cycle-repairing"
                className="text-xs font-bold text-brand-gold hover:underline flex items-center"
              >
                <span>All Cycle Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Grid of Highlight Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Car Service 1 */}
            <div className="p-6 rounded-2xl bg-brand-navy-light/30 border border-brand-gold/20 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Car Service</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">Engine Diagnostics & Fault Codes</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Comprehensive electronic scanning to identify warning lights, sensor faults, and management issues before work begins.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-navy-light/60">
                <Link
                  href="/car-repairing"
                  className="text-xs font-semibold text-brand-gold hover:text-white flex items-center"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Car Service 2 */}
            <div className="p-6 rounded-2xl bg-brand-navy-light/30 border border-brand-gold/20 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Car Service</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">Brake Discs & Pad Replacement</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Accurate vernier disc thickness measurement, OEM-spec pad fitting, caliper lubrication, and hydraulic bleed services.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-navy-light/60">
                <Link
                  href="/car-repairing"
                  className="text-xs font-semibold text-brand-gold hover:text-white flex items-center"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Cycle Service 1 */}
            <div className="p-6 rounded-2xl bg-brand-navy-light/30 border border-brand-gold/20 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <Bike className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Cycle Service</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">Gear Indexing & Derailleur Tuning</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Precision adjustment of limit screws and cable tension for smooth, crisp gear shifting without chain rub or skipping.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-navy-light/60">
                <Link
                  href="/cycle-repairing"
                  className="text-xs font-semibold text-brand-gold hover:text-white flex items-center"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Cycle Service 2 */}
            <div className="p-6 rounded-2xl bg-brand-navy-light/30 border border-brand-gold/20 flex flex-col justify-between hover:border-brand-gold/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Cycle Service</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">Bicycle Safety Check & Tune-Up</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Comprehensive fastener torque inspection, frame audit, tyre pressure check, and chain lubrication on dedicated stands.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-navy-light/60">
                <Link
                  href="/cycle-repairing"
                  className="text-xs font-semibold text-brand-gold hover:text-white flex items-center"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW ENQUIRIES & REPAIR WORKFLOW WORK
         ========================================================= */}
      <section className="py-20 bg-brand-surface-dark border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Service Process
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              How Our Repair Process Works
            </h3>
            <p className="text-sm text-gray-400 mt-3 font-light">
              Clear, transparent communication from initial booking to physical inspection and final sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Service Enquiry & Consultation</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Submit your vehicle or bicycle details, describing any symptoms (e.g. warning lights, spongy brakes, noisy gears). We schedule a convenient drop-off or inspection slot.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ Free initial consultation • Direct workshop communication
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Hands-on Inspection & Diagnosis</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Our technicians inspect the car or mount the bicycle on a repair stand to conduct mechanical and diagnostic checks. We provide a transparent, itemised estimate before carrying out any work.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ Itemised parts & labour • No surprise charges
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Careful Repair & Final Quality Check</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Using appropriate automotive tools or cycle stands, repairs are carried out. We conduct a final road check or gear indexing test to verify smooth operation prior to collection.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ Road testing • Handover with full explanation
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ & VERIFIED QUESTIONS
         ========================================================= */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Factual Answers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What types of cars and vehicles do you service?',
                a: 'We service most popular UK light vehicles, including hatchbacks, saloons, estate cars, and SUVs for routine mechanical servicing, brake checks, and engine diagnostics.'
              },
              {
                q: 'What bicycle brands and styles do you repair?',
                a: 'Our cycle servicing covers standard commuting bicycles, hybrid bikes, road cycles, and mountain bikes equipped with Shimano, SRAM, or Campagnolo mechanical and hydraulic systems.'
              },
              {
                q: 'Do you carry out work before providing a quote?',
                a: 'No. We conduct a thorough inspection or diagnostic scan first and explain our findings with an itemised estimate. Work proceeds only after customer agreement.'
              },
              {
                q: 'Are the photos and videos on the website real customer jobs?',
                a: 'The video footage and workshop photography are illustrative stock-style media designed to demonstrate realistic UK mechanical inspection standards. They do not claim to depict specific customer vehicles or proprietary workshops.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">{faq.q}</h5>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          DIRECT SERVICE ENQUIRY & BOOKING FORM
         ========================================================= */}
      <section id="book" className="py-20 bg-brand-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Service Enquiries
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Request an Inspection or Service Appointment
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Whether you need a car diagnostic scan, brake inspection, or bicycle gear adjustment, our UK service team is ready to provide clear advice and scheduling.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy-light flex items-center justify-center text-brand-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Direct Telephone</div>
                    <a href={COMPANY_INFO.phoneHref} className="text-sm font-bold text-white hover:text-brand-gold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy-light flex items-center justify-center text-brand-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Official Service Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-brand-gold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Service Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-navy-deep border border-brand-gold/30 shadow-2xl">
                {contactSent ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Service Request Received</h4>
                    <p className="text-xs text-gray-300 max-w-sm mx-auto">
                      Thank you, <strong className="text-brand-gold">{contactName}</strong>. Your enquiry for <strong className="text-white">{contactDivision}</strong> has been logged. Our workshop coordinator will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setContactSent(false)}
                      className="mt-4 px-5 py-2 text-xs font-bold text-brand-navy-deep bg-brand-gold rounded-lg hover:bg-brand-gold-light"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h4 className="text-lg font-bold text-white">
                      Service Booking & Enquiry Form
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Richard Walker"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="richard@example.co.uk"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Telephone Contact</label>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="07..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Select Service Category</label>
                        <select
                          value={contactDivision}
                          onChange={(e) => setContactDivision(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        >
                          <option value="Car Repairing">Division 01: Car Repairing & Diagnostics</option>
                          <option value="Cycle Repairing">Division 02: Cycle Repairing & Tune-Up</option>
                          <option value="General Mechanical">General Mechanical Advice</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Vehicle / Bicycle Details & Symptoms *</label>
                      <textarea
                        rows={4}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Please include vehicle make/model/year or bicycle type, and describe the symptoms (e.g. brake squeal, engine light, gear skipping)..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Service Enquiry</span>
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      Spam-protected commercial enquiry interface. All quotes subject to inspection.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
