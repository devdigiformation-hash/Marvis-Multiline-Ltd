'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { COMPANY_INFO } from '@/data/catalogue';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, isCartOpen, setIsCartOpen } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Enquiry form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isCartOpen) return null;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Save submitted order/enquiry to local storage for admin portal review
      try {
        const existing = JSON.parse(localStorage.getItem('marvis_orders') || '[]');
        const newOrder = {
          id: `ORD-${Date.now().toString().slice(-6)}`,
          date: new Date().toISOString(),
          customer: { fullName, email, phone },
          notes,
          items: cart,
          total: subtotal,
          status: 'Pending Verification'
        };
        existing.push(newOrder);
        localStorage.setItem('marvis_orders', JSON.stringify(existing));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setSubmitted(true);
      clearCart();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-navy-deep border-l border-brand-gold/30 text-white shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-brand-navy-light/60 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-brand-gold" />
              <h3 className="text-lg font-bold">Shopping Cart & Enquiry</h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-navy-light transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Commercial Enquiry Received</h4>
                <p className="text-sm text-gray-300">
                  Thank you, <strong className="text-brand-gold">{fullName}</strong>. Your enquiry has been registered with Marvis Multiline Ltd. Our sales team will contact you shortly at <span className="underline">{email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsCartOpen(false);
                    }}
                    className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-sm transition-colors"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-brand-navy-light/60 flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white">Your Cart is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Browse our retail divisions in Hair & Beauty, Fashion, or Household Essentials to add items.
                </p>
                <div className="pt-4">
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-gold text-brand-navy-deep font-bold text-xs"
                  >
                    <span>Browse Shop</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedVariant || ''}`}
                    className="flex space-x-3 p-3 rounded-xl bg-brand-navy-light/40 border border-white/5"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-lg border border-brand-gold/20 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-white truncate">
                        {item.product.title}
                      </h5>
                      <p className="text-[11px] text-brand-gold">
                        £{item.product.price.toFixed(2)}
                        {item.selectedVariant && (
                          <span className="text-gray-400 ml-2">Size: {item.selectedVariant}</span>
                        )}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2 bg-brand-navy-deep/80 px-2 py-0.5 rounded-lg border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Subtotal Calculation */}
                <div className="border-t border-brand-navy-light/60 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                    <span className="font-bold text-white">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>UK Fulfilment Handling</span>
                    <span className="text-brand-gold font-medium">Calculated upon confirmation</span>
                  </div>
                </div>

                {/* Direct Enquiry Checkout Form */}
                <form onSubmit={handleSubmitEnquiry} className="border-t border-brand-navy-light/60 pt-4 space-y-3">
                  <div className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    Commercial Order / Enquiry Details
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.co.uk"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Delivery / Order Notes</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special instructions or delivery address..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface-dark border border-white/10 text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20 flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Commercial Order Enquiry'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    Payment is handled securely via verified invoice or bank transfer upon order confirmation.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-brand-navy-light/60 bg-brand-navy-dark/80 text-[11px] text-gray-400 flex items-center justify-between">
            <span>Marvis Multiline Ltd</span>
            <a href={COMPANY_INFO.phoneHref} className="text-brand-gold hover:underline">
              {COMPANY_INFO.phone}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
