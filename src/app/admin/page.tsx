'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Wrench,
  Briefcase,
  MessageSquare,
  RefreshCw,
  Trash2,
  CheckCircle,
  Clock,
  ArrowLeft,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState<'services' | 'jobs' | 'messages'>('services');
  const [serviceEnquiries, setServiceEnquiries] = useState<any[]>([]);
  const [jobApplications, setJobApplications] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const loadData = () => {
    try {
      setServiceEnquiries(JSON.parse(localStorage.getItem('marvis_service_enquiries') || '[]'));
      setJobApplications(JSON.parse(localStorage.getItem('marvis_job_applications') || '[]'));
      setMessages(JSON.parse(localStorage.getItem('marvis_messages') || '[]'));
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const clearTab = (key: string) => {
    if (confirm(`Clear all stored records for ${key}?`)) {
      localStorage.removeItem(key);
      loadData();
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-brand-gold text-brand-navy-deep font-bold">
                  ADMIN PORTAL
                </span>
                <span className="text-xs text-gray-400 font-mono">Role: Central Operations</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Workshop Operations & Service Ledger
              </h1>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={loadData}
                className="px-3.5 py-2 rounded-lg bg-brand-navy-light text-white text-xs font-semibold hover:bg-brand-navy border border-white/10 flex items-center space-x-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Live Ledger</span>
              </button>
              <Link
                href="/"
                className="px-3.5 py-2 rounded-lg bg-brand-gold text-brand-navy-deep text-xs font-bold hover:bg-brand-gold-light flex items-center space-x-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Website</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* KPI Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div
            onClick={() => setActiveTab('services')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'services'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 font-medium">Service Enquiries</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {serviceEnquiries.length}
                </div>
                <div className="text-[11px] text-brand-gold mt-1">Car & Cycle Bookings</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('jobs')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'jobs'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 font-medium">Job Applications</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {jobApplications.length}
                </div>
                <div className="text-[11px] text-brand-gold mt-1">Technicians & Mechanics</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('messages')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'messages'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 font-medium">Contact Messages</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {messages.length}
                </div>
                <div className="text-[11px] text-brand-gold mt-1">Direct Inquiries</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="rounded-2xl bg-brand-navy-deep border border-brand-navy-light/60 overflow-hidden shadow-2xl">
          
          {/* Tab Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-navy-light/60 bg-brand-navy/40">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                {activeTab === 'services' && 'Car & Cycle Repair Enquiries'}
                {activeTab === 'jobs' && 'Workshop Career Applications'}
                {activeTab === 'messages' && 'Central Contact Inquiries'}
              </span>
            </div>

            <button
              onClick={() => {
                if (activeTab === 'services') clearTab('marvis_service_enquiries');
                if (activeTab === 'jobs') clearTab('marvis_job_applications');
                if (activeTab === 'messages') clearTab('marvis_messages');
              }}
              className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center space-x-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Tab</span>
            </button>
          </div>

          {/* List Entries */}
          <div className="p-6">
            
            {/* SERVICES TAB */}
            {activeTab === 'services' && (
              <div>
                {serviceEnquiries.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 text-xs">
                    No service enquiries logged in this browser session yet. Submissions from the booking forms will appear here.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {serviceEnquiries.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold text-brand-gold">
                              {item.id}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-navy-light text-brand-gold">
                              {item.division}
                            </span>
                            {item.registration && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white font-bold">
                                VRN: {item.registration}
                              </span>
                            )}
                            {item.bicycleModel && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white font-bold">
                                Bike: {item.bicycleModel}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-gray-400 font-mono">
                            {new Date(item.date).toLocaleString()}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
                          <div>
                            <span className="text-gray-400">Customer: </span>
                            <strong className="text-white">{item.name}</strong>
                          </div>
                          <div>
                            <span className="text-gray-400">Email: </span>
                            <a href={`mailto:${item.email}`} className="text-brand-gold hover:underline">
                              {item.email}
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-400">Phone: </span>
                            <a href={`tel:${item.phone}`} className="text-brand-gold hover:underline">
                              {item.phone || 'N/A'}
                            </a>
                          </div>
                        </div>

                        {item.service && (
                          <div className="text-xs text-gray-300">
                            <span className="text-gray-400">Service: </span>
                            <strong className="text-brand-gold">{item.service}</strong>
                          </div>
                        )}

                        <div className="text-xs text-gray-300 bg-brand-navy-deep/60 p-3 rounded-lg border border-white/5">
                          <span className="text-gray-400 block mb-1">Customer Notes / Message:</span>
                          <p className="font-light">{item.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* JOBS TAB */}
            {activeTab === 'jobs' && (
              <div>
                {jobApplications.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 text-xs">
                    No job applications logged yet. Candidate submissions from the Careers page will appear here.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jobApplications.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold text-brand-gold">
                              {item.id}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-navy-light text-brand-gold">
                              {item.role}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                              Exp: {item.experience}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-mono">
                            {new Date(item.date).toLocaleString()}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
                          <div>
                            <span className="text-gray-400">Applicant: </span>
                            <strong className="text-white">{item.name}</strong>
                          </div>
                          <div>
                            <span className="text-gray-400">Email: </span>
                            <a href={`mailto:${item.email}`} className="text-brand-gold hover:underline">
                              {item.email}
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-400">Phone: </span>
                            <a href={`tel:${item.phone}`} className="text-brand-gold hover:underline">
                              {item.phone || 'N/A'}
                            </a>
                          </div>
                        </div>

                        <div className="text-xs text-gray-300 bg-brand-navy-deep/60 p-3 rounded-lg border border-white/5">
                          <span className="text-gray-400 block mb-1">Candidate Qualifications & Cover Note:</span>
                          <p className="font-light">{item.coverNote || 'No additional note provided.'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* MESSAGES TAB */}
            {activeTab === 'messages' && (
              <div>
                {messages.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 text-xs">
                    No contact messages logged yet. Submissions from the Contact page will appear here.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold text-brand-gold">
                              {item.id}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-navy-light text-brand-gold">
                              {item.division}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-mono">
                            {new Date(item.date).toLocaleString()}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
                          <div>
                            <span className="text-gray-400">From: </span>
                            <strong className="text-white">{item.name}</strong>
                          </div>
                          <div>
                            <span className="text-gray-400">Email: </span>
                            <a href={`mailto:${item.email}`} className="text-brand-gold hover:underline">
                              {item.email}
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-400">Phone: </span>
                            <a href={`tel:${item.phone}`} className="text-brand-gold hover:underline">
                              {item.phone || 'N/A'}
                            </a>
                          </div>
                        </div>

                        <div className="text-xs text-gray-300 bg-brand-navy-deep/60 p-3 rounded-lg border border-white/5">
                          <span className="text-gray-400 block mb-1">Message Content:</span>
                          <p className="font-light">{item.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
