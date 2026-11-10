'use client';

import React, { useState } from 'react';
import {
  Truck,
  Shield,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Weight,
  Send,
  Phone,
  ArrowRight
} from 'lucide-react';
import { TRANSPORT_SERVICES, COMPANY_INFO } from '@/data/catalogue';

export default function TransportSupportPage() {
  const [quoteSent, setQuoteSent] = useState(false);
  const [pickupPostcode, setPickupPostcode] = useState('');
  const [dropoffPostcode, setDropoffPostcode] = useState('');
  const [cargoType, setCargoType] = useState('Standard Euro Pallets');
  const [weightKg, setWeightKg] = useState('1200');
  const [requiredDate, setRequiredDate] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupPostcode || !dropoffPostcode || !contactName || !contactPhone) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_transport_quotes') || '[]');
      existing.push({
        id: `TRANS-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        pickup: pickupPostcode,
        destination: dropoffPostcode,
        cargoType,
        weightKg,
        requiredDate,
        contact: { name: contactName, email: contactEmail, phone: contactPhone },
        specialInstructions,
        status: 'Under Logistics Review'
      });
      localStorage.setItem('marvis_transport_quotes', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setQuoteSent(true);
  };

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase mb-3">
              <Truck className="w-3.5 h-3.5" />
              <span>Division 02 • UK Commercial Transport</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Nationwide Transport & Heavy Haulage Support
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Providing dedicated point-to-point trunking, multi-drop regional replenishment, and express single-consignment road haulage across the UK mainland with verified fleet tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Fleet & Services Overview */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Operating Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Fleet Categories & Freight Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRANSPORT_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 hover:border-brand-gold/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{serv.title}</h3>
                  <p className="text-xs text-gray-300 mb-4">{serv.tagline}</p>
                  
                  <div className="space-y-2 py-3 border-y border-brand-navy-light/60 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Assigned Fleet:</span>
                      <span className="font-semibold text-white">{serv.fleetVehicle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Capacity:</span>
                      <span className="font-semibold text-brand-gold">{serv.maxPayload}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    {serv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-light/60">
                  <a
                    href="#quote"
                    className="block w-full py-2.5 rounded-lg bg-brand-navy-light hover:bg-brand-navy text-brand-gold hover:text-white text-xs font-bold text-center transition-colors border border-brand-gold/30"
                  >
                    Select for Freight Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Transport Quote Request Calculator Form */}
        <div id="quote" className="rounded-3xl bg-brand-navy-deep border border-brand-gold/40 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Operations Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Request a Custom Transport Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light">
                Please provide origin, destination, and consignment specs. Note: A submitted quote request is subject to route verification and is not an instant confirmed booking.
              </p>
            </div>

            {quoteSent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Quote Request Transmitted</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-brand-gold">{contactName}</strong>. Your freight requirement from <strong>{pickupPostcode}</strong> to <strong>{dropoffPostcode}</strong> has been logged. Our logistics coordinator will review capacity on fleet unit MV23 MLT and reply via phone ({contactPhone}) or email.
                </p>
                <button
                  onClick={() => setQuoteSent(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                
                {/* Route Information */}
                <div>
                  <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
                    1. Route Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Collection Postcode / Town *</label>
                      <input
                        type="text"
                        required
                        value={pickupPostcode}
                        onChange={(e) => setPickupPostcode(e.target.value)}
                        placeholder="e.g. B1 1AA (Birmingham)"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Delivery Postcode / Town *</label>
                      <input
                        type="text"
                        required
                        value={dropoffPostcode}
                        onChange={(e) => setDropoffPostcode(e.target.value)}
                        placeholder="e.g. M1 1AE (Manchester)"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Cargo Details */}
                <div>
                  <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
                    2. Cargo Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Cargo / Consignment Type</label>
                      <select
                        value={cargoType}
                        onChange={(e) => setCargoType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      >
                        <option value="Standard Euro Pallets">Standard Euro Pallets</option>
                        <option value="UK Standard Pallets (1200x1000)">UK Standard Pallets (1200x1000)</option>
                        <option value="Machinery / Industrial">Machinery / Industrial Equipment</option>
                        <option value="High-Value Direct Courier">High-Value Direct Courier</option>
                        <option value="Bulk Retail Stock">Bulk Retail Stock</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Estimated Payload (kg)</label>
                      <input
                        type="number"
                        min="50"
                        max="28000"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Desired Transit Date</label>
                      <input
                        type="date"
                        value={requiredDate}
                        onChange={(e) => setRequiredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
                    3. Contact Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="sarah@logistics.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Telephone *</label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="07..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Special Handling Instructions / Access Notes</label>
                  <textarea
                    rows={2}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. Tail-lift required, height restriction at drop-off site..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div className="p-3 rounded-lg bg-brand-navy-light/40 border border-white/5 text-[11px] text-gray-300">
                  By submitting this form, you request a competitive commercial transport quotation. Marvis Multiline Ltd operations will confirm exact vehicle allocation and rate card.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Official Commercial Freight Quote</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
