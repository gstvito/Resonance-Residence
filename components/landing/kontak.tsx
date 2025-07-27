"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="lokasi" className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-8">
      {/* Bagian Kontak */}
      <div className="w-full md:w-1/2 max-w-[300px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontak Kami</h2>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1BF3366X4w/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 text-gray-900 mt-4 hover:text-gray-700 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center border rounded-full shadow-md bg-white">
            <FaFacebookF className="text-xl" />
          </div>
          <span className="font-medium">Resonance Residence</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/resonance.residence_magelang?igsh=MWZib3Q5dnNsdTl6Yg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 text-gray-900 mt-4 hover:text-gray-700 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center border rounded-full shadow-md bg-white">
            <FaInstagram className="text-xl" />
          </div>
          <span className="font-medium">@resonance.residence_magelang</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6281229801800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 text-gray-900 mt-4 hover:text-gray-700 transition"
        >
          <div className="w-10 h-10 flex items-center justify-center border rounded-full shadow-md bg-white">
            <FaWhatsapp className="text-xl" />
          </div>
          <span className="font-medium">+62 812-2980-1800</span>
        </a>
      </div>

      {/* Bagian Maps */}
      <div className="w-full md:w-1/2">
        <iframe
          src="https://maps.google.com/maps?q=-7.477771326017855, 110.22402191475447&z=15&output=embed"
          width="100%"
          height="500"
          style={{ borderRadius: "12px", border: "none" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
