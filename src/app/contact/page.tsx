'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [division, setContactDivision] = useState('Division 01: Car Repairing & Diagnostics');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (subjectParam === 'cycle-repair') {
      setContactDivision('Division 02: Cycle Repairing & Stand Servicing');
    } else if (subjectParam === 'careers') {
      setContactDivision('Workshop Recruitment & Careers');
    } else if (subjectParam === 'car-repair' || subjectParam === 'service-booking') {
      setContactDivision('Division 01: Car Repairing & Diagnostics');
    }
  }, [subjectParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_messages') || '[]');
      existing.push({
        id: `MSG-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name,
        email,
        phone,
        division,
        message,
        status: 'Unread'
      });
      localStorage.setItem('marvis_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 shadow-2xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
            Thank you, <strong className="text-brand-gold">{name}</strong>. Your enquiry for <strong>{division}</strong> has been forwarded to our operational team. We will contact you at <span className="underline">{email}</span> shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-brand-navy-light/60 pb-3">
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            <h3 className="text-lg font-bold text-white">Workshop & Service Enquiry</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Robert Clark"
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
                placeholder="robert@example.co.uk"
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
              <label className="block text-xs text-gray-300 mb-1">Enquiry Division</label>
              <select
                value={division}
                onChange={(e) => setContactDivision(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
              >
                <option value="Division 01: Car Repairing & Diagnostics">Division 01: Car Repairing & Diagnostics</option>
                <option value="Division 02: Cycle Repairing & Stand Servicing">Division 02: Cycle Repairing & Stand Servicing</option>
                <option value="Workshop Recruitment & Careers">Workshop Careers & Applications</option>
                <option value="General Commercial Inquiries">General Commercial & Workshop Enquiries</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-300 mb-1">Detailed Message *</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please outline vehicle details, bicycle model, fault symptoms, or service requirements..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/25 flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Message to Marvis Multiline Ltd</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Customer & Workshop Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Contact Marvis Multiline Ltd
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Connect directly with our UK workshop operations desk for car inspections, bicycle servicing quotes, recruitment, and general commercial inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Direct Communication Channels
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We operate dedicated coordinators for our Car Repairing and Cycle Repairing divisions to provide timely and accurate mechanical estimates.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Direct Telephone</div>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="text-base font-bold text-white hover:text-brand-gold transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Available during UK standard commercial operating hours.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Official Contact Email</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base font-bold text-white hover:text-brand-gold transition-colors block mt-0.5 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Monitored central inbox for service requests, quotes, and recruitment.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Operating Territory</div>
                  <div className="text-sm font-bold text-white mt-0.5">United Kingdom Mainland</div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Independent automotive and bicycle mechanical care.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm hover:bg-[#25D366]/30 transition-all flex items-center justify-center space-x-2"
              >
                <span>Chat via Official WhatsApp ({COMPANY_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-gray-400 text-xs">Loading enquiry form...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

        </div>
      </div>

    </div>
  );
}
