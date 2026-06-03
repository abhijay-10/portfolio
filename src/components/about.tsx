"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Globe, Zap, Gauge } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Architecture</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I am a Dedicated and Motivated individual seeking opportunities in the IT field, with a strong foundation in programming and problem-solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in building applications and exploring modern technologies, with a focus on efficient, scalable solutions. My expertise lies at the intersection of Machine Learning, Generative AI applications, and robust backend development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a quick learner with a collaborative mindset, committed to writing clean, maintainable code and continuously growing through new challenges and improving myself towards cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Generative AI</h3>
              <p className="text-sm text-muted-foreground">Building advanced LLM applications and RAG systems.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Agentic AI</h3>
              <p className="text-sm text-muted-foreground">Designing autonomous agents for complex problem-solving.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Automation</h3>
              <p className="text-sm text-muted-foreground">Streamlining workflows with intelligent automation.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground">Deploying scalable AI models on robust cloud architecture.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
