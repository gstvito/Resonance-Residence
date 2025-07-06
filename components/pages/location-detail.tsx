'use client';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaRoute, FaClock, FaGraduationCap, FaHospital, FaShoppingCart, FaBus, FaBuilding, FaTree, FaRoad, FaDirections } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LocationDetail = () => {
  const locationFeatures = [
    {
      icon: FaMapMarkerAlt,
      title: "Jantung Kota Magelang",
      description: "Terletak di pusat kota dengan akses mudah ke segala fasilitas perkotaan dan pemerintahan"
    },
    {
      icon: FaRoute,
      title: "Akses Transportasi Lengkap",
      description: "Dekat terminal bus, stasiun kereta, dan akses tol dengan transportasi umum 24 jam"
    },
    {
      icon: FaTree,
      title: "Udara Sejuk Pegunungan",
      description: "Dikelilingi pegunungan Menoreh dan Merbabu dengan udara sejuk dan pemandangan indah"
    },
    {
      icon: FaRoad,
      title: "Infrastruktur Modern",
      description: "Jalan beraspal lebar, jaringan listrik stabil, internet fiber, dan sistem drainase modern"
    }
  ];

  const nearbyFacilities = [
    {
      category: "Pendidikan",
      icon: FaGraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      facilities: [
        { name: "SD Negeri Magelang 1", distance: "400 m", time: "5 menit jalan kaki" },
        { name: "SMP Negeri 2 Magelang", distance: "800 m", time: "3 menit berkendara" },
        { name: "SMA Negeri 1 Magelang", distance: "1.2 km", time: "5 menit berkendara" },
        { name: "Universitas Muhammadiyah Magelang", distance: "2.5 km", time: "8 menit berkendara" },
        { name: "Universitas Tidar", distance: "3.2 km", time: "10 menit berkendara" }
      ]
    },
    {
      category: "Kesehatan",
      icon: FaHospital,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      facilities: [
        { name: "Puskesmas Magelang Utara", distance: "600 m", time: "3 menit berkendara" },
        { name: "Klinik Pratama 24 Jam", distance: "900 m", time: "4 menit berkendara" },
        { name: "RSUD Kota Magelang", distance: "1.8 km", time: "6 menit berkendara" },
        { name: "RS Bhayangkara Magelang", distance: "2.1 km", time: "8 menit berkendara" },
        { name: "Apotek Kimia Farma", distance: "500 m", time: "2 menit berkendara" }
      ]
    },
    {
      category: "Belanja & Kuliner",
      icon: FaShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      facilities: [
        { name: "Pasar Gotong Royong", distance: "700 m", time: "8 menit jalan kaki" },
        { name: "Indomaret & Alfamart", distance: "300 m", time: "3 menit jalan kaki" },
        { name: "Plaza Magelang", distance: "1.5 km", time: "6 menit berkendara" },
        { name: "Armada Town Square", distance: "2.8 km", time: "10 menit berkendara" },
        { name: "Gudeg Yu Djum", distance: "1.2 km", time: "5 menit berkendara" }
      ]
    },
    {
      category: "Transportasi",
      icon: FaBus,
      color: "text-purple-600",
      bgColor: "bg-purple-50", 
      borderColor: "border-purple-200",
      facilities: [
        { name: "Halte Angkot Jl. Magelang", distance: "100 m", time: "1 menit jalan kaki" },
        { name: "Terminal Tidar", distance: "1.8 km", time: "6 menit berkendara" },
        { name: "Stasiun Magelang", distance: "2.5 km", time: "8 menit berkendara" },
        { name: "Bandara Ahmad Yani (Semarang)", distance: "85 km", time: "1.5 jam berkendara" },
        { name: "Gerbang Tol Magelang", distance: "4 km", time: "12 menit berkendara" }
      ]
    },
    {
      category: "Wisata & Rekreasi",
      icon: FaTree,
      color: "text-orange-600", 
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      facilities: [
        { name: "Taman Kyai Langgeng", distance: "2.2 km", time: "8 menit berkendara" },
        { name: "Museum Diponegoro", distance: "1.8 km", time: "6 menit berkendara" },
        { name: "Alun-alun Kota Magelang", distance: "2 km", time: "7 menit berkendara" },
        { name: "Candi Borobudur", distance: "15 km", time: "25 menit berkendara" },
        { name: "Ketep Pass", distance: "18 km", time: "30 menit berkendara" }
      ]
    },
    {
      category: "Fasilitas Umum",
      icon: FaBuilding,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      facilities: [
        { name: "SPBU Pertamina", distance: "800 m", time: "4 menit berkendara" },
        { name: "Bank BCA Magelang", distance: "1.2 km", time: "5 menit berkendara" },
        { name: "Kantor Pos Magelang", distance: "1.5 km", time: "6 menit berkendara" },
        { name: "Masjid Agung Magelang", distance: "1.8 km", time: "6 menit berkendara" },
        { name: "Polsek Magelang Utara", distance: "1 km", time: "4 menit berkendara" }
      ]
    }
  ];

  const accessRoutes = [
    {
      from: "Jakarta",
      distance: "420 km",
      time: "6-7 jam",
      via: "Tol Jakarta-Cikampek-Semarang-Magelang",
      description: "Akses tol langsung menuju Magelang via Semarang"
    },
    {
      from: "Semarang", 
      distance: "85 km",
      time: "1.5 jam",
      via: "Tol Semarang-Bawen-Salatiga-Magelang",
      description: "Rute tercepat dengan akses tol yang nyaman"
    },
    {
      from: "Yogyakarta",
      distance: "43 km",
      time: "1 jam",
      via: "Jalan Magelang-Yogyakarta (Jalan Nasional)",
      description: "Jalan utama yang mudah diakses dan kondisi baik"
    },
    {
      from: "Solo",
      distance: "95 km", 
      time: "2 jam",
      via: "Jalan Raya Solo-Boyolali-Magelang",
      description: "Akses melalui jalan provinsi dengan pemandangan indah"
    },
    {
      from: "Bandung",
      distance: "350 km",
      time: "5-6 jam", 
      via: "Tol Bandung-Jakarta-Semarang-Magelang",
      description: "Perjalanan via tol dengan rest area lengkap"
    },
    {
      from: "Surabaya",
      distance: "385 km",
      time: "6-7 jam",
      via: "Tol Surabaya-Solo-Semarang-Magelang", 
      description: "Rute tol trans Jawa yang mudah dan aman"
    }
  ];

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/maps?q=-7.477771326017855, 110.22402191475447&z=15&output=embed', '_blank');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Halo! Saya ingin mengetahui lebih lanjut tentang lokasi Resonance Residence. Bisa bantu berikan informasi detail?");
    window.open(`https://wa.me/6281229801800?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Tambahan padding top untuk navbar - Hanya di desktop */}
      <div className="min-[801px]:pt-20">
        {/* Header Section */}
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
          
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Lokasi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Resonance Residence berada di lokasi strategis di jantung Kota Magelang dengan akses mudah ke berbagai fasilitas
            </motion.p>
          </div>
        </section>

        {/* About Magelang City */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tentang Kota Magelang
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kota Sejuta Pesona di Jantung Jawa Tengah
                </h3>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Magelang</strong> adalah kota bersejarah yang terletak strategis 
                    di tengah Provinsi Jawa Tengah. Dikenal sebagai &quot;Kota Seribu Bunga&quot;, Magelang menawarkan 
                    kombinasi sempurna antara kehidupan kota modern dan nuansa alam pegunungan yang sejuk.
                  </p>
                  
                  <p>
                    Kota ini terkenal dengan <strong className="text-gray-900">Candi Borobudur</strong> yang merupakan 
                    warisan dunia UNESCO, menjadikan Magelang sebagai destinasi wisata internasional. Hal ini 
                    memberikan potensi besar untuk pengembangan ekonomi dan investasi properti.
                  </p>
                  
                  <p>
                    Dengan <strong className="text-gray-900">akses transportasi yang luas</strong> ke kota-kota besar 
                    seperti Yogyakarta (43 km), Solo (95 km), dan Semarang (85 km), Magelang menjadi pilihan ideal 
                    untuk hunian yang tenang namun tetap terhubung dengan pusat bisnis.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-4 bg-[#89AC46]/10 rounded-xl">
                    <h4 className="text-lg sm:text-2xl font-bold text-[#89AC46]">118.000+</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Penduduk</p>
                  </div>
                  <div className="text-center p-4 bg-[#89AC46]/10 rounded-xl">
                    <h4 className="text-lg sm:text-2xl font-bold text-[#89AC46]">18.12 km²</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Luas Wilayah</p>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/magelang.jpg"
                    alt="Kota Magelang"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold">Pemandangan Kota Magelang</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Keunggulan Lokasi
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Resonance Residence terletak di jantung Kota Magelang yang dikenal sebagai Kota Sejuta Pesona. 
                Magelang merupakan kota strategis di Jawa Tengah dengan akses mudah ke Yogyakarta, Solo, Semarang, 
                dan kota-kota besar lainnya. Dikelilingi pegunungan yang asri dan dekat dengan destinasi wisata 
                terkenal seperti Candi Borobudur.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-[#89AC46] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Facilities - Card Grid Format */}
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
                Fasilitas Terdekat
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Berbagai fasilitas penting dalam jangkauan yang mudah dari Resonance Residence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyFacilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl shadow-lg border-2 ${facility.borderColor} overflow-hidden hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Card Header */}
                  <div className={`${facility.bgColor} p-6 border-b ${facility.borderColor}`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg`}>
                        <facility.icon className={`text-3xl ${facility.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{facility.category}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {facility.facilities.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-600">{item.time}</p>
                          </div>
                          <span className="text-sm font-semibold text-[#89AC46] ml-2">{item.distance}</span>
                        </div>
                      ))}
                      {facility.facilities.length > 4 && (
                        <div className="text-center pt-2">
                          <span className="text-sm text-gray-500">+ {facility.facilities.length - 4} fasilitas lainnya</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Access Routes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Akses Transportasi
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mudah dijangkau dari berbagai kota besar di Jawa dengan akses transportasi yang lengkap
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#89AC46] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaRoute className="text-[#89AC46] text-xl mr-3" />
                      <h3 className="text-lg font-bold text-gray-900">Dari {route.from}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{route.distance}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-[#89AC46]" />
                      <span>{route.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaRoad className="mr-2 text-[#89AC46]" />
                      <span className="text-sm">{route.via}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">{route.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Maps Section */}
        {/* Contact & Location */}
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
                Kontak & Lokasi
              </h2>
              <div className="w-24 h-1 bg-[#89AC46] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih lanjut atau kunjungi langsung lokasi kami
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                              {/* Bagian Maps */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://maps.google.com/maps?q=-7.477771326017855, 110.22402191475447&z=15&output=embed"
                    width="100%"
                    height="500"
                    style={{ border: "none" }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>

              {/* Bagian Kontak */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 max-w-[400px]"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hubungi Kami</h3>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1BF3366X4w/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-900 mb-6 hover:text-gray-700 transition group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full shadow-md bg-white group-hover:border-[#89AC46] group-hover:shadow-lg transition-all">
                    <FaFacebookF className="text-xl" />
                  </div>
                  <span className="font-medium">Resonance Residence</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/resonance.residence_magelang?igsh=MWZib3Q5dnNsdTl6Yg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-900 mb-6 hover:text-gray-700 transition group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full shadow-md bg-white group-hover:border-[#89AC46] group-hover:shadow-lg transition-all">
                    <FaInstagram className="text-xl" />
                  </div>
                  <span className="font-medium">@resonance.residence_magelang</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6281229801800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-900 mb-8 hover:text-gray-700 transition group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full shadow-md bg-white group-hover:border-[#89AC46] group-hover:shadow-lg transition-all">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <span className="font-medium">+62 812-2980-1800</span>
                </a>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={openGoogleMaps}
                    className="w-full inline-flex items-center justify-center bg-[#89AC46] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#7A9A3E] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FaDirections className="mr-2" />
                    <span>Lihat di Google Maps</span>
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="w-full inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp className="mr-2" />
                    <span>Jadwalkan Kunjungan</span>
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationDetail;
