"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Shield, X, ImageIcon, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    id: "1",
    title: "Verbal Commendation",
    issuer: "IMUN - International Model United Nations",
    date: "2020",
    description: "Got 3rd position in Verbal Commendation at IMUN 12.0 while representing as a United Nations Delegate.",
    icon: Award,
    iconImage: "/IMUN.png",
    link: "#",
    photos: []
  },
  {
    id: "2",
    title: "National Mathematics Day 2025",
    issuer: "Mathematics Competition",
    date: "2025",
    description: "Achieved 2nd position in project display and 3rd position in Quiz Competition. Built a project detecting area and volume using ultrasonic sensors with Arduino.",
    icon: Trophy,
    link: "#",
    photos: [
      "/National_Maths_Day_2025.jpeg",
      "/National_1.jpeg"
    ]
  },
  {
    id: "3",
    title: "National Science Day 2024",
    issuer: "Science Exhibition",
    date: "2024",
    description: "Secured 2nd position for developing an innovative Car Parking System project.",
    icon: Star,
    link: "#",
    photos: [
      "/National_Science_day.jpeg"
    ]
  },
  {
    id: "4",
    title: "NEC, IIT Bombay",
    issuer: "E-Cell",
    date: "",
    description: "Participated in E-Cell at National Entrepreneurship Challenge. Organized the 'Illuminate E-Cell' workshop, focusing on business skills, risk-taking, and startup strategies to establish a coding enterprise.",
    icon: Trophy,
    link: "#",
    photos: [
      "/NEC_bombay_1.jpeg",
      "/NEC_bombay_2.jpeg",
      "/NEC_bombay_3.jpeg",
      "/Bombay_NEC.jpeg",
      "/NEC_IIT.jpeg",
      "/NEC.jpeg"
    ]
  },
  {
    id: "5",
    title: "Hackathons - Protowar 1.0",
    issuer: "Chandigarh University",
    date: "February 2026",
    description: "Attended the hackathon at Chandigarh University and developed project 'Awaaz'. Awaaz acts as a voice for rural areas, enabling villagers to draw petitions for the government and administration regarding local problems.",
    icon: Shield,
    link: "#",
    photos: [
      "/Chandigarh_University_1.jpeg"
    ]
  }
];

export function Achievements() {
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photos: string[], title: string, description: string) => {
    setSelectedPhotos(photos);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setCurrentPhotoIndex(0);
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore background scrolling
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (isModalOpen && selectedPhotos.length > 1) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % selectedPhotos.length);
      }, 5000); // Auto-advance every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedPhotos.length]);

  return (
    <>
      <section id="achievements" className="py-24 relative bg-transparent">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Achievements */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12 text-center"
              >
                <div className="inline-flex items-center justify-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-lg">Achievements</h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
              </motion.div>

              <div className="space-y-8">
                {achievements.map((item, idx) => {
                  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--x", `${x}px`);
                    e.currentTarget.style.setProperty("--y", `${y}px`);
                  };

                  return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card glass-panel flex flex-col md:flex-row overflow-hidden rounded-3xl group shadow-2xl"
                  >
                    {/* Large Image Section (Left on Desktop, Top on Mobile) */}
                    {item.photos && item.photos.length > 0 && (
                      <div 
                        className="w-full md:w-2/5 h-64 md:h-auto relative cursor-pointer overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/5"
                        onClick={() => openModal(item.photos, item.title, item.description)}
                      >
                        <Image src={item.photos[0]} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          {item.photos.length > 1 && (
                            <div className="px-3 py-1 bg-black/80 border border-[#333] rounded text-[10px] text-white font-bold tracking-widest backdrop-blur-sm">
                              +{item.photos.length - 1} PHOTOS
                            </div>
                          )}
                          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-8 md:p-10 flex flex-col flex-grow justify-center relative z-10 bg-black/20 backdrop-blur-sm">
                      {!item.photos || item.photos.length === 0 ? (
                        <div className="absolute top-8 right-8 p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner opacity-50 group-hover:opacity-100 transition-opacity">
                          {item.iconImage ? (
                            <Image src={item.iconImage} alt={item.issuer} width={32} height={32} className="w-8 h-8 object-contain" unoptimized />
                          ) : (
                            <item.icon className="w-8 h-8 text-gray-500" />
                          )}
                        </div>
                      ) : null}

                      <div className="flex items-center gap-3 mb-2">
                        {(!item.photos || item.photos.length === 0) && (
                          <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 sm:hidden block shadow-inner">
                            {item.iconImage ? (
                              <Image src={item.iconImage} alt={item.issuer} width={16} height={16} className="w-4 h-4 object-contain" unoptimized />
                            ) : (
                              <item.icon className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        )}
                        <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          {item.issuer}
                        </span>
                        {item.date && (
                          <>
                            <span className="text-gray-600 hidden sm:block">•</span>
                            <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
                              {item.date}
                            </span>
                          </>
                        )}
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">{item.description}</p>
                      
                      {item.photos && item.photos.length > 0 && (
                        <div className="mt-auto pt-4 border-t border-white/5">
                          <button
                            onClick={() => openModal(item.photos, item.title, item.description)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 text-gray-200 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 font-bold text-xs uppercase tracking-widest backdrop-blur-sm"
                          >
                            <ImageIcon className="w-4 h-4" /> Explore Gallery
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )})}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylish Photo Collage Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/40 w-full max-w-6xl h-[85vh] rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,102,255,0.15)] overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-20 flex flex-col p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white pointer-events-none">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-3xl font-bold tracking-tight drop-shadow-md">{selectedTitle}</h3>
                  <button
                    onClick={closeModal}
                    className="p-3 bg-white/20 hover:bg-destructive text-white rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto shadow-lg shrink-0 ml-4"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/90 text-sm md:text-base max-w-3xl drop-shadow-md leading-relaxed">{selectedDescription}</p>
              </div>
              
              {/* Slideshow Container */}
              <div className="flex-grow w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhotoIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 pt-32 pb-16 px-6 md:px-20 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0a] border border-[#222]">
                      {selectedPhotos.length > 0 && (
                        <Image 
                          src={selectedPhotos[currentPhotoIndex]} 
                          alt={`Event Photo ${currentPhotoIndex + 1}`} 
                          fill 
                          className="object-contain bg-black/50" 
                          unoptimized 
                        />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {selectedPhotos.length > 1 && (
                  <>
                    {/* Left Navigation Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPhotoIndex((prev) => prev === 0 ? selectedPhotos.length - 1 : prev - 1);
                      }}
                      className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all z-30 shadow-lg border border-white/10"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    
                    {/* Right Navigation Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPhotoIndex((prev) => (prev + 1) % selectedPhotos.length);
                      }}
                      className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all z-30 shadow-lg border border-white/10"
                    >
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
                      {selectedPhotos.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPhotoIndex(i);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${i === currentPhotoIndex ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-white/40 w-2 hover:bg-white/70"}`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
