'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Car,
  Truck,
  Sparkles,
  Shirt,
  Home,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ChevronRight,
  Send,
  HelpCircle
} from 'lucide-react';
import ScrollChapter from '@/components/ScrollChapter';
import { COMPANY_INFO, VEHICLES_DATA, RETAIL_PRODUCTS } from '@/data/catalogue';

export default function HomePage() {
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactDivision, setContactDivision] = useState('Used Vehicle Sales');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    try {
      const existing = JSON.parse(localStorage.getItem('marvis_messages') || '[]');
      existing.push({
        id: `MSG-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString(),
        name: contactName,
        email: contactEmail,
        division: contactDivision,
        message: contactMessage,
      });
      localStorage.setItem('marvis_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setContactSent(true);
  };

  return (
    <div className="relative w-full">
      
      {/* =========================================================
          HERO SECTION — Brand Introduction & Division Fast Anchors
         ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-navy-deep via-brand-surface-dark to-brand-navy-deep border-b border-brand-navy-light/40">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-brand-navy/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">

            {/* Division Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span>UNITED KINGDOM REGISTERED MULTI-CATEGORY ENTERPRISE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Cinematic Excellence across <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-400">
                Five Operating Divisions
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Marvis Multiline Ltd delivers verified pre-owned vehicles, nationwide transport support, professional men&apos;s grooming, tailored menswear, and premium household essentials.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#used-vehicles"
                className="px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep transition-all duration-200 shadow-lg shadow-brand-gold/25 transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
              >
                <span>Experience Scroll Chapters</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <Link
                href="/shop"
                className="px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-brand-navy-light/60 hover:bg-brand-navy-light border border-white/10 hover:border-brand-gold/40 transition-colors inline-flex items-center space-x-2"
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Five Category Jump Chips */}
            <div className="pt-8">
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-3">
                Jump Direct to Any Chapter
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { name: '01 Vehicles', href: '#used-vehicles', icon: Car },
                  { name: '02 Transport', href: '#transport-support', icon: Truck },
                  { name: '03 Grooming', href: '#hair-beauty', icon: Sparkles },
                  { name: '04 Fashion', href: '#fashion', icon: Shirt },
                  { name: '05 Household', href: '#household', icon: Home },
                ].map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <a
                      key={chip.name}
                      href={chip.href}
                      className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-brand-navy-light/40 hover:bg-brand-navy-light border border-white/5 hover:border-brand-gold/40 text-xs font-semibold text-gray-200 hover:text-brand-gold transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{chip.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          THE FIVE CINEMATIC SCROLL CHAPTERS
          Alternating Desktop Layout:
          01 Used Vehicles       -> Right Visual
          02 Transport Support   -> Left Visual
          03 Hair & Beauty       -> Right Visual
          04 Fashion Retail      -> Left Visual
          05 Household Products  -> Right Visual
         ========================================================= */}

      {/* CHAPTER 01: Used Vehicles (Desktop Visual: Right) */}
      <ScrollChapter
        chapterNumber="01"
        slug="used-vehicles"
        divisionTitle="Used Vehicles Sales"
        badge="Approved UK Showroom Inventory"
        headline="Curated Pre-Owned Vehicles. Certified UK Standards."
        description="Our pre-owned vehicle division offers a meticulously inspected fleet of executive saloons, precision SUVs, and luxury passenger cars. Every vehicle undergoes rigorous mechanical inspection, verified HPI background history checks, and professional preparation."
        highlights={[
          { title: 'Full HPI & Provenance Verification', desc: 'Clear titles, verified mileage, and transparent digital service histories.' },
          { title: 'Independent Multi-Point Inspection', desc: 'Complete mechanical diagnostics, road testing, and safety assurance.' },
          { title: 'Test Viewings by Appointment', desc: 'Personalized viewing slots with dedicated vehicle specialists.' }
        ]}
        primaryCta={{ label: 'Explore Vehicles', href: '/used-vehicles' }}
        secondaryCta={{ label: 'Book Inspection', href: '/contact?subject=vehicle-inspection' }}
        desktopAlign="right"
        frameCount={75}
        posterUrl="/media/chapters/used-vehicles/poster.jpg"
      />

      {/* CHAPTER 02: Transport Support (Desktop Visual: Left) */}
      <ScrollChapter
        chapterNumber="02"
        slug="transport-support"
        divisionTitle="Transport Support"
        badge="Logistics & Fleet Haulage"
        headline="Nationwide Road Freight. Dedicated Commercial Haulage."
        description="Connecting commercial operations with reliable point-to-point trunking and express distribution across mainland UK. Utilizing our flagship Mercedes-Benz Actros fleet and dedicated transit units, we transport bulk palletized cargo with precision tracking and proof of delivery."
        highlights={[
          { title: 'Flagship Mercedes-Benz Actros Fleet', desc: 'Heavyweight curtainsider and box trailers rated up to 28,000 kg capacity.' },
          { title: 'Real-Time Telematics & Tracking', desc: 'Continuous satellite position monitoring and automated delivery status.' },
          { title: 'Dedicated Direct-Drive Options', desc: 'Urgent single-consignment express transport with zero transshipment.' }
        ]}
        primaryCta={{ label: 'Request Transport Quote', href: '/transport-support#quote' }}
        secondaryCta={{ label: 'View Fleet Specs', href: '/transport-support' }}
        desktopAlign="left"
        frameCount={75}
        posterUrl="/media/chapters/transport-support/poster.jpg"
      />

      {/* CHAPTER 03: Hair & Beauty (Desktop Visual: Right) */}
      <ScrollChapter
        chapterNumber="03"
        slug="hair-beauty"
        divisionTitle="Hair & Beauty Products"
        badge="Men's Professional Grooming"
        headline="Refined Formulations for the Modern Gentleman."
        description="A specialized catalogue of premium men's grooming and personal care essentials. From organic cold-pressed beard conditioning elixirs and pliable matte hair styling clays to revitalizing scalp botanicals, each formula is developed for everyday gentleman's care."
        highlights={[
          { title: 'Pure Botanical & Organic Ingredients', desc: 'Enriched with argan oil, tea tree, bentonite clay, and vitamin E.' },
          { title: 'Strictly Men\'s Grooming Catalogue', desc: 'Purpose-built styling clays, beard oils, and fortifying shampoos.' },
          { title: 'Cruelty-Free & Paraben-Free', desc: 'Clean formulations manufactured in the UK to high cosmetic standards.' }
        ]}
        primaryCta={{ label: 'Shop Hair & Beauty', href: '/hair-beauty' }}
        secondaryCta={{ label: 'View Formulations', href: '/hair-beauty' }}
        desktopAlign="right"
        frameCount={75}
        posterUrl="/media/chapters/hair-beauty/poster.jpg"
      />

      {/* CHAPTER 04: Fashion Retail (Desktop Visual: Left) */}
      <ScrollChapter
        chapterNumber="04"
        slug="fashion"
        divisionTitle="Fashion Retail"
        badge="Men's Tailoring & Essentials"
        headline="Timeless British Menswear. Structured Quality."
        description="Explore structured double-breasted wool-blend overcoats, 100% combed Oxford cotton button-down shirts, and heavyweight 240gsm organic cotton t-shirts. Tailored for sharp presentation, lasting durability, and day-to-night comfort."
        highlights={[
          { title: 'Premium British Wool & Combed Cottons', desc: 'Substantial fabric weights that hold crisp structure over time.' },
          { title: 'Tailored Cuts & Modern Fits', desc: 'Precision silhouettes from formal smart tailoring to casual weekends.' },
          { title: 'Verified Quality Control', desc: 'Reinforced stitching, horn buttons, and breathable natural linings.' }
        ]}
        primaryCta={{ label: 'Shop Fashion', href: '/fashion' }}
        secondaryCta={{ label: 'View Outerwear', href: '/fashion' }}
        desktopAlign="left"
        frameCount={75}
        posterUrl="/media/chapters/fashion/poster.jpg"
      />

      {/* CHAPTER 05: Household Products (Desktop Visual: Right) */}
      <ScrollChapter
        chapterNumber="05"
        slug="household"
        divisionTitle="Household Products Retail"
        badge="Home Essentials & Appliances"
        headline="Engineered for Everyday Living. Modern Kitchen & Home."
        description="Elevate your home with our curated household essentials. Featuring energy-efficient digital rapid air fryers, tri-ply heavy gauge stainless steel induction cookware, and ultra-light cyclonic stick vacuum cleaners designed for seamless domestic convenience."
        highlights={[
          { title: 'High-Efficiency Smart Appliances', desc: 'Rapid hot-air convection and high-capacity digital multi-cookers.' },
          { title: 'Tri-Ply Heavy Induction Cookware', desc: 'Bonded aluminium core between 18/10 stainless steel for uniform heat.' },
          { title: '2-Year UK Manufacturer Assurance', desc: 'Rigorous domestic reliability backed by direct UK support.' }
        ]}
        primaryCta={{ label: 'Shop Household Products', href: '/household' }}
        secondaryCta={{ label: 'View Cookware Sets', href: '/household' }}
        desktopAlign="right"
        frameCount={75}
        posterUrl="/media/chapters/household/poster.jpg"
      />

      {/* =========================================================
          FEATURED INVENTORY PREVIEW (Vehicles & Retail Goods)
         ========================================================= */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Commercial Inventory
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Showroom & Retail Highlights
              </h3>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center text-sm font-semibold text-brand-gold hover:text-brand-gold-light mt-4 md:mt-0"
            >
              <span>Explore Unified Catalogue</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Grid of Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Vehicle Card 1 */}
            <div className="rounded-xl bg-brand-navy-light/30 border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={VEHICLES_DATA[0].image}
                  alt={VEHICLES_DATA[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                  USED VEHICLE
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{VEHICLES_DATA[0].title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{VEHICLES_DATA[0].year} • {VEHICLES_DATA[0].mileage.toLocaleString()} miles</p>
                  <p className="text-base font-extrabold text-brand-gold mt-2">£{VEHICLES_DATA[0].price.toLocaleString()}</p>
                </div>
                <Link
                  href="/used-vehicles"
                  className="mt-4 w-full py-2 text-center rounded-lg bg-brand-navy-light hover:bg-brand-navy text-xs font-bold text-white transition-colors"
                >
                  View Details & Book
                </Link>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="rounded-xl bg-brand-navy-light/30 border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={VEHICLES_DATA[1].image}
                  alt={VEHICLES_DATA[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                  USED VEHICLE
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{VEHICLES_DATA[1].title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{VEHICLES_DATA[1].year} • {VEHICLES_DATA[1].mileage.toLocaleString()} miles</p>
                  <p className="text-base font-extrabold text-brand-gold mt-2">£{VEHICLES_DATA[1].price.toLocaleString()}</p>
                </div>
                <Link
                  href="/used-vehicles"
                  className="mt-4 w-full py-2 text-center rounded-lg bg-brand-navy-light hover:bg-brand-navy text-xs font-bold text-white transition-colors"
                >
                  View Details & Book
                </Link>
              </div>
            </div>

            {/* Retail Product 1 (Men's Grooming) */}
            <div className="rounded-xl bg-brand-navy-light/30 border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={RETAIL_PRODUCTS[0].image}
                  alt={RETAIL_PRODUCTS[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                  HAIR & BEAUTY
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{RETAIL_PRODUCTS[0].title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{RETAIL_PRODUCTS[0].brand}</p>
                  <p className="text-base font-extrabold text-brand-gold mt-2">£{RETAIL_PRODUCTS[0].price.toFixed(2)}</p>
                </div>
                <Link
                  href="/hair-beauty"
                  className="mt-4 w-full py-2 text-center rounded-lg bg-brand-navy-light hover:bg-brand-navy text-xs font-bold text-white transition-colors"
                >
                  Order / Enquiry
                </Link>
              </div>
            </div>

            {/* Retail Product 2 (Household Appliance) */}
            <div className="rounded-xl bg-brand-navy-light/30 border border-brand-gold/20 overflow-hidden hover:border-brand-gold/60 transition-all group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={RETAIL_PRODUCTS[6].image}
                  alt={RETAIL_PRODUCTS[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy-deep/90 text-brand-gold border border-brand-gold/40">
                  HOUSEHOLD APPLIANCE
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{RETAIL_PRODUCTS[6].title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{RETAIL_PRODUCTS[6].brand}</p>
                  <p className="text-base font-extrabold text-brand-gold mt-2">£{RETAIL_PRODUCTS[6].price.toFixed(2)}</p>
                </div>
                <Link
                  href="/household"
                  className="mt-4 w-full py-2 text-center rounded-lg bg-brand-navy-light hover:bg-brand-navy text-xs font-bold text-white transition-colors"
                >
                  Order / Enquiry
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OPERATIONAL PROCESS: How Marvis Multiline Operates
         ========================================================= */}
      <section className="py-20 bg-brand-surface-dark border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Transparent Operations
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              How Enquiries & Orders Work
            </h3>
            <p className="text-sm text-gray-400 mt-3 font-light">
              Clear distinction between pre-owned vehicle inspections, custom transport freight quotations, and commercial retail orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1: Vehicle Enquiries */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 hover:border-brand-gold transition-colors relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">1. Vehicle Inspections</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Explore our verified online inventory. Submit an inspection request with your preferred slot. We arrange an appointment and provide full documentation on-site.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ No non-refundable holds • Physical vehicle viewing
              </div>
            </div>

            {/* Step 2: Transport Quotes */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 hover:border-brand-gold transition-colors relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">2. Haulage & Freight Quotes</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Input your pickup postcode, destination, payload weight, and cargo type into our quote form. Our logistics coordinator responds with transparent route pricing.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ Verified goods-in-transit cover • Direct vehicle allocation
              </div>
            </div>

            {/* Step 3: Retail Checkout */}
            <div className="p-6 rounded-2xl bg-brand-navy-deep/60 border border-brand-gold/30 hover:border-brand-gold transition-colors relative">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-light text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">3. Retail Commercial Orders</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Add grooming essentials, menswear, or household appliances to your enquiry cart. Submit your details for verified UK dispatch and invoice confirmation.
              </p>
              <div className="text-[11px] text-brand-gold font-medium">
                ✓ Transparent GBP pricing • Verified stock status
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FAQ & VERIFIED QUESTIONS
         ========================================================= */}
      <section className="py-20 bg-brand-navy-deep border-b border-brand-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Factual Answers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Are all pre-owned vehicles physically in stock?',
                a: 'Yes. All vehicles displayed in our catalogue are active showroom inventory. Each listing specifies actual mileage, registration year, and vehicle condition notes.'
              },
              {
                q: 'How does transport support quote requests work?',
                a: 'A transport quote submission does not constitute an instant binding booking. Our operations desk checks route capacity, fleet readiness (Mercedes Actros or Sprinter), and confirms fixed rates via telephone or email.'
              },
              {
                q: 'What are the delivery terms for retail products?',
                a: 'Hair & Beauty, Fashion, and Household goods are dispatched across the UK using tracked postal services. Estimated delivery timescales are confirmed alongside your commercial invoice.'
              },
              {
                q: 'How can I contact Marvis Multiline Ltd directly?',
                a: 'You can phone us directly at 07442807141 or email cyclecarts@gmail.com. Our customer service team handles vehicle appointments, freight coordination, and product inquiries.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-surface-dark border border-white/5 hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">{faq.q}</h5>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CONTACT & DIRECT ENQUIRY SECTION
         ========================================================= */}
      <section id="contact" className="py-20 bg-brand-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Commercial Enquiries
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Connect Directly with Marvis Multiline Ltd
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Whether booking a showroom vehicle viewing, requesting freight rates, or sourcing retail catalogue lines, our UK operations desk is ready to assist.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy-light flex items-center justify-center text-brand-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Direct Telephone</div>
                    <a href={COMPANY_INFO.phoneHref} className="text-sm font-bold text-white hover:text-brand-gold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-brand-navy-deep border border-brand-gold/20">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy-light flex items-center justify-center text-brand-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Official Contact Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-brand-gold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-navy-deep border border-brand-gold/30 shadow-2xl">
                {contactSent ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Message Dispatched</h4>
                    <p className="text-xs text-gray-300 max-w-sm mx-auto">
                      Thank you for contacting Marvis Multiline Ltd. We have received your enquiry for <strong className="text-brand-gold">{contactDivision}</strong> and will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setContactSent(false)}
                      className="mt-4 px-5 py-2 text-xs font-bold text-brand-navy-deep bg-brand-gold rounded-lg hover:bg-brand-gold-light"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h4 className="text-lg font-bold text-white">
                      Direct Commercial Message Form
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. David Walker"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="david@example.co.uk"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Select Business Division</label>
                      <select
                        value={contactDivision}
                        onChange={(e) => setContactDivision(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      >
                        <option value="Used Vehicle Sales">Division 01: Used Vehicle Sales & Viewing</option>
                        <option value="Transport Support">Division 02: Transport Support & Haulage Quote</option>
                        <option value="Hair & Beauty">Division 03: Hair & Beauty (Men&apos;s Grooming)</option>
                        <option value="Fashion Retail">Division 04: Fashion Retail (Menswear)</option>
                        <option value="Household Products">Division 05: Household Products & Appliances</option>
                        <option value="General Commercial">General Commercial Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Message or Requirements *</label>
                      <textarea
                        rows={4}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Please include vehicle model, delivery postcodes, or specific product quantities..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-brand-surface-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-navy-deep font-bold text-xs sm:text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Operations</span>
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      Spam-protected commercial enquiry interface. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
