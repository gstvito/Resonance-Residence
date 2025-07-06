"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-16 min-[801px]:pt-20"
    >
      {/* Gambar dengan Animasi */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-[90%] md:w-[500px] h-64 md:h-96 rounded-xl shadow-xl overflow-hidden">
          <Image
            src="/kavling1.jpg" // Ganti dengan path gambar Anda
            alt="Kavling Resonance"
            layout="fill"
            objectFit="cover"
            className="rounded-xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </motion.div>

      {/* Konten Teks dengan Animasi */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Resonance Residence
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          <strong>Resonance Residence</strong> menghadirkan perumahan modern dengan konsep 
          hunian yang nyaman dan berkualitas. Kami menyediakan rumah siap huni dengan 
          fasilitas lengkap dan lokasi strategis. Kami akan membantu Anda 
          menemukan rumah impian yang sesuai dengan kebutuhan keluarga Anda.
        </p>

        {/* Tombol CTA */}
        <div className="mt-6">
          <motion.a
            href="#hubungi-kami" // Ganti dengan link tujuan
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#89AC46] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#89AC46] transition duration-300 inline-block text-center"
          >
            Hubungi Kami
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
