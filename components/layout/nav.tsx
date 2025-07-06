"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(false); // Menutup sidebar setelah klik
    setShowMenuItems(false);
  };

  const handleOpenSidebar = () => {
    setIsOpen(true);
    // Delay untuk menampilkan menu items setelah sidebar muncul
    setTimeout(() => setShowMenuItems(true), 150);
  };

  const handleCloseSidebar = () => {
    setShowMenuItems(false);
    // Delay untuk menutup sidebar setelah menu items hilang
    setTimeout(() => setIsOpen(false), 150);
  };

  // Fungsi untuk menentukan apakah link aktif
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar Utama (Hanya tampil di layar besar) */}
      <nav className="hidden min-[801px]:flex justify-between items-center py-4 px-8 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <Link href="/" onClick={handleClick}>
          <div className="cursor-pointer">
            <Image
              src="/logo3.png"
              alt="Kavling Logo"
              width={270}
              height={48}
              priority
            />
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex space-x-6">
          {[
            { href: "/", label: "Beranda" },
            { href: "/tentang", label: "Tentang Kami" },
            { href: "/properti", label: "Properti" },
            { href: "/lokasi", label: "Lokasi" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={handleClick}
              className={`transition-all duration-300 transform hover:scale-105 ${
                isLinkActive(href) 
                  ? "text-[#89AC46] font-semibold border-b-2 border-[#89AC46]" 
                  : "text-gray-600 hover:text-[#89AC46]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Tombol Hubungi Kami */}
        <Link
          href="#hubungi-kami"
          className="bg-[#89AC46] text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:bg-[#7a9a3e] hover:scale-105 active:scale-95 hover:shadow-lg"
        >
          Hubungi Kami
        </Link>
      </nav>

      {/* Tombol Toggle Sidebar (Hanya di Mobile) */}
      {!isOpen && (
        <button
          onClick={handleOpenSidebar}
          className="fixed top-4 left-4 z-[60] bg-[#89AC46] text-white p-2 rounded-lg hidden max-[800px]:block hover:bg-[#7a9a3e] transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Overlay untuk Mobile Sidebar - Transparan */}
      {isOpen && (
        <div
          onClick={handleCloseSidebar}
          className="fixed inset-0 bg-transparent z-[35] hidden max-[800px]:block"
        />
      )}

      {/* Sidebar (Muncul hanya di Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out hidden max-[800px]:block z-[40]`}
      >
        {/* Tombol Close */}
        <button
          onClick={handleCloseSidebar}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-all duration-200 transform hover:scale-110 hover:rotate-90"
        >
          <FaTimes size={24} />
        </button>

        <Link href="/" onClick={handleClick}>
          <div className="cursor-pointer border-b p-2">
            <Image
              src="/logo3.png"
              alt="Kavling Logo"
              width={200}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Menu Navigasi */}
        <nav className="flex flex-col space-y-4 p-6">
          {[
            { href: "/", label: "Beranda" },
            { href: "/tentang", label: "Tentang Kami" },
            { href: "/properti", label: "Properti" },
            { href: "/lokasi", label: "Lokasi" },
          ].map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              onClick={handleClick}
              className={`py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                showMenuItems 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-4 opacity-0'
              } ${
                isLinkActive(href) 
                  ? "text-[#89AC46] font-semibold bg-green-50 border-l-4 border-[#89AC46] shadow-md" 
                  : "text-gray-600 hover:text-[#89AC46] hover:bg-gray-50 hover:shadow-sm"
              }`}
              style={{
                transitionDelay: showMenuItems ? `${index * 100}ms` : '0ms'
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Tombol Hubungi Kami */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="#hubungi-kami"
            onClick={handleClick}
            className={`block bg-[#89AC46] text-white text-center py-3 rounded-lg font-medium transition-all duration-300 transform hover:bg-[#7a9a3e] hover:scale-105 active:scale-95 hover:shadow-lg ${
              showMenuItems 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: showMenuItems ? '400ms' : '0ms'
            }}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
