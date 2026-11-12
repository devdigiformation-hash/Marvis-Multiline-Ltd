'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  AlertCircle,
  Car,
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';
import { CAR_REPAIR_SERVICES, COMPANY_INFO } from '@/data/catalogue';

export default function CarRepairingPage() {
  const [selectedService, setSelectedService] = useState<string>('Engine Diagnostics & Electronic Fault Analysis');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reg, setReg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_service_enquiries') || '[]');
      existing.push({
        id: `CAR-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name,
        email,
        phone,
        registration: reg || 'Not provided',
        division: 'Car Repairing',
        service: selectedService,
        message: message || `Booking requested for: ${selectedService}`,
      });
      localStorage.setItem('marvis_service_enquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* =========================================================
          HERO BANNER
         ========================================================= */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Division 01 • Automotive Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Car Repairing & Diagnostics Services
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Comprehensive automotive mechanical services, OBD-II electronic diagnostic scanning, brake overhauls, and manufacturer-specification scheduled maintenance across the United Kingdom.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#booking"
                className="px-6 py-3 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs sm:text-sm hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/25"
              >
                Book Inspection / Quote
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm hover:bg-[#25D366]/30 transition-all flex items-center space-x-2"
              >
                <span>WhatsApp Workshop</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT & SERVICES LIST
         ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Service Cards Grid */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Scope of Automotive Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Workshop Repair Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
              Every job begins with a physical mechanical appraisal and clear itemised quote before any wrenches turn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAR_REPAIR_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 hover:border-brand-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand-gold">
                      SERVICE 0{idx + 1}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span>{service.typicalDuration}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-brand-navy-light/60 pt-4 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#booking"
                  onClick={() => setSelectedService(service.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-brand-navy-light hover:bg-brand-gold hover:text-brand-navy-deep text-white text-xs font-bold text-center transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Select & Book Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic Process Stages */}
        <div className="p-8 rounded-3xl bg-brand-navy-deep/80 border border-brand-navy-light/60">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Quality Assurance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Our 4-Stage Repair Process
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-sm font-bold text-white">Digital OBD-II Scan</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Plug-in scanning of engine management, emissions, transmission, and braking ECUs to pull active and historical DTCs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-sm font-bold text-white">Physical Assessment</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Ramp inspection checking bushes, drop links, brake disc thickness, fluid conditions, and component wear levels.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-sm font-bold text-white">Clear Itemised Quote</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                No hidden surprises. We communicate required parts and labour estimates directly to you before proceeding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="text-sm font-bold text-white">Torque & Road Test</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Calibrated torque wrench verification on all safety-critical fasteners followed by a functional road check.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            INTERACTIVE BOOKING FORM
           ========================================================= */}
        <div id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Schedule Your Car Inspection
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Submit your vehicle registration and symptoms below. Our service team will review your enquiry and respond promptly with availability and estimated costs.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-gray-400">Direct Telephone</div>
                  <a href={COMPANY_INFO.phoneHref} className="text-sm font-bold text-white hover:text-brand-gold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-gray-400">Workshop Desk Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-brand-gold break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-gray-400 border-t border-brand-navy-light/60 pt-4">
              {COMPANY_INFO.disclaimer}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Booking Request Transmitted</h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-gold">{name}</strong>. Your enquiry for <strong className="text-white">{selectedService}</strong> has been logged. We will contact you at <span className="underline">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-brand-navy-light/60 pb-3">
                    Car Repair Quote & Inspection Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Wright"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@example.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Telephone Contact</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Vehicle Registration (VRN)</label>
                      <input
                        type="text"
                        value={reg}
                        onChange={(e) => setReg(e.target.value)}
                        placeholder="e.g. AB21 XYZ"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs uppercase focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Selected Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    >
                      {CAR_REPAIR_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other Specific Car Fault">Other Specific Automotive Mechanical Fault</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Symptoms or Additional Details</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention any dashboard warning lights, odd noises, recent service history, or specific requests..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand-gold/25"
                  >
                    Submit Car Repair Service Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
