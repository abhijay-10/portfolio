"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Calendar, GitPullRequest, Terminal } from "lucide-react";
import Link from "next/link";

export function CurrentlyBuilding() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const currentProjects = [
    {
      name: "Axoris",
      description: "Architecting a highly scalable, next-generation AI engine. Axoris leverages advanced machine learning models and real-time data processing to deliver unprecedented autonomous capabilities.",
      status: "Active Development",
      progress: 65,
      upcomingFeatures: ["Advanced RAG Implementation", "Autonomous Agent Workflows", "Scalable Vector Search"],
      icon: <Terminal className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 shadow-[0_0_15px_rgba(0,102,255,0.8)]"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_10px_rgba(0,102,255,0.8)]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-lg">Currently Building</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              className="spotlight-card glass-panel rounded-3xl p-8 border border-white/10 bg-black/40 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{project.name}</h3>
                    <div className="flex items-center mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                      <Activity className="w-3 h-3 mr-2 text-primary" />
                      {project.status}
                    </div>
                  </div>
                </div>
                <Link href="https://github.com/abhijay-10" target="_blank" className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-full transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-gray-300" />
                </Link>
              </div>

              <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed relative z-10 max-w-xl">
                {project.description}
              </p>

              <div className="mb-8 relative z-10">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">
                  <span>Development Progress</span>
                  <span className="text-primary">{project.progress}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(0,102,255,0.8)]"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-xs font-black mb-4 flex items-center uppercase tracking-widest text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-primary" /> Upcoming Features
                </h4>
                <ul className="space-y-3">
                  {project.upcomingFeatures.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs font-medium text-gray-300 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shadow-[0_0_5px_rgba(0,102,255,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
