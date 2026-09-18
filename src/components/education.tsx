"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech Computer Science & Engineering | CGPA: 8.57",
    institution: "DAV Institute of Engineering and Technology, Jalandhar",
    year: "09/2022 – 2026",
    coursework: ["Pursuing Bachelor's in CSE with a strong focus on core computer science subjects."]
  },
  {
    degree: "12th Grade | Percentage: 84.4%",
    institution: "Dayanand Model Sr. Sec. School, Dayanand Nagar, Jalandhar",
    year: "03/2021 – 07/2022",
    coursework: ["Completed higher secondary education."]
  },
  {
    degree: "10th Grade | Percentage: 80.8%",
    institution: "Dayanand Model Sr. Sec. School, Dayanand Nagar, Jalandhar",
    year: "04/2019 – 04/2020",
    coursework: ["Completed secondary education."]
  }
];

export function Education() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/50" />

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-28px] md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-background border-4 border-border/50 rounded-full flex items-center justify-center z-10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-5/12 glass-card p-6 ${
                idx % 2 === 0 ? "md:mr-16" : "md:ml-16"
              }`}>
                <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                <h4 className="text-primary font-medium mb-2">{edu.institution}</h4>
                <div className="text-sm text-muted-foreground mb-4 font-mono">{edu.year}</div>
                
                <div>
                  <h5 className="text-sm font-semibold mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
