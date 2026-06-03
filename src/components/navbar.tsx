"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 z-50 transition-all duration-500 w-[92%] max-w-4xl rounded-full glass-pill py-3 px-6 md:px-8 border border-white/10 ${isScrolled ? 'bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' : 'bg-black/20'}`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="#" onClick={(e) => handleNavClick(e, "#home")} className="text-xl font-extrabold tracking-tighter text-white hover:text-gray-300 transition-colors">
          Abhijay<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">.ai</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-5 border-l border-white/10 pl-6">
            <Link href="https://github.com/abhijay-10" target="_blank" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <FaGithub className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhijay-parashar-5a9a72231" target="_blank" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <FaLinkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden mt-4 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl absolute top-full left-0 right-0"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 justify-center">
                <Link href="https://github.com/abhijay-10" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <FaGithub className="w-5 h-5 text-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/abhijay-parashar-5a9a72231" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <FaLinkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

