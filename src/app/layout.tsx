import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijay Parashar | AI Engineer & GenAI Developer",
  description: "Portfolio of Abhijay Parashar, an AI Engineer specializing in Generative AI, Agentic AI Systems, Machine Learning, and Cloud Computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Premium Deep Purple Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0014] overflow-hidden">
            {/* Massive Bottom Glow */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.4)_0%,rgba(76,29,149,0.2)_40%,transparent_70%)] blur-[80px] pointer-events-none" />
            
            {/* Subtle top mesh for texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1)_0%,transparent_50%)] animate-mesh pointer-events-none" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_30%)] animate-mesh pointer-events-none" style={{ animationDelay: '-5s' }} />
          </div>
          
          <div className="relative z-0 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
