"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hunian Modern di Kota Magelang
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
          Wujudkan rumah impian Anda di Resonance Residence. Hunian Modern dengan lingkungan asri, dan akses mudah 
          ke berbagai fasilitas kota.
        </p>

        {/* Tombol CTA */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="#about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#89AC46] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition cursor-pointer"
            >
              Lebih Lanjut →
            </motion.button>
          </Link>
          <a href="/Brosur_Penawaran.pdf" download="Brosur_Penawaran.pdf">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold shadow-lg transition cursor-pointer"
            >
              Dapatkan Brosur
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
