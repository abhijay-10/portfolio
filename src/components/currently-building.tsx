"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, CheckCircle2, Scan } from "lucide-react";
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
      name: "PhysioMaster",
      description: "An interactive real-time X-ray simulation and learning platform designed for radiology students and college students to master X-ray procedures in real time. Engineered using Computer Vision, Machine Learning, and Deep Learning to deliver real-time guidance, patient positioning feedback, and radiographic analysis.",
      status: "Completed",
      progress: 100,
      technologies: ["Computer Vision", "Machine Learning", "Deep Learning", "Python"],
      features: [
        "Real-Time X-Ray Simulation & Guidance",
        "Computer Vision Pose & Landmark Tracking",
        "Deep Learning Radiographic Image Analysis",
        "Interactive Training for Radiology Students"
      ],
      icon: <Scan className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="featured-project" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-lg">Featured Project</h2>
        </motion.div>

        <div className={`grid grid-cols-1 ${currentProjects.length > 1 ? "lg:grid-cols-2" : "max-w-4xl"} gap-8`}>
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
                    <div className="flex items-center mt-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-400" />
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
                  <span>Development Status</span>
                  <span className="text-emerald-400 font-semibold">{project.progress}% (Completed)</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-emerald-500 h-1.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                  />
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <h4 className="text-xs font-black mb-4 flex items-center uppercase tracking-widest text-gray-500">
                  <Activity className="w-4 h-4 mr-2 text-primary" /> Key Capabilities & Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs font-medium text-gray-300 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shadow-[0_0_5px_rgba(0,102,255,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-bold px-3 py-1.5 bg-white/5 text-gray-300 border border-white/10 rounded-full uppercase tracking-widest shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
