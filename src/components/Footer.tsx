"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRedo } from "react-icons/fa";

export default function Footer({ onReplay }: { onReplay: () => void }) {
  return (
    <footer className="relative border-t-2 border-neutral-800 bg-[#0a0a0a] py-16 px-6 mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-pink-400 mb-6"
        >
          <FaHeart size={24} />
        </motion.div>
        
        <p className="font-pixel text-sm text-neutral-400 mb-8 max-w-md leading-relaxed">
          Terima kasih sudah membaca sampai akhir. 
          Semoga ini bisa membuatmu tersenyum hari ini.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReplay}
          className="font-pixel text-xs flex items-center gap-3 px-6 py-3 bg-neutral-900 border-2 border-neutral-700 text-neutral-300 hover:text-white hover:border-pink-300 transition-colors cursor-pointer shadow-[4px_4px_0_0_rgba(15,15,15,1)] hover:shadow-[4px_4px_0_0_rgba(255,192,203,0.3)]"
        >
          <FaRedo /> Ulangi dari awal
        </motion.button>
        
        <div className="mt-16 text-[10px] uppercase font-pixel tracking-widest text-neutral-600">
          Made with pixel and love &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
