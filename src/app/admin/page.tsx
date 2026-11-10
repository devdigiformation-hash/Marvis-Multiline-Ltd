'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  ShoppingBag,
  Truck,
  Car,
  MessageSquare,
  RefreshCw,
  Trash2,
  CheckCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'quotes' | 'viewings' | 'messages'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [viewings, setViewings] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const loadData = () => {
    try {
      setOrders(JSON.parse(localStorage.getItem('marvis_orders') || '[]'));
      setQuotes(JSON.parse(localStorage.getItem('marvis_transport_quotes') || '[]'));
      setViewings(JSON.parse(localStorage.getItem('marvis_viewings') || '[]'));
      setMessages(JSON.parse(localStorage.getItem('marvis_messages') || '[]'));
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const clearTab = (key: string) => {
    if (confirm(`Clear all stored ${key}?`)) {
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
                Commercial Operations & Enquiry Ledger
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
                <span>Return to Store</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* KPI Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div
            onClick={() => setActiveTab('orders')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'orders'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Retail Orders</span>
              <ShoppingBag className="w-4 h-4 text-brand-gold" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-2">{orders.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('quotes')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'quotes'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Transport Quotes</span>
              <Truck className="w-4 h-4 text-brand-gold" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-2">{quotes.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('viewings')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'viewings'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Vehicle Viewings</span>
              <Car className="w-4 h-4 text-brand-gold" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-2">{viewings.length}</div>
          </div>

          <div
            onClick={() => setActiveTab('messages')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'messages'
                ? 'bg-brand-navy-deep border-brand-gold shadow-lg shadow-brand-gold/10'
                : 'bg-brand-navy-deep/60 border-brand-navy-light/40 hover:border-brand-gold/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Contact Messages</span>
              <MessageSquare className="w-4 h-4 text-brand-gold" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-2">{messages.length}</div>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 shadow-2xl">
          
          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy-light/60 pb-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <span>Submitted Commercial Cart Orders ({orders.length})</span>
                </h3>
                {orders.length > 0 && (
                  <button
                    onClick={() => clearTab('marvis_orders')}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Orders</span>
                  </button>
                )}
              </div>

              {orders.length === 0 ? (
                <p className="text-xs text-gray-400 py-8 text-center">
                  No commercial retail orders submitted yet. Test by adding items from the Hair & Beauty, Fashion, or Household catalogues.
                </p>
              ) : (
                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-4 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex justify-between font-mono text-[11px] text-brand-gold">
                        <span>ID: {ord.id}</span>
                        <span>{new Date(ord.date).toLocaleString()}</span>
                      </div>
                      <div className="text-white font-semibold">
                        Customer: {ord.customer?.fullName} • {ord.customer?.email} • {ord.customer?.phone}
                      </div>
                      <div className="text-gray-300">
                        Items ({ord.items?.length}): {ord.items?.map((it: any) => `${it.product.title} (x${it.quantity})`).join(', ')}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/5">
                        <span className="font-bold text-white">Total: £{ord.total?.toFixed(2)}</span>
                        <span className="px-2 py-0.5 rounded bg-brand-navy-light text-brand-gold text-[10px] font-bold">
                          {ord.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TRANSPORT QUOTES TAB */}
          {activeTab === 'quotes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy-light/60 pb-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-brand-gold" />
                  <span>Transport Freight Quotes Requested ({quotes.length})</span>
                </h3>
                {quotes.length > 0 && (
                  <button
                    onClick={() => clearTab('marvis_transport_quotes')}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Quotes</span>
                  </button>
                )}
              </div>

              {quotes.length === 0 ? (
                <p className="text-xs text-gray-400 py-8 text-center">
                  No transport quote requests submitted yet. Test on the /transport-support#quote page.
                </p>
              ) : (
                <div className="space-y-3">
                  {quotes.map((q) => (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex justify-between font-mono text-[11px] text-brand-gold">
                        <span>ID: {q.id}</span>
                        <span>{new Date(q.date).toLocaleString()}</span>
                      </div>
                      <div className="text-white font-semibold">
                        Route: <strong className="text-brand-gold">{q.pickup}</strong> → <strong className="text-brand-gold">{q.destination}</strong>
                      </div>
                      <div className="text-gray-300">
                        Cargo: {q.cargoType} • Weight: {q.weightKg} kg • Desired Date: {q.requiredDate || 'Flexible'}
                      </div>
                      <div className="text-gray-400">
                        Contact: {q.contact?.name} ({q.contact?.phone} / {q.contact?.email})
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/5">
                        <span className="text-[11px] text-gray-400">Special Notes: {q.specialInstructions || 'None'}</span>
                        <span className="px-2 py-0.5 rounded bg-brand-navy-light text-brand-gold text-[10px] font-bold">
                          {q.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VEHICLE VIEWINGS TAB */}
          {activeTab === 'viewings' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy-light/60 pb-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <Car className="w-4 h-4 text-brand-gold" />
                  <span>Vehicle Viewing Appointments ({viewings.length})</span>
                </h3>
                {viewings.length > 0 && (
                  <button
                    onClick={() => clearTab('marvis_viewings')}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Viewings</span>
                  </button>
                )}
              </div>

              {viewings.length === 0 ? (
                <p className="text-xs text-gray-400 py-8 text-center">
                  No vehicle viewing requests submitted yet. Test on the /used-vehicles inventory page.
                </p>
              ) : (
                <div className="space-y-3">
                  {viewings.map((v) => (
                    <div
                      key={v.id}
                      className="p-4 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex justify-between font-mono text-[11px] text-brand-gold">
                        <span>ID: {v.id}</span>
                        <span>{new Date(v.submittedAt).toLocaleString()}</span>
                      </div>
                      <div className="text-white font-semibold">
                        Vehicle: {v.vehicleTitle}
                      </div>
                      <div className="text-gray-300">
                        Customer: {v.customerName} • Phone: {v.customerPhone} • Preferred Date: {v.preferredDate}
                      </div>
                      <div className="flex justify-end pt-2 border-t border-white/5">
                        <span className="px-2 py-0.5 rounded bg-brand-navy-light text-brand-gold text-[10px] font-bold">
                          {v.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* MESSAGES TAB */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy-light/60 pb-3">
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-brand-gold" />
                  <span>Direct Contact Messages ({messages.length})</span>
                </h3>
                {messages.length > 0 && (
                  <button
                    onClick={() => clearTab('marvis_messages')}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Messages</span>
                  </button>
                )}
              </div>

              {messages.length === 0 ? (
                <p className="text-xs text-gray-400 py-8 text-center">
                  No direct commercial messages submitted yet. Test on the homepage contact form or /contact page.
                </p>
              ) : (
                <div className="space-y-3">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl bg-brand-surface-dark border border-white/5 space-y-2 text-xs"
                    >
                      <div className="flex justify-between font-mono text-[11px] text-brand-gold">
                        <span>ID: {m.id}</span>
                        <span>{new Date(m.date).toLocaleString()}</span>
                      </div>
                      <div className="text-white font-semibold">
                        From: {m.name} ({m.email} / {m.phone || 'N/A'}) • Division: <span className="text-brand-gold">{m.division}</span>
                      </div>
                      <p className="text-gray-300 bg-brand-navy-deep/80 p-2.5 rounded border border-white/5">
                        {m.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
