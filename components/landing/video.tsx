"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VideoSection({ videoSrc }: { videoSrc: string }) {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load video metadata untuk thumbnail
  useEffect(() => {
    if (isClient && thumbnailVideoRef.current) {
      const video = thumbnailVideoRef.current;
      
      const handleLoadedData = () => {
        // Set video ke detik ke-1 untuk mendapatkan frame yang bagus
        video.currentTime = 1;
        setVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [isClient]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  if (!isClient) return null; // Hindari SSR untuk elemen video

  return (
    <>
    
      {/* Video Section dengan Company Profile di dalam kotak hijau */}
      <div className="relative bg-[#89AC46] overflow-hidden">
        {/* Bubble Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-12 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-20 w-10 h-10 bg-white/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-24 left-1/4 w-14 h-14 bg-white/8 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/12 rounded-full animate-bounce"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-white/6 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-20 w-12 h-12 bg-white/8 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-white/15 rounded-full animate-bounce"></div>
          <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-white/7 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto py-10 px-4 z-10">
          {/* Company Profile Section di dalam kotak hijau */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Company Profile
            </h2>
            
          </motion.div>

          {/* Thumbnail dari frame pertama video */}
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative cursor-pointer group"
              onClick={handlePlayClick}
            >
              {/* Video sebagai thumbnail dengan poster fallback */}
              <div className="relative">
                <video
                  ref={thumbnailVideoRef}
                  className={`w-full rounded-lg shadow-lg transition-opacity duration-300 ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={videoSrc}
                  preload="metadata"
                  muted
                  playsInline
                />
                
                {/* Fallback image jika video belum load */}
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6b8f35] to-[#547a2a] rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg font-medium">Loading Video...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Overlay tombol play */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg transition-all duration-300 group-hover:bg-opacity-60">
                <div className="bg-white bg-opacity-90 rounded-full p-6 transition-all duration-300 group-hover:bg-opacity-100 group-hover:scale-110">
                  <FaPlay className="text-[#89AC46] text-3xl ml-1" />
                </div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Company Profile Video</h3>
                <p className="text-sm opacity-90">Klik untuk memutar video</p>
              </div>
            </motion.div>
          )}

          {/* Video player */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg"
                controls
                autoPlay
                preload="auto"
                onEnded={() => setIsPlaying(false)}
                onError={() => {
                  console.error("Error loading video");
                  setIsPlaying(false);
                }}
              >
                <source src={videoSrc} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}