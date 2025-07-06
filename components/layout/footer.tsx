"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white py-12"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Kolom 1: Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 text-center md:text-left"
        >
          <h2 className="text-2xl font-bold">Resonance Samban</h2>
          <p className="mt-2 text-sm leading-relaxed text-white">
            <strong>Resonance Samban</strong> menyediakan berbagai layanan untuk
            memastikan <strong>kepuasan</strong> Anda dalam membeli tanah. Kami memiliki
            tim profesional yang siap membantu Anda dalam proses pembelian tanah,
            mulai dari pemilihan lokasi...
          </p>
        </motion.div>

        {/* Garis Pemisah */}
        <div className="hidden md:block w-px bg-gray-300 h-24"></div>

        {/* Kolom 2: Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/3 text-center"
        >
           <h3 className="font-bold text-lg">Menu</h3>
  <ul className="mt-2 space-y-1 text-sm">
    {[
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "#about" },
      { label: "Properti", href: "#properti" },
      { label: "Lokasi", href: "#lokasi" },
      { label: "Hubungi Kami", href: "#hubungi-kami" },
    ].map((item, index) => (
      <motion.li
        key={index}
        whileHover={{ scale: 1.1, x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a href={item.href} className="hover:text-white transition">
          {item.label}
        </a>
      </motion.li>
    ))}
  </ul>
        </motion.div>

        {/* Garis Pemisah */}
        <div className="hidden md:block w-px bg-gray-300 h-24"></div>

        {/* Kolom 3: Media Sosial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/3 text-center"
        >
          <h3 className="font-bold text-lg">Media Sosial</h3>
          <div className="flex justify-center space-x-4 mt-4">
            {[
              { icon: FaFacebookF, color: "text-blue-500", link: "https://www.facebook.com/share/1BF3366X4w/?mibextid=wwXIfr" },
              { icon: FaInstagram, color: "text-[#C13584]",link: "https://www.instagram.com/resonance.residence_magelang?igsh=MWZib3Q5dnNsdTl6Yg%3D%3D&utm_source=qr" },
              { icon: FaWhatsapp, color: "text-green-500",link: "https://wa.me/6281229801800" },
              { icon: FaYoutube, color: "text-red-500",link: "https://youtube.com/@resonancerecidence?si=qLBbFSv_s1-oWcic" },

            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center border border-white rounded-full bg-white ${social.color} shadow-lg`}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Garis Pemisah */}
        <div className="hidden md:block w-px bg-gray-300 h-24"></div>

        {/* Kolom 4: Barcode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:w-1/3 text-center"
        >
          <h3 className="font-bold text-lg">Kunjungi Lokasi Kami</h3>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="/qrcode.png"
            alt="QR Code"
            className="w-24 h-24 mx-auto mt-2 shadow-md rounded-lg"
          />
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center text-sm mt-6 opacity-80"
      >
        &copy; 2024 Resonance Samban | All Rights Reserved
      </motion.div>
    </footer>
  );
}
