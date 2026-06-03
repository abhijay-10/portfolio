"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Gauge, Zap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const PorscheSilhouette = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-40">
      <motion.svg
        viewBox="0 0 1200 400"
        className="w-[200%] md:w-[120%] h-auto absolute drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        initial={{ x: "-2%" }}
        animate={{ x: "2%" }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="porsche-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0066ff" stopOpacity="1" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* The iconic 911 Flyline */}
        <motion.path
          d="M 50 260 C 120 255, 180 240, 250 210 C 320 160, 380 120, 480 120 C 650 120, 820 180, 950 240 C 1050 260, 1120 265, 1150 265"
          fill="none"
          stroke="url(#porsche-glow)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 102, 255, 0.6))" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.5, 0.9, 1]
          }}
        />
        
        {/* Subtle Ground/Speed Reflection */}
        <motion.path
          d="M 0 280 L 1200 280"
          fill="none"
          stroke="url(#porsche-glow)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0, 0.2, 0.2, 0, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.5, 0.9, 1],
            delay: 0.3
          }}
        />
      </motion.svg>
      
      {/* Occasional fast headlight sweep for speed effect */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-headlight blur-[1px]" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden bg-black">
      {/* Restored Impressive Carbon Fiber Background with Pure Black Base */}
      <div className="absolute inset-0 z-0 carbon-fiber opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)]" />
      
      <PorscheSilhouette />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Profile Image - Metallic Ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#2a2a2a] shadow-[0_0_30px_rgba(0,102,255,0.2)] mb-8 relative group"
          >
            <div className="absolute inset-0 rounded-full border border-white/10 z-20 pointer-events-none" />
            <Image
              src="/Abhijay_portfolio.jpeg"
              alt="Abhijay Parashar"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              unoptimized
            />
          </motion.div>

          {/* Ignition Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse shadow-[0_0_10px_rgba(0,102,255,0.8)]"></span>
            System Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-emerald-400 to-teal-500">Abhijay Parashar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-semibold tracking-wide uppercase"
          >
            AI Engineer <span className="text-[#2a2a2a]">|</span> GenAI Developer <span className="text-[#2a2a2a]">|</span> Agentic AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Engineering intelligent systems, autonomous agents, and production-ready GenAI solutions to accelerate complex problem solving and automate workflows with high-performance precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center rounded-none bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] border border-primary hover:border-blue-400"
            >
              Ignite Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="group inline-flex items-center justify-center rounded-none border border-[#2a2a2a] bg-[#1a1a1a] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-[#222] hover:text-white hover:border-gray-500"
            >
              <Download className="mr-2 h-4 w-4 text-primary group-hover:text-white transition-colors" />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-14 flex items-center gap-8 border-t border-[#2a2a2a] pt-8 w-full justify-center"
          >
            <Link href="https://github.com/abhijay-10" target="_blank" className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/abhijay-parashar-5a9a72231" target="_blank" className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:parasharabhijay@gmail.com" className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

