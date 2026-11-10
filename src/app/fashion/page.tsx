'use client';

import React, { useState } from 'react';
import {
  Shirt,
  ShoppingBag,
  CheckCircle2,
  Tag,
  Info,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { RETAIL_PRODUCTS, RetailProduct } from '@/data/catalogue';
import { useCart } from '@/components/CartContext';

export default function FashionRetailPage() {
  const { addToCart } = useCart();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({
    'fash-01': '40R',
    'fash-02': 'M',
    'fash-03': 'L'
  });
  const [activeModalProduct, setActiveModalProduct] = useState<RetailProduct | null>(null);

  const products = RETAIL_PRODUCTS.filter((p) => p.category === 'fashion');
  const allTags = ['All', 'Outerwear', 'Tailoring', 'Shirts', 'T-Shirts', 'British Wool'];

  const filteredProducts = products.filter((p) => {
    if (selectedTag === 'All') return true;
    return p.tags.includes(selectedTag);
  });

  const handleVariantSelect = (productId: string, variant: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      
      {/* Header Banner */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase mb-3">
              <Shirt className="w-3.5 h-3.5" />
              <span>Division 04 • Men&apos;s Tailoring & Apparel</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Timeless British Menswear & Essentials
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Structured double-breasted overcoats, heavy gauge Oxford cotton shirts, and 240gsm organic cotton t-shirts. Designed for sharp presentation and lasting British craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs uppercase font-bold text-gray-400 mr-2 flex items-center">
            <Tag className="w-3.5 h-3.5 mr-1 text-brand-gold" /> Filter Collection:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTag === tag
                  ? 'bg-brand-gold text-brand-navy-deep font-bold shadow-md shadow-brand-gold/20'
                  : 'bg-brand-navy-deep text-gray-300 hover:text-white border border-white/10 hover:border-brand-gold/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentVariant = selectedVariants[product.id] || (product.variants ? product.variants[0] : '');

            return (
              <div
                key={product.id}
                className="rounded-2xl bg-brand-navy-deep border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all flex flex-col group shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                    {product.brand}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-brand-navy-deep/90 text-brand-gold font-extrabold text-base border border-brand-gold/30">
                    £{product.price.toFixed(2)}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Size Selector */}
                    {product.variants && (
                      <div className="mt-4 pt-3 border-t border-brand-navy-light/60">
                        <label className="block text-[11px] text-gray-400 mb-1.5 font-medium">
                          Select UK Size:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {product.variants.map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => handleVariantSelect(product.id, v)}
                              className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                                currentVariant === v
                                  ? 'bg-brand-gold text-brand-navy-deep font-bold border-brand-gold'
                                  : 'bg-brand-surface-dark text-gray-300 border-white/10 hover:border-brand-gold/40'
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 space-y-1 py-3 border-t border-brand-navy-light/60">
                      {product.specs.map((sp, idx) => (
                        <div key={idx} className="flex justify-between text-[11px]">
                          <span className="text-gray-400">{sp.label}:</span>
                          <span className="font-semibold text-gray-200">{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-navy-light/60 flex items-center gap-3">
                    <button
                      onClick={() => addToCart(product, 1, currentVariant)}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs transition-all shadow-md shadow-brand-gold/20 flex items-center justify-center space-x-1.5"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Order Enquiry ({currentVariant})</span>
                    </button>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="p-2.5 rounded-lg bg-brand-navy-light/60 hover:bg-brand-navy-light text-gray-300 hover:text-brand-gold border border-white/10"
                      title="View garment details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-brand-navy-deep border border-brand-gold/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-brand-gold/20">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-light text-brand-gold uppercase tracking-wider mb-2">
              {activeModalProduct.brand}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {activeModalProduct.title}
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {activeModalProduct.description}
            </p>

            <div className="space-y-2 bg-brand-surface-dark p-3.5 rounded-xl border border-white/10 mb-6">
              <div className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                Fabric & Tailoring Specifications
              </div>
              {activeModalProduct.specs.map((sp, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <span className="text-gray-400">{sp.label}:</span>
                  <span className="font-semibold text-white">{sp.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const variant = selectedVariants[activeModalProduct.id] || (activeModalProduct.variants ? activeModalProduct.variants[0] : '');
                addToCart(activeModalProduct, 1, variant);
                setActiveModalProduct(null);
              }}
              className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all"
            >
              Add to Commercial Order (£{activeModalProduct.price.toFixed(2)})
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
