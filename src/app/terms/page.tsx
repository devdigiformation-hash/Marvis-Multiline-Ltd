import React from 'react';
import { ShieldAlert, FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/catalogue';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-surface-dark pb-20">
      <section className="bg-brand-navy-deep border-b border-brand-navy-light/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Commercial Regulations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Terms & Conditions of Commercial Service
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 font-light leading-relaxed">
              Standard operating terms governing pre-owned vehicle appointments, road freight transport quotes, and commercial retail supply from Marvis Multiline Ltd.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">1. Used Vehicle Viewings & Sales</h2>
          <p>
            Vehicle listings presented on this website constitute invitations to treat. Display of a vehicle does not guarantee availability at the moment of request. Vehicle viewings are scheduled free of obligation. Final sale contracts are executed upon physical vehicle inspection, signed purchase invoice, and full settlement of funds in GBP.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">2. Transport Support & Freight Quotations</h2>
          <p>
            Submitted transport quote requests are evaluated based on fleet availability (Mercedes-Benz Actros unit or dedicated van). Rates provided are subject to route access conditions, cargo declared weight, and agreed collection windows. Transit contracts are governed by standard UK Road Haulage conditions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">3. Commercial Retail Orders & Enquiries</h2>
          <p>
            Orders placed via the commercial enquiry cart are processed by our sales desk. Once stock is verified, an official invoice detailing item quantities, UK delivery fees, and payment instructions is issued. Title to goods passes upon full cleared payment.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy-deep border border-brand-gold/20 space-y-3">
          <h2 className="text-base font-bold text-white">4. Jurisdiction & Governing Law</h2>
          <p>
            These terms and any commercial contracts arising shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
