'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  ShoppingBag,
  ArrowRight,
  Car,
  Sparkles,
  Shirt,
  Home,
  CheckCircle2
} from 'lucide-react';
import { RETAIL_PRODUCTS, VEHICLES_DATA, COMPANY_INFO } from '@/data/catalogue';
import { useCart } from '@/components/CartContext';

export default function UnifiedShopPage() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Unified items
  const retailItems = RETAIL_PRODUCTS.map((p) => ({
    type: 'retail' as const,
    id: p.id,
    title: p.title,
    brand: p.brand,
    category: p.category,
    categoryTitle: p.categoryTitle,
    price: p.price,
    image: p.image,
    link: `/${p.category}`,
    raw: p
  }));

  const vehicleItems = VEHICLES_DATA.map((v) => ({
    type: 'vehicle' as const,
    id: v.id,
    title: v.title,
    brand: v.make,
    category: 'used-vehicles',
    categoryTitle: 'Used Vehicle Sales',
    price: v.price,
    image: v.image,
    link: '/used-vehicles',
    raw: v
  }));

  const allItems = [...retailItems, ...vehicleItems];

  const filteredItems = allItems
    .filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (
        searchQuery &&
        !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Integrated Multi-Category Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Unified Commercial Catalogue
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Explore inventory and retail lines across Marvis Multiline Ltd&apos;s divisions. Search by keyword, filter by operating sector, and assemble commercial enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search & Filter Controls */}
        <div className="p-4 sm:p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vehicles, menswear, grooming, appliances..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
              />
            </div>

            {/* Category Select */}
            <div className="md:col-span-4">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
              >
                <option value="all">All Divisions & Categories</option>
                <option value="used-vehicles">Division 01: Used Vehicle Sales</option>
                <option value="hair-beauty">Division 03: Hair & Beauty (Men&apos;s Grooming)</option>
                <option value="fashion">Division 04: Fashion Retail (Menswear)</option>
                <option value="household">Division 05: Household Products & Cookware</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-gray-400 mb-6">
          <span>Showing {filteredItems.length} verified inventory items</span>
          <span>Currency: GBP (£)</span>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-brand-navy-deep border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all flex flex-col group shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                  {item.categoryTitle}
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-brand-navy-deep/90 text-brand-gold font-extrabold text-xs sm:text-sm border border-brand-gold/30">
                  £{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium mb-1">{item.brand}</div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-navy-light/60">
                  {item.type === 'retail' ? (
                    <button
                      onClick={() => addToCart(item.raw, 1)}
                      className="w-full py-2 px-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <Link
                      href="/used-vehicles"
                      className="w-full py-2 px-3 rounded-lg bg-brand-navy-light hover:bg-brand-navy text-white text-xs font-bold block text-center transition-colors"
                    >
                      View Vehicle Spec
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
