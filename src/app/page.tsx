"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { GithubDashboard } from "@/components/github-dashboard";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <main className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000"}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Experience />
        <Education />
        <Achievements />
        <GithubDashboard />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
