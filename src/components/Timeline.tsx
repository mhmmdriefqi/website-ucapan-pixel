"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

type Event = {
  id: number;
  year: string;
  title: string;
  desc: string;
  imageColor: string;
  imagePath: string;
};

const events: Event[] = [
  { id: 1, year: "Level 1", title: "Masih Malu-malu", desc: "Masih kaku, baku sapa seperlunya, tapi ada firasat memang kau mi ini orangnya.", imageColor: "bg-blue-400", imagePath: "/timeline1.jpg" },
  { id: 2, year: "Level 2", title: "Mulai Dekatki'", desc: "Obrolan makin panjang, ketawata jago bikin nyangkut di pikiran.", imageColor: "bg-green-400", imagePath: "/timeline2.jpg" },
  { id: 3, year: "Level 3", title: "Lewati Ujian", desc: "Susah senang ta' lewati. Sabarnu itu selalu bikin kurasa puji syukurka jadi Batman mu.", imageColor: "bg-yellow-400", imagePath: "/timeline3.jpg" },
  { id: 4, year: "Level 4", title: "Sekarang mi", desc: "Makasih banyak sudah bertahan sama Batman, nah. Tetapki sama-sama, Bondeng sayang.", imageColor: "bg-purple-400", imagePath: "/timeline4.jpg" },
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section className="relative min-h-screen py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-neutral-100 mb-4 tracking-wider">Jejak Langkah</h2>
      </motion.div>

      {/* The RPG Timeline Line */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Background Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-2 bg-neutral-800 md:-translate-x-1/2 border-x-2 border-neutral-900" />

        {events.map((ev, idx) => (
          <motion.div 
            key={ev.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`relative flex items-center justify-start md:justify-${idx % 2 === 0 ? "end" : "start"} mb-16 w-full`}
          >
            {/* Mobile spacing block */}
            <div className="w-[45px] md:hidden" />
            
            <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left opacity-0"}`}>
              {idx % 2 === 0 && (
                <>
                  <div className="font-pixel text-pink-300 text-sm mb-2">{ev.year}</div>
                  <div className="text-neutral-300">{ev.title}</div>
                </>
              )}
            </div>

            {/* Pixel Node */}
            <div 
              onClick={() => setSelectedEvent(ev)}
              className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-neutral-900 border-4 border-neutral-500 cursor-pointer hover:border-pink-300 transition-colors z-10 flex items-center justify-center group"
            >
              <div className="w-2 h-2 bg-neutral-500 group-hover:bg-pink-300 transition-colors" />
            </div>

            <div className={`hidden md:block md:w-1/2 ${idx % 2 !== 0 ? "pl-8 text-left" : "pr-8 text-right opacity-0"}`}>
              {idx % 2 !== 0 && (
                <>
                  <div className="font-pixel text-pink-300 text-sm mb-2">{ev.year}</div>
                  <div className="text-neutral-300">{ev.title}</div>
                </>
              )}
            </div>
            
            {/* Mobile display content */}
            <div className="md:hidden pr-4 flex-1">
              <div className="font-pixel text-pink-300 text-[10px] mb-1">{ev.year}</div>
              <div className="text-neutral-300 text-sm">{ev.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-neutral-900 border-2 border-neutral-600 w-full max-w-sm overflow-hidden flex flex-col shadow-[8px_8px_0_0_rgba(255,192,203,0.2)]"
            >
              {/* Modal Header */}
              <div className="bg-neutral-800 border-b-2 border-neutral-600 p-3 flex justify-between items-center">
                <span className="font-pixel text-xs text-neutral-300">INFO</span>
                <button onClick={() => setSelectedEvent(null)} className="text-neutral-400 hover:text-white cursor-pointer px-2">
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className={`w-full aspect-video ${selectedEvent.imageColor} mb-6 flex items-center justify-center border-2 border-neutral-800 pixelated relative overflow-hidden`}>
                  <img src={selectedEvent.imagePath} alt={selectedEvent.title} className="absolute inset-0 w-full h-full object-cover text-transparent" onError={(e) => e.currentTarget.style.display = 'none'} />
                  {/* Fallback jika gambar kosong */}
                  <span className="font-pixel text-neutral-900 absolute z-[-1]">IMAGE</span>
                </div>
                <h3 className="font-pixel text-lg text-pink-300 mb-2">{selectedEvent.title}</h3>
                <p className="text-neutral-300 font-light text-sm leading-relaxed mb-4">
                  {selectedEvent.desc}
                </p>
                <div className="flex justify-end">
                  <button onClick={() => setSelectedEvent(null)} className="font-pixel text-xs bg-neutral-800 px-4 py-2 border border-neutral-600 hover:bg-neutral-700 hover:text-pink-200 transition-colors cursor-pointer">
                    &gt; OK
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
