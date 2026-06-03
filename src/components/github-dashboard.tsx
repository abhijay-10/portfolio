"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitFork, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function GithubDashboard() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  // Mock data for the dashboard. In a real app, you would fetch this from the GitHub API.
  const stats = [
    { label: "Total Commits", value: "400+", icon: <GitCommit className="w-6 h-6 text-primary" /> },
    { label: "Repositories", value: "8", icon: <GitFork className="w-6 h-6 text-white" /> }
  ];

  const languages = [
    { name: "Python", percentage: 65, color: "bg-blue-500" },
    { name: "Vector DBs (Qdrant, FAISS, ChromaDB)", percentage: 25, color: "bg-purple-500" },
    { name: "TypeScript/React", percentage: 10, color: "bg-blue-400" }
  ];

  return (
    <section className="py-24 relative bg-transparent border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <FaGithub className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-lg">Code Contributions</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6 opacity-50" />
          <Link 
            href="https://github.com/abhijay-10" 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-widest uppercase text-xs"
          >
            @abhijay-10
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                className="spotlight-card glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
              >
                <div className="p-4 bg-white/5 rounded-2xl mb-4 border border-white/10 shadow-inner group-hover:bg-primary/10 transition-colors relative z-10">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black mb-2 text-white relative z-10">{stat.value}</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Languages Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="spotlight-card glass-panel rounded-3xl p-8 flex flex-col relative overflow-hidden group"
          >
            <h3 className="font-black text-xl mb-8 text-white uppercase tracking-widest relative z-10">Core Stack</h3>
            
            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex mb-8">
              {languages.map((lang, idx) => (
                <div 
                  key={idx} 
                  className={`h-full ${lang.color}`} 
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="space-y-5 mt-auto relative z-10">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between group/lang">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${lang.color} shadow-[0_0_10px_currentColor]`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover/lang:text-white transition-colors">{lang.name}</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500 group-hover/lang:text-white transition-colors">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
