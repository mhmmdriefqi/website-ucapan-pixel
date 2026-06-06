"use client";
import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Awal Mula",
    content: "Semuanya dimulai dari hal-hal kecil yang sederhana. Siapa sangka dari sapaan biasa bisa menjadi sesuatu yang bermakna.",
    date: "Awal Bertemu",
  },
  {
    title: "Masa-Masa Menyenangkan",
    content: "Tawa, canda, dan kadang sedikit perbedaan pendapat. Tapi justru itu yang membuat semuanya hidup dan berwarna.",
    date: "Perjalanan Kita",
  },
  {
    title: "Hari Ini & Nanti",
    content: "Terima kasih sudah menjadi bagian dari hidup ini. Semoga hari-harimu selalu secerah senyummu.",
    date: "Sekarang",
  }
];

export default function StorySection() {
  return (
    <section className="relative min-h-screen py-24 px-6 max-w-3xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-neutral-100 mb-4 tracking-wider">Chapter 1</h2>
        <div className="h-1 w-24 bg-pink-400/50 mx-auto" />
      </motion.div>

      <div className="space-y-12">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative bg-[#111111] border-2 border-neutral-800 p-8 hover:border-pink-300/30 transition-colors shadow-[8px_8px_0_0_rgba(15,15,15,1)] hover:shadow-[8px_8px_0_0_rgba(255,192,203,0.1)]"
          >
            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0a0a] -mt-[2px] -ml-[2px]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0a0a] -mt-[2px] -mr-[2px]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0a0a] -mb-[2px] -ml-[2px]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0a0a] -mb-[2px] -mr-[2px]" />

            <div className="font-pixel text-xs text-neutral-500 mb-4 uppercase tracking-widest">
              [{story.date}]
            </div>
            <h3 className="font-pixel text-lg text-pink-200 mb-4">{story.title}</h3>
            <p className="text-neutral-400 leading-relaxed font-light text-lg">
              {story.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
