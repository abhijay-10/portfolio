"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Let the fade out finish before calling complete
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
            >
              Abhijay
            </motion.h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] bg-white mt-4"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
