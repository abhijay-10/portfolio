"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Gauge } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Krysha AI",
    description: "Mahabharata Chatbot using RAG & Agents with Vector Database (37,800+ chunks), React Frontend achieving ~80-82% accuracy, enabling fast and context-aware knowledge retrieval for users/clients.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "RAG", "Agentic AI", "Vector Database"],
    features: ["Semantic Search", "High Accuracy", "Context-Aware", "Large Knowledge Base"],
    githubLink: "https://github.com/abhijay-10/krysha_rag",
    liveLink: "#"
  },
  {
    title: "Retrivio AI",
    description: "A Multiple PDF RAG Bot for accurate answers to student's queries of their pdfs uploaded and can ask about that.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    technologies: ["RAG", "LLMs", "PDF Parsing"],
    features: ["Multiple PDFs", "Accurate Answers", "Student Focus", "Query Handling"],
    githubLink: "https://github.com/abhijay-10",
    liveLink: "#"
  },
  {
    title: "AI Study Buddy",
    description: "A scalable AI chatbot using LangChain, FastAPI, and Streamlit with Gemini model integration for real-world use cases and answers.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    technologies: ["LangChain", "FastAPI", "Streamlit", "Gemini API"],
    features: ["Real-world Use Cases", "Scalable", "FastAPI Backend", "Gemini Integration"],
    githubLink: "https://github.com/abhijay-10/AI-Study-Buddy",
    liveLink: "#"
  },
  {
    title: "Intelligence That Never Sleeps",
    description: "Built a real-time driver drowsiness detection system using OpenCV and MediaPipe with Streamlit for monitoring and eye tracking.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    technologies: ["OpenCV", "MediaPipe", "Streamlit", "Computer Vision"],
    features: ["Driver Drowsiness", "Real-time Monitoring", "Eye Tracking", "Edge AI"],
    githubLink: "https://github.com/abhijay-10/Drowsy-Detection",
    liveLink: "#"
  },
  {
    title: "Gesture Talk",
    description: "Developed a real-time sign language recognition system using OpenCV and MediaPipe for accurate gesture detection.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["OpenCV", "MediaPipe", "Computer Vision", "Python"],
    features: ["Sign Language", "Real-time Processing", "Gesture Detection", "High Accuracy"],
    githubLink: "https://github.com/abhijay-10/Sign-Language-ASL",
    liveLink: "#"
  },
  {
    title: "AI Doctor",
    description: "Developed an AI-powered healthcare system for patient health assessment, multi-disease prediction, and intelligent symptom analysis using Machine Learning and predictive analytics techniques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    technologies: ["Machine Learning", "Predictive Analytics", "AI", "Healthcare"],
    features: ["Patient Details", "Automated System", "Symptoms Checker", "Multi-Disease Prediction"],
    githubLink: "https://github.com/baljinder-26/Ai-doctor",
    liveLink: "#"
  }
];

export function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative bg-black">
      {/* Impressive Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Layers className="w-6 h-6 text-gray-300" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white">Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Portfolio</span></h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto uppercase tracking-wider text-sm font-semibold">
            High-performance AI solutions engineered for precision and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              className="group spotlight-card glass-panel rounded-2xl flex flex-col overflow-hidden"
            >
              {/* Infotainment Panel Header */}
              <div className="px-6 py-3 bg-[#111] border-b border-[#2a2a2a] flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-mono tracking-widest">SYS_PANEL_0{idx + 1}</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50 group-hover:bg-green-500 animate-pulse transition-colors" />
                </div>
              </div>

              {/* Image Container with "Acceleration" Hover Effect and Load Animation */}
              <motion.div 
                initial={{ filter: "blur(10px)", scale: 1.1 }}
                whileInView={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.1 + 0.3 }}
                className="relative h-64 w-full overflow-hidden bg-black"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Permanent Links at top right */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="px-4 py-2.5 bg-black/80 backdrop-blur-md border border-[#333] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase text-[10px] font-bold tracking-widest flex items-center shadow-2xl rounded-sm"
                    >
                      <FaGithub className="w-4 h-4 mr-2" /> Source Code
                    </Link>
                  )}
                </div>
                
                {/* Overlay Links (Live Demo only now) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-black/20 z-10">
                  {project.liveLink && project.liveLink !== "#" && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="p-3 bg-primary/90 border border-cyan-400 text-white hover:bg-cyan-600 transition-all duration-300 uppercase text-xs font-bold tracking-widest flex items-center shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Link>
                  )}
                </div>
              </motion.div>

              <div className="p-8 flex flex-col flex-grow bg-black/40 backdrop-blur-sm z-10 relative">
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm font-medium">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-xs font-black mb-4 flex items-center uppercase tracking-widest text-gray-500">
                    <Gauge className="w-4 h-4 mr-2 text-primary" /> Key Capabilities
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-300 flex items-center font-medium uppercase tracking-wide">
                        <span className="w-1 h-1 bg-primary mr-2 shadow-[0_0_5px_rgba(0,102,255,0.8)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-3 py-1.5 bg-white/5 text-gray-300 border border-white/10 rounded-full uppercase tracking-widest shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
