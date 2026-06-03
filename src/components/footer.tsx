import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 text-2xl font-black tracking-tighter text-white uppercase">
              Abhijay<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">.ai</span>
            </Link>
            <p className="text-gray-400 max-w-md text-sm font-medium leading-relaxed tracking-wide">
              Engineering intelligent AI systems, autonomous agents, and high-performance production-ready GenAI solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Systems Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-sm font-medium text-gray-500 hover:text-white hover:translate-x-1 transition-all duration-300 uppercase tracking-wide inline-block">About</Link></li>
              <li><Link href="#skills" className="text-sm font-medium text-gray-500 hover:text-white hover:translate-x-1 transition-all duration-300 uppercase tracking-wide inline-block">Performance Metrics</Link></li>
              <li><Link href="#projects" className="text-sm font-medium text-gray-500 hover:text-white hover:translate-x-1 transition-all duration-300 uppercase tracking-wide inline-block">Projects</Link></li>
              <li><Link href="#experience" className="text-sm font-medium text-gray-500 hover:text-white hover:translate-x-1 transition-all duration-300 uppercase tracking-wide inline-block">Service History</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-black mb-6 text-white uppercase tracking-widest text-xs">Comms Interface</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/abhijay-10" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/abhijay-parashar-5a9a72231" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:parasharabhijay@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Abhijay Parashar. All systems nominal.</p>
          <p className="mt-4 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">Engineered with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
