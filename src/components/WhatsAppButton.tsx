'use client';

import React from 'react';
import { MARVIS_WHATSAPP_URL, MARVIS_WHATSAPP_NUMBER } from '@/data/catalogue';

export default function WhatsAppButton() {
  if (!MARVIS_WHATSAPP_NUMBER) return null;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={MARVIS_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl shadow-black/40 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      >
        {/* Authentic WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518-.176-.009-.377-.01-.578-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.512s1.079 2.913 1.23 3.114c.151.2 2.124 3.243 5.145 4.548.719.31 1.281.496 1.719.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zm-5.467 7.218c-1.82 0-3.535-.49-5.02-1.343l-.36-.206-3.733.979.996-3.639-.226-.36a10.027 10.027 0 01-1.538-5.32c0-5.545 4.51-10.055 10.057-10.055 2.686 0 5.212 1.047 7.11 2.946a9.986 9.986 0 012.943 7.11c0 5.546-4.511 10.057-10.059 10.057zm8.532-18.59A11.968 11.968 0 0012.005 0C5.386 0 0 5.386 0 12.004c0 2.112.551 4.175 1.6 5.992L0 24l6.173-1.618a11.97 11.97 0 005.832 1.503h.005c6.618 0 12.005-5.387 12.005-12.006 0-3.208-1.249-6.223-3.53-8.503z" />
        </svg>

        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping pointer-events-none -z-10" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-brand-navy-deep text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          Chat with us on WhatsApp
        </span>
      </a>
    </aside>
  );
}
