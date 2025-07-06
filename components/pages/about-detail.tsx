'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaBuilding, 
  FaUsers, 
  FaHandshake, 
  FaAward, 
  FaShieldAlt,
  FaBullseye,
  FaEye
} from 'react-icons/fa';

const AboutDetail = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Tambahan padding top untuk navbar - Hanya di desktop */}
      <div className="min-[801px]:pt-20">
        {/* Header Section - Tentang Kami */}
        <section className="relative py-16 bg-gradient-to-r from-[#89AC46] to-[#6B8936] text-white overflow-hidden">
          {/* Bubble Background */}
          <div className="absolute inset-0">
            {/* Large bubbles for desktop */}
            <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-16 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/15 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 left-20 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 bg-white/8 rounded-full animate-pulse"></div>

            {/* Medium bubbles */}
            <div
              className="absolute top-32 left-1/3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/12 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-40 right-1/4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/18 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/2 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-white/14 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Small bubbles - more visible on mobile */}
            <div
              className="absolute top-16 left-1/4 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-white/25 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute top-28 right-1/3 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/22 rounded-full animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute bottom-24 left-16 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-white/20 rounded-full animate-ping"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute bottom-40 right-20 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/28 rounded-full animate-bounce"
              style={{ animationDelay: "1.2s" }}
            ></div>

            {/* Extra small bubbles for subtle effect */}
            <div
              className="absolute top-24 left-3/4 w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full animate-pulse"
              style={{ animationDelay: "0.7s" }}
            ></div>
            <div
              className="absolute bottom-28 left-1/3 w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-white/25 rounded-full animate-ping"
              style={{ animationDelay: "1.8s" }}
            ></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Tentang Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Mengenal lebih dekat tentang Resonance Residence Magelang
            </motion.p>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/tentang.jpg"
                    alt="Tentang Resonance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tentang Kami
                </h2>
                <div className="w-24 h-1 bg-[#89AC46] mb-6 rounded-full"></div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Resonance Residence</strong> secara resmi berdiri pada tahun 2025.
                  Berdirinya usaha kami sebagai bentuk respon dari peluang di
                  bidang properti yang semakin terbuka, khususnya di wilayah
                  Magelang. Resonance Residence merupakan Lembaga usaha yang
                  bergerak di bidang Developer Properti. Perusahaan kami
                  memiliki pengalaman dan kompeten dibidangnya, juga didukung
                  oleh sumber daya manusia yang professional dalam memberi
                  pelayanan terbaik untuk menjadi kepuasan client kami.
                </p>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Komitmen Resonance Residence untuk menyelesaikan setiap
                  pekerjaan pembangunan yang telah dipercayakan, dan tidak
                  terlepas dari peran setiap anggota Resonance Residence
                  dalam melakukan perencanaan, pelaksanaan, dan lingkungan kerja
                  yang efektif dan efisien.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <FaShieldAlt className="text-[#89AC46] mr-2" />
                    <span className="text-gray-700 font-semibold">
                      Legal Terjamin
                    </span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <FaAward className="text-[#89AC46] mr-2" />
                    <span className="text-gray-700 font-semibold">
                      Kualitas Terbaik
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visi Misi Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visi & Misi Kami
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
              {/* Visi */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-[#89AC46] to-[#6B8936] rounded-2xl p-8 text-white"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4">
                    <FaEye className="text-2xl text-[#89AC46]" />
                  </div>
                  <h3 className="text-2xl font-bold">VISI</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Menjadi developer perumahan terdepan di Indonesia yang
                  menghadirkan hunian berkelanjutan, ramah lingkungan, dan
                  terjangkau untuk semua kalangan. Kami berkomitmen untuk
                  menciptakan komunitas perumahan yang harmonis, aman, dan
                  sejahtera dengan standar kualitas internasional yang dapat
                  dinikmati oleh generasi mendatang.
                </p>
              </motion.div>

              {/* Misi */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white border-2 border-[#89AC46] rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#89AC46] rounded-2xl flex items-center justify-center mr-4">
                    <FaBullseye className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">MISI</h3>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#89AC46] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Mengembangkan perumahan berkualitas dengan desain modern
                      dan fasilitas infrastruktur yang lengkap
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#89AC46] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Memberikan pelayanan prima dengan transparansi,
                      integritas, dan kepercayaan yang tinggi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#89AC46] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Menyediakan sistem pembayaran yang fleksibel dan program
                      KPR dengan bunga kompetitif
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#89AC46] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Membangun komunitas yang berkelanjutan dengan konsep green
                      living dan lingkungan yang asri
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#89AC46] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Menjamin legalitas dan keamanan investasi properti dengan
                      sertifikat Hak Milik (SHM)
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tim Profesional Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tim Profesional Kami
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Didukung oleh tim ahli yang berpengalaman dalam industri
                properti dan konstruksi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#89AC46] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tim Developer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tim pengembang properti yang berpengalaman dalam mengidentifikasi dan mengembangkan 
                  lokasi strategis dengan konsep hunian modern dan terjangkau.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#89AC46] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBuilding className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Konsultan Properti
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menyediakan konsultasi komprehensif mulai dari pemilihan rumah, 
                  perencanaan pembangunan, hingga proses legal dan administrasi.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#89AC46] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tim customer service yang responsif dan profesional siap
                  membantu Anda dari tahap konsultasi hingga serah terima.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutDetail;
