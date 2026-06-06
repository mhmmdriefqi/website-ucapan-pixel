"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mb-8 font-pixel text-xl md:text-3xl text-neutral-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Sebuah Pesan Untukmu
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="font-pixel text-sm px-6 py-4 bg-neutral-900 border-2 border-neutral-700 rounded-none text-neutral-300 hover:text-white hover:border-pink-300 hover:bg-neutral-800 transition-all shadow-[4px_4px_0_0_rgba(255,192,203,0.3)] hover:shadow-[4px_4px_0_0_rgba(255,192,203,0.6)] cursor-pointer"
        >
          [ BUKA UCAPAN ]
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-[#0a0a0a] to-[#0a0a0a]" />
    </motion.div>
  );
}
