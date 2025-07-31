"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHome, FaMapMarkerAlt, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const PreviewSection = () => {
  const previewCards = [
    {
      id: 1,
      title: "Tentang Kami",
      description: "Pelajari lebih lanjut tentang visi, misi, dan komitmen kami dalam memberikan hunian terbaik untuk keluarga Indonesia.",
      image: "/tentang.jpg",
      icon: FaInfoCircle,
      link: "/tentang",
      color: "bg-blue-500",
      features: [
        "Berpengalaman",
        "Developer terpercaya", 
        "Komitmen kualitas",
        "Layanan profesional"
      ]
    },
    {
      id: 2,
      title: "Properti Kami",
      description: "Temukan berbagai pilihan unit rumah dengan tipe dan harga yang sesuai dengan kebutuhan dan budget keluarga Anda.",
      image: "/Tipe2.png",
      icon: FaHome,
      link: "/properti",
      color: "bg-green-500",
      features: [
        "Tipe 55/78.5 & 72/90",
        "Harga mulai 600 jutaan",
        "Free furniture lengkap",
        "SHM & legalitas lengkap"
      ]
    },
    {
      id: 3,
      title: "Lokasi Strategis",
      description: "Nikmati kemudahan akses ke berbagai fasilitas publik dengan lokasi yang strategis di jantung Kota Magelang.",
      image: "/borobudur.jpg",
      icon: FaMapMarkerAlt,
      link: "/lokasi",
      color: "bg-orange-500",
      features: [
        "Pusat Kota Magelang",
        "Dekat Candi Borobudur",
        "Akses transportasi lengkap",
        "Fasilitas umum lengkap"
      ]
    }
  ];

  return (
    <section id="preview" className="py-16 min-[801px]:pt-20 bg-gray-100 text-gray-900">
      {/* Judul & Deskripsi */}
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Jelajahi Resonance Residence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto"
        >
          Temukan informasi lengkap tentang kami, koleksi properti premium, dan lokasi strategis 
          yang menjadikan Resonance Residence pilihan terbaik untuk hunian impian Anda.
        </motion.p>
      </div>

      {/* Preview Cards Grid */}
      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link href={card.link}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 ${card.color} p-3 rounded-full shadow-lg`}>
                      <card.icon className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#89AC46] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-[#89AC46] rounded-full mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#89AC46] font-semibold group-hover:text-[#89AC46] transition-colors">
                        Pelajari Lebih Lanjut
                      </span>
                      <FaArrowRight className="text-[#89AC46] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-6 mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-[#89AC46] to-[#6B8936] rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Memulai Perjalanan Menuju Rumah Impian?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Hubungi tim kami sekarang untuk konsultasi gratis dan dapatkan informasi lengkap tentang 
            promo spesial yang sedang berlangsung.
          </p>
          <Link href="/properti">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#89AC46] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              <span>Lihat Semua Properti</span>
              <FaArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default PreviewSection;
