'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaBed, 
  FaBath, 
  FaWhatsapp,
  FaDownload,
  FaRuler,
  FaHome
} from 'react-icons/fa';

const PropertyDetail = () => {
  const [isClient, setIsClient] = useState(false);

  // Array gambar untuk carousel dengan informasi tipe - tidak digunakan lagi tapi tetap disimpan
  // const images = [
  //   {
  //     src: "/kavling1.jpg",
  //     type: "45/78",
  //     title: "Tipe 45/78"
  //   },
  //   {
  //     src: "/Tipe2.png", 
  //     type: "60/90",
  //     title: "Tipe 60/90"
  //   }
  // ];

  // Data unit rumah yang ditampilkan
  const propertyUnits = [
    {
      type: "Tipe 55/78",
      buildingSize: "55 m²",
      landSize: "78 m²",
      bedrooms: 2,
      bathrooms: 2,
      carport: 1,
      price: "Rp 600.000.000",
      priceInstallment: "Mulai dari Rp 4.2 juta/bulan",
      image: "/tipe55.jpg",
      features: ["Ruang tamu", "2 Kamar tidur", "2 Kamar mandi", "Dapur", "Teras", "Carport"],
      available: 22,
      description: "Rumah dengan ruang yang luas, dilengkapi teras depan yang nyaman untuk bersantai.",
      freeFurniture: [
        "SOFA RUANG TAMU",
        "SPRING BED 200 X 200",
        "LEMARI PAKAIAN 2 PINTU",
        "TV 43 INCHI+ MEJA",
        "AC 1 PK",
        "KITCHEN SET + KOMPOR TANAM",
        "MEJA MAKAN",
        "MESIN CUCI",
        "KULKAS 2 PINTU",
        "WEATHER HEATER",
        "INDIHOME + CCTV",
        "SMART DOOR KUNCI",
        "GORDEN KAYU",
        "LAMPU RUANG TAMU"
      ]
    },
    {
      type: "Tipe 72/90",
      buildingSize: "72 m²",
      landSize: "90 m²",
      bedrooms: 2,
      bathrooms: 1,
      carport: 1,
      price: "Rp 800.000.000",
      priceInstallment: "Mulai dari Rp 5.6 juta/bulan",
      image: "/Tipe2.png",
      features: ["Ruang tamu", "Ruang keluarga", "2 Kamar tidur", "1 Kamar mandi", "Dapur", "Teras", "Carport"],
      available: 18,
      description: "Rumah ideal untuk keluarga berkembang dengan 2 kamar tidur dan 1 kamar mandi.",
      freeFurniture: [
        "SOFA RUANG TAMU",
        "SPRING BED 200 X 200",
        "LEMARI PAKAIAN 2 PINTU",
        "TV 43 INCHI+ MEJA",
        "AC 1 PK",
        "KITCHEN SET + KOMPOR TANAM",
        "MEJA MAKAN",
        "MESIN CUCI",
        "KULKAS 2 PINTU",
        "WEATHER HEATER",
        "INDIHOME + CCTV",
        "SMART DOOR KUNCI",
        "GORDEN KAYU",
        "LAMPU RUANG TAMU"
      ]
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openWhatsApp = (propertyType: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan rumah ${propertyType} di Resonance Residence. Bisa tolong berikan informasi lebih lanjut?`);
    window.open(`https://wa.me/6281229801800?text=${message}`, '_blank');
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Tambahan padding top untuk navbar - Hanya di desktop */}
      <div className="min-[801px]:pt-20">
        {/* Hero Header */}
        <section className="relative py-20 bg-gradient-to-br from-[#89AC46] to-[#6B8936] overflow-hidden">
          {/* Bubble Background */}
          <div className="absolute inset-0">
            {/* Large bubbles for desktop */}
            <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-16 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/15 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 left-20 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 bg-white/8 rounded-full animate-pulse"></div>
            
            {/* Medium bubbles */}
            <div className="absolute top-32 left-1/3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/12 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-40 right-1/4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/18 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/2 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-white/14 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            
            {/* Small bubbles - more visible on mobile */}
            <div className="absolute top-16 left-1/4 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-28 right-1/3 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/22 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute bottom-24 left-16 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/28 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
            
            {/* Extra small bubbles for subtle effect */}
            <div className="absolute top-24 left-3/4 w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-28 left-1/3 w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-white/25 rounded-full animate-ping" style={{animationDelay: '1.8s'}}></div>
          </div>
          
          
          <div className="relative container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Properti
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Rumah impian Anda menanti dengan berbagai pilihan tipe yang sesuai kebutuhan keluarga
            </motion.p>
          </div>
        </section>

        {/* Unit Rumah Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unit Rumah Tersedia
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Berbagai pilihan tipe rumah dengan desain modern dan fasilitas lengkap
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {propertyUnits.map((unit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Property Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={unit.image}
                      alt={unit.type}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#89AC46] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {unit.available} Unit
                    </div>
                    <div className="absolute top-4 left-4 bg-white text-[#89AC46] px-3 py-1 rounded-full text-sm font-bold">
                      {unit.type}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{unit.type}</h3>
                    <p className="text-gray-600 text-sm mb-4">{unit.description}</p>
                    
                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaHome className="mr-2 text-[#89AC46]" />
                        <span>{unit.buildingSize}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaRuler className="mr-2 text-[#89AC46]" />
                        <span>{unit.landSize}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaBed className="mr-2 text-[#89AC46]" />
                        <span>{unit.bedrooms} KT</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaBath className="mr-2 text-[#89AC46]" />
                        <span>{unit.bathrooms} KM</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Fasilitas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {unit.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Free Furniture */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Free Furniture:</h4>
                      <div className="bg-gradient-to-r from-[#89AC46]/10 to-[#6B8936]/10 p-3 rounded-lg">
                        <div className="grid grid-cols-1 gap-1">
                          {unit.freeFurniture.slice(0, 6).map((furniture, i) => (
                            <div key={i} className="flex items-center text-xs text-gray-700">
                              <span className="text-[#89AC46] mr-2">✓</span> 
                              <span>{furniture}</span>
                            </div>
                          ))}
                          {unit.freeFurniture.length > 6 && (
                            <div className="text-xs text-[#89AC46] font-medium mt-1">
                              +{unit.freeFurniture.length - 6} item lainnya
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="border-t pt-4">
                      <div className="text-lg font-bold text-[#89AC46] mb-1">
                        {unit.price}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        Cicilan: {unit.priceInstallment}
                      </div>
                      
                      <a 
                        href="/Detail_Harga_2025.pdf" 
                        download
                        className="w-full bg-[#89AC46] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#6B8936] transition-colors duration-300 flex items-center justify-center text-decoration-none"
                      >
                        <FaDownload className="mr-2" />
                        Detail Harga
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#89AC46]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dapatkan Informasi Lengkap
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Download brosur lengkap atau hubungi tim kami untuk konsultasi gratis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Detail_Harga_2025.pdf"
                  download
                  className="inline-flex items-center bg-white text-[#89AC46] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaDownload className="mr-2" />
                  <span>Download Brosur</span>
                </a>
                <button
                  onClick={() => openWhatsApp("semua tipe")}
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp className="mr-2" />
                  <span>Konsultasi Gratis</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyDetail;
