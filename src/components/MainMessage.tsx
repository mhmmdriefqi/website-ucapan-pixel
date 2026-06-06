"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MainMessage() {
  return (
    <section className="relative min-h-screen py-24 px-6 max-w-3xl mx-auto flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full text-center relative z-10"
      >
        {/* Decorative heart */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-pink-400 text-4xl mb-8 flex justify-center"
        >
          <span className="pixelated">❤️</span>
        </motion.div>

        <h2 className="font-pixel text-2xl md:text-4xl text-pink-100 mb-10 leading-relaxed shadow-sm drop-shadow-md">
          Makasih Banyak Ya, Bondeng!
        </h2>
        
        <div className="bg-[#111111]/80 backdrop-blur-sm border-2 border-neutral-700 p-8 md:p-12 shadow-[8px_8px_0_0_rgba(15,15,15,0.8)] relative text-left">
          {/* Subtle glowing borders */}
          <div className="absolute inset-0 border border-neutral-700 hover:border-pink-300/50 transition-colors duration-1000 pointer-events-none" />

          <p className="text-neutral-300 text-lg md:text-xl font-light tracking-wide leading-loose mb-6">
            Kalo saya ingat-ingat lagi, eh luar biasa tawwa kesabaranta lewati semuanya sama saya. Ndak gampang memang, tp kita tetap pilih bertahan.
          </p>
          <p className="text-neutral-300 text-lg md:text-xl font-light tracking-wide leading-loose mb-6">
            Makasih banyak sudah jadi cewe yang paling sabar menghadapi semuanya. Sehat-sehatki selalu nah, biarpun kadang bikin emosiki, tapi percaya maki Batman selalu sayangki.
          </p>
          <p className="text-pink-200 text-lg md:text-xl font-medium tracking-wide leading-loose mt-12 text-right">
            - Dari Batman.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
