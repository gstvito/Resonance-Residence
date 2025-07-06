'use client';

import React from 'react';
import { CreditCard, Shield, Gift } from 'lucide-react';

const Kelebihan = () => {
  return (
    <section className="relative bg-[#89AC46] text-white py-16 overflow-hidden">
      {/* Bubble Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-white/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/8 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/12 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/6 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-10 h-10 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-16 w-14 h-14 bg-white/8 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-white/15 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl font-bold">Mengapa Memilih Kami?</h2>
        <p className="mt-2 text-lg">
          Kami menawarkan kavling premium dengan lokasi strategis, legalitas jelas, dan harga terjangkau.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-fit justify-self-center">
          <div className="bg-white text-green-900 p-6 rounded-lg shadow-lg shadow-[#D3E671] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#89AC46] rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-lg">Cicilan Mudah</h3>
            <p className="mt-2 text-sm">DP 40%, Cicilan Flat Max 2 tahun, Tanpa Bunga </p>
          </div>
          <div className="bg-white text-green-900 p-6 rounded-lg shadow-lg shadow-[#D3E671] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#89AC46] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-lg">Legalitas Jelas</h3>
            <p className="mt-2 text-sm">Sertifikat Hak Milik (SHM) dan bebas sengketa</p>
          </div>
          <div className="bg-white text-green-900 p-6 rounded-lg shadow-lg shadow-[#D3E671] text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#89AC46] rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-lg">Gratis Berbagai Macam Biaya</h3>
            <p className="mt-2 text-sm">Biaya Notaris, Biaya PPJB dan Pajak Pembelian, Biaya Balik Nama</p>
          </div>
        </div>
        
        {/* Link Penawaran Terbaik */}
        <div className="mt-10">
          <a 
            href="properti" 
            className="inline-flex items-center gap-2 bg-white text-[#89AC46] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Penawaran Terbaik
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kelebihan;