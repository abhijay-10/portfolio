"use client";

import { motion } from "framer-motion";
import { Gauge, Cpu, Zap, Cloud, Database, Code2, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const skillCategories = [
  {
    title: "AI/ML DEVELOPMENT",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Python", "Machine Learning", "NLP", "OpenCV", "Deep Learning", "SQL", "Data Structures"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "VECTOR DYNAMICS",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["ChromaDB", "FAISS", "Transformers", "LangGraph", "LangChain", "LangServe", "LLMs"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "CLOUD INFRA.",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ["AWS", "EC2", "S3", "VPC", "Auto Scaling"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "AUTOMATION",
    icon: <Zap className="w-6 h-6 text-primary" />,
    skills: ["FastAPI", "Python Streamlit", "N8N Automation", "MLOps", "AI Workflow"],
    colSpan: "md:col-span-2 lg:col-span-2",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Skills() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section id="skills" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.07)_0%,transparent_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Layers className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-lg">Technical Skills</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 opacity-50" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            A comprehensive overview of my technical capabilities, ranging from deep learning engines to high-performance cloud infrastructure and open source contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseMove={handleMouseMove}
              className={`group spotlight-card glass-panel rounded-3xl p-6 md:p-8 ${category.colSpan}`}
            >
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:bg-primary/10 transition-colors">
                  {category.icon}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg md:text-xl text-white tracking-wide">
                    {category.title}
                  </h3>
                  {category.title === "OPEN SOURCE" && (
                    <span className="inline-block mt-1 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                      Top Contributor
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="text-xs md:text-sm font-medium px-4 py-2 rounded-full border bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-default shadow-sm backdrop-blur-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          className="mt-12 spotlight-card glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center relative overflow-hidden group transition-all"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
            <div className="p-4 bg-white/5 rounded-3xl border border-white/10 shadow-inner group-hover:bg-primary/10 transition-colors">
              <FaGithub className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">GitHub Activity</h3>
              <p className="text-gray-400 mt-1 text-sm mb-3 font-medium">Continuous open-source contributions & code deployments</p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(0,102,255,0.2)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 400+ Commits
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
