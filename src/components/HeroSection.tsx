"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function HeroSection() {
  const fullText = "Untuk Sesorang yang Spesial...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        className="mb-8 relative"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        {/* Placeholder for Pixel Character. Use a genuine static/sprite image later */}
        <div className="w-32 h-32 bg-neutral-800 border-4 border-neutral-600 flex items-center justify-center pixelated shadow-[8px_8px_0_0_rgba(20,20,20,0.8)] mx-auto relative group">
          <span className="text-4xl">👾</span>
          {/* A floating heart above character */}
          <motion.div 
            className="absolute -top-6 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaHeart size={20} />
          </motion.div>
        </div>
      </motion.div>

      <div className="h-16 flex items-center justify-center pt-2">
        <h1 className="font-pixel text-xl md:text-3xl lg:text-4xl text-neutral-100 leading-normal md:leading-normal">
          {displayedText}
          <span className="animate-pulse">_</span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-6 max-w-xl"
      >
        <p className="text-neutral-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
          Setiap perjalanan punya ceritanya sendiri, dan ini adalah sedikit kilas balik tentang kita.
        </p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-neutral-500 font-pixel text-xs flex flex-col items-center gap-2"
        >
          <span>Scroll Kebawah</span>
          <div className="w-4 h-4 border-b-4 border-r-4 border-neutral-500 rotate-45 transform mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
