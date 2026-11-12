import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Privacy & Data Protection Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Marvis Multiline Ltd is committed to respecting your privacy in full compliance with the UK Data Protection Act 2018 and UK GDPR.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">1. Data Controller</h2>
          <p>
            The data controller responsible for personal information gathered through this website is <strong>Marvis Multiline Ltd</strong>. For enquiries regarding data processing, contact us at <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-gold underline">{COMPANY_INFO.email}</a> or telephone <a href={COMPANY_INFO.phoneHref} className="text-brand-gold underline">{COMPANY_INFO.phone}</a>.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">2. Information We Collect</h2>
          <p>We collect and process personal data you voluntarily provide when:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            <li>Submitting an automotive inspection, engine diagnostic, or repair quote request.</li>
            <li>Submitting a bicycle tune-up, gear indexing, or workshop stand service enquiry.</li>
            <li>Submitting a job application or CV details for workshop technician and mechanic vacancies.</li>
            <li>Contacting our operations desk via email, phone, or website contact forms.</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">3. Lawful Basis & Usage</h2>
          <p>
            Your information is used strictly to fulfill your requested mechanical services, generate itemised repair estimates, confirm workshop bookings, or process recruitment applications. We never sell, rent, or lease customer data to third-party marketing brokers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">4. Your Statutory Rights</h2>
          <p>
            Under UK GDPR, you retain the right to access, rectify, or request erasure of your personal records held by Marvis Multiline Ltd. To exercise your rights, please submit your request to <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-gold underline">{COMPANY_INFO.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
