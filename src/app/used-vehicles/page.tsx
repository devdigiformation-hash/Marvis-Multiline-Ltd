'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Car,
  Filter,
  CheckCircle2,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Shield,
  Phone,
  ArrowRight,
  Clock,
  X
} from 'lucide-react';
import { VEHICLES_DATA, VehicleItem, COMPANY_INFO } from '@/data/catalogue';

export default function UsedVehiclesPage() {
  const [selectedMake, setSelectedMake] = useState<string>('All');
  const [selectedFuel, setSelectedFuel] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(35000);
  const [activeModalVehicle, setActiveModalVehicle] = useState<VehicleItem | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [viewerName, setViewerName] = useState('');
  const [viewerPhone, setViewerPhone] = useState('');
  const [viewingDate, setViewingDate] = useState('');

  // Filter vehicles
  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    if (selectedMake !== 'All' && v.make !== selectedMake) return false;
    if (selectedFuel !== 'All' && v.fuel !== selectedFuel) return false;
    if (v.price > maxPrice) return false;
    return true;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalVehicle || !viewerName || !viewerPhone) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_viewings') || '[]');
      existing.push({
        id: `VIEW-${Date.now().toString().slice(-6)}`,
        vehicleId: activeModalVehicle.id,
        vehicleTitle: activeModalVehicle.title,
        customerName: viewerName,
        customerPhone: viewerPhone,
        preferredDate: viewingDate,
        submittedAt: new Date().toISOString(),
        status: 'Confirmed for Schedule',
      });
      localStorage.setItem('marvis_viewings', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase mb-3">
              <Car className="w-3.5 h-3.5" />
              <span>Division 01 • Approved Used Vehicles</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Curated UK Pre-Owned Vehicles
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Every vehicle in our showroom inventory is thoroughly inspected, mileage-verified, and prepared to exacting UK road safety standards. Viewings arranged by appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Filters Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">
            <Filter className="w-4 h-4" />
            <span>Filter Showroom Inventory</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-300 mb-1">Make / Brand</label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
              >
                <option value="All">All Makes (BMW, Mercedes, Audi, VW)</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Audi">Audi</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">Fuel Type</label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
              >
                <option value="All">All Fuel Types</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Maximum Price:</span>
                <span className="text-brand-gold font-bold">£{maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="35000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-gold cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rounded-2xl bg-brand-navy-deep border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all flex flex-col group shadow-xl"
            >
              {/* Image banner */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                    Reg: {vehicle.regMasked}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-sm">
                    {vehicle.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-brand-navy-deep/90 text-brand-gold font-extrabold text-lg border border-brand-gold/30">
                  £{vehicle.price.toLocaleString()}
                </div>
              </div>

              {/* Vehicle Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                    {vehicle.title}
                  </h3>
                  
                  {/* Key Quick Specs Badge Row */}
                  <div className="grid grid-cols-4 gap-2 my-4 text-center">
                    <div className="p-2 rounded-lg bg-brand-navy-light/40 border border-white/5">
                      <Calendar className="w-4 h-4 mx-auto text-brand-gold mb-1" />
                      <div className="text-[10px] text-gray-400">Year</div>
                      <div className="text-xs font-bold text-white">{vehicle.year}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-navy-light/40 border border-white/5">
                      <Gauge className="w-4 h-4 mx-auto text-brand-gold mb-1" />
                      <div className="text-[10px] text-gray-400">Mileage</div>
                      <div className="text-xs font-bold text-white">{vehicle.mileage.toLocaleString()}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-navy-light/40 border border-white/5">
                      <Fuel className="w-4 h-4 mx-auto text-brand-gold mb-1" />
                      <div className="text-[10px] text-gray-400">Fuel</div>
                      <div className="text-xs font-bold text-white">{vehicle.fuel}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-navy-light/40 border border-white/5">
                      <Cog className="w-4 h-4 mx-auto text-brand-gold mb-1" />
                      <div className="text-[10px] text-gray-400">Gearbox</div>
                      <div className="text-xs font-bold text-white">{vehicle.transmission}</div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {vehicle.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-1.5">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-light/60 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveModalVehicle(vehicle);
                      setBookingSuccess(false);
                    }}
                    className="flex-1 py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm text-center transition-all shadow-md shadow-brand-gold/20"
                  >
                    Book Viewing / Inspection
                  </button>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="p-3 rounded-lg bg-brand-navy-light/60 hover:bg-brand-navy-light text-brand-gold border border-brand-gold/30 transition-colors"
                    title={`Call to enquire about ${vehicle.title}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Viewing Booking Modal */}
      {activeModalVehicle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-brand-navy-deep border border-brand-gold/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveModalVehicle(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">Viewing Appointment Requested</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-brand-gold">{viewerName}</strong>. Your viewing request for the <strong className="text-white">{activeModalVehicle.title}</strong> has been received. Our vehicle specialist will call {viewerPhone} to confirm your appointment time.
                </p>
                <button
                  onClick={() => setActiveModalVehicle(null)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-brand-navy-light/60 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                    Vehicle Inspection Booking
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {activeModalVehicle.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    Reg: {activeModalVehicle.regMasked} • Price: £{activeModalVehicle.price.toLocaleString()}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={viewerName}
                      onChange={(e) => setViewerName(e.target.value)}
                      placeholder="e.g. Richard Evans"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Contact Telephone *</label>
                    <input
                      type="tel"
                      required
                      value={viewerPhone}
                      onChange={(e) => setViewerPhone(e.target.value)}
                      placeholder="07..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Preferred Viewing Date & Time</label>
                  <input
                    type="date"
                    required
                    value={viewingDate}
                    onChange={(e) => setViewingDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div className="p-3 rounded-lg bg-brand-navy-light/40 border border-white/5 text-[11px] text-gray-300 leading-relaxed">
                  Notice: Submitting this form does not place an irrevocable financial hold on the vehicle. Viewings are free of obligation.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand-gold/25"
                >
                  Confirm Viewing Slot Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
