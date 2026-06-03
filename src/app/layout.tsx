import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";

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
          {/* Global Premium Background Mesh */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1)_0%,transparent_50%)] animate-mesh" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_30%)] animate-mesh" style={{ animationDelay: '-5s' }} />
          </div>
          
          <div className="relative z-0 flex flex-col min-h-screen">
            {children}
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
