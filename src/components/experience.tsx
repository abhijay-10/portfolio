"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Generative AI Intern",
    organization: "CoderRoots",
    duration: "Jan 2026 - Jul 2026",
    responsibilities: [
      "Worked on Generative AI applications using LLMs, LangChain, Prompt Engineering and Python to build AI-powered solutions, chatbots, and automation features.",
      "Collaborated on developing scalable and user-friendly AI functionalities."
    ],
    impact: "Built robust AI integrations."
  },
  {
    role: "Python Trainee",
    organization: "07 Services",
    duration: "Jun 2024 - Dec 2024",
    responsibilities: [
      "Completed 6 months training, developed skills in Python, Machine Learning, Deep Learning (CNN, RNN, ANN) and NLP concepts along with Data Science and hands-on experience in Projects."
    ],
    impact: "Developed strong foundational skills in AI/ML & Data Science."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/50" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-28px] md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-background border-4 border-border/50 rounded-full flex items-center justify-center z-10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-5/12 glass-card p-6 ${
                idx % 2 === 0 ? "md:mr-16" : "md:ml-16"
              }`}>
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-primary font-medium mb-2">{exp.organization}</h4>
                <div className="text-sm text-muted-foreground mb-4 font-mono">{exp.duration}</div>
                
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-sm text-foreground/80 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 mr-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">Key Impact</span>
                  <p className="text-sm font-medium">{exp.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
