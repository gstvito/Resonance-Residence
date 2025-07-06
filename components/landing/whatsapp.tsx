"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappContact() {
  return (
    <section id="hubungi-kami" className="w-full max-w-6xl mx-auto my-12 px-6 min-[801px]:pt-20">
      {/* Container dengan shadow dan background gradient */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Gambar dengan efek hover */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96 overflow-hidden">
          <motion.div >
            <Image
              src="/kontak.jpg" // Ganti dengan gambar yang sesuai
              alt="Hubungi WhatsApp"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Konten teks */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Hubungi Kami di WhatsApp
          </motion.h2>
          <p className="text-lg text-gray-700 mt-3">
            Kami siap membantu Anda! Jangan ragu untuk menghubungi kami melalui WhatsApp.
          </p>

          {/* Tombol WhatsApp dengan animasi hover */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6281229801800"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center bg-[#89AC46] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#89AC46] transition duration-300"
          >
            <FaWhatsapp className="text-2xl mr-2" />
            +62 812-2980-1800
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
