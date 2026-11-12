'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Send,
  Wrench,
  Award,
  ArrowRight
} from 'lucide-react';
import { CAREERS_DATA, COMPANY_INFO } from '@/data/catalogue';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>(CAREERS_DATA[0].title);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('2-5 Years');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_job_applications') || '[]');
      existing.push({
        id: `APP-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name,
        email,
        phone,
        role: selectedRole,
        experience,
        coverNote,
      });
      localStorage.setItem('marvis_job_applications', JSON.stringify(existing));
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
              <Briefcase className="w-3.5 h-3.5" />
              <span>Workshop Recruitment • United Kingdom</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Careers at Marvis Multiline Ltd
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Join our independent UK automotive maintenance and cycle workshop team. We value meticulous craftsmanship, clean workspace discipline, and transparent customer service.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#openings"
                className="px-6 py-3 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs sm:text-sm hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/25"
              >
                View Workshop Vacancies
              </a>
              <a
                href="#apply"
                className="px-6 py-3 rounded-lg bg-brand-navy-light border border-white/10 text-white font-semibold text-xs sm:text-sm hover:border-brand-gold/40 transition-all"
              >
                Direct Application Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
         ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Workshop Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Proper Tooling & Torquing</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              We invest in professional diagnostic equipment, calibrated torque wrenches, and dedicated bicycle repair stands. Work is executed accurately to spec.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Fair Work Environment</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Competitive UK salary structures, transparent overtime compensation, clean and well-lit workshop conditions, and respect for mechanical craftsmanship.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Continual Training</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Support for relevant UK vocational certifications (NVQ Light Vehicle, Cytech Bicycle Mechanic levels) and diagnostic tool advancements.
            </p>
          </div>
        </div>

        {/* Current Vacancies Grid */}
        <div id="openings">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Available Positions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Current Workshop Openings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CAREERS_DATA.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-brand-navy-deep border border-brand-gold/30 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-navy-light/60 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-gold">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">{job.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy-light text-brand-gold border border-brand-gold/30">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-white font-medium">{job.salaryGuide}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Key Responsibilities:
                    </h4>
                    <div className="space-y-2">
                      {job.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Candidate Requirements:
                    </h4>
                    <div className="space-y-2">
                      {job.requirements.map((req, qIdx) => (
                        <div key={qIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#apply"
                  onClick={() => setSelectedRole(job.title)}
                  className="w-full py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-gold/20"
                >
                  <span>Apply for this Role</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            APPLICATION FORM
           ========================================================= */}
        <div id="apply" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Submit Your Candidacy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Direct Workshop Application
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We review all applications directly. If you have relevant vehicle maintenance experience or cycle repair background, we would be pleased to speak with you.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-gray-400">Recruitment & Operations Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-brand-gold break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-gray-400">Direct Telephone</div>
                  <a href={COMPANY_INFO.phoneHref} className="text-sm font-bold text-white hover:text-brand-gold">
                    {COMPANY_INFO.phone}
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
                  <h3 className="text-2xl font-bold text-white">Application Transmitted</h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-gold">{name}</strong>. Your application for <strong className="text-white">{selectedRole}</strong> has been logged. We will review your details and contact you at <span className="underline">{email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-brand-navy-light/60 pb-3">
                    Workshop Position Application
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Liam Smith"
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
                        placeholder="liam@example.co.uk"
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
                      <label className="block text-xs text-gray-300 mb-1">Practical Experience</label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      >
                        <option value="1-2 Years">1–2 Years Workshop Experience</option>
                        <option value="2-5 Years">2–5 Years Proven Experience</option>
                        <option value="5+ Years">5+ Years Senior Technician</option>
                        <option value="Apprentice / Trainee">Apprentice / Seeking Qualification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Select Desired Role</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    >
                      {CAREERS_DATA.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title} ({job.department})
                        </option>
                      ))}
                      <option value="General Workshop Assistant">General Workshop Assistant / Apprentice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Qualifications & Summary</label>
                    <textarea
                      rows={4}
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Please summarise your qualifications (NVQ, Cytech, etc.), previous workshop experience, and availability..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand-gold/25"
                  >
                    Submit Application to Marvis Multiline Ltd
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
