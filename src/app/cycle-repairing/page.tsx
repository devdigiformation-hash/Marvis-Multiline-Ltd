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
  Activity,
  ArrowRight
} from 'lucide-react';
import { CYCLE_REPAIR_SERVICES, COMPANY_INFO } from '@/data/catalogue';

export default function CycleRepairingPage() {
  const [selectedService, setSelectedService] = useState<string>('Comprehensive Bicycle Safety Check & Tune-Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_service_enquiries') || '[]');
      existing.push({
        id: `CYC-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name,
        email,
        phone,
        bicycleModel: bikeModel || 'Not specified',
        division: 'Cycle Repairing',
        service: selectedService,
        message: message || `Service requested for: ${selectedService}`,
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
              <span>Division 02 • Bicycle Workshop</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Cycle Repairing & Workshop Stand Servicing
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Dedicated bicycle workshop care for commuting, hybrid, road, and mountain bikes. Precision gear indexing, hydraulic disc brake bleeding, drivetrain overhauls, and wheel truing.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#booking"
                className="px-6 py-3 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs sm:text-sm hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/25"
              >
                Book Cycle Service
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
              Workshop Stand Specialities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Precision Bicycle Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
              Every bike is mounted securely on a dedicated repair clamp and inspected systematically from headset to dropouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CYCLE_REPAIR_SERVICES.map((service, idx) => (
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
                  <span>Select & Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Stand Protocol */}
        <div className="p-8 rounded-3xl bg-brand-navy-deep/80 border border-brand-navy-light/60">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Workshop Protocol
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Our 4-Stage Stand Service
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-sm font-bold text-white">Stand Clamp & Torque</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Securely mounted on a workshop stand to check headset bearing play, bottom bracket stiffness, and stem torque.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-sm font-bold text-white">Derailleur Indexing</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Hanger alignment check, limit screw calibration, and precision cable tensioning for instant gear changes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-sm font-bold text-white">Braking Assessment</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Pad wear measurement, caliper centering to eliminate rotor friction, and fresh hydraulic fluid bleeding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="text-sm font-bold text-white">Truing Stand Check</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Wheel runout correction in precision truing stand, spoke balancing, tyre inflation, and final mechanic sign-off.
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
              Schedule Your Bicycle Service
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Tell us about your bicycle and symptoms below. Our mechanic will evaluate the required service time and confirm your booking.
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
                  <h3 className="text-2xl font-bold text-white">Service Request Transmitted</h3>
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
                    Cycle Service & Tune-Up Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Samuel Green"
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
                        placeholder="samuel@example.co.uk"
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
                      <label className="block text-xs text-gray-300 mb-1">Bicycle Make / Model / Style</label>
                      <input
                        type="text"
                        value={bikeModel}
                        onChange={(e) => setBikeModel(e.target.value)}
                        placeholder="e.g. Trek FX Hybrid, Specialized Allez..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
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
                      {CYCLE_REPAIR_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Bicycle Build or Overhaul">Custom Bicycle Build or Full Overhaul</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Symptoms or Special Requests</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention any gear slipping, brake squeal, rubbing sounds, or desired turnaround date..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand-gold/25"
                  >
                    Submit Cycle Repair Enquiry
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
