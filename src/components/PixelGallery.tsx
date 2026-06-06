"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const photos = [
  { id: 1, color: "bg-red-400", title: "Memory 1" },
  { id: 2, color: "bg-blue-400", title: "Memory 2" },
  { id: 3, color: "bg-green-400", title: "Memory 3" },
  { id: 4, color: "bg-yellow-400", title: "Memory 4" },
  { id: 5, color: "bg-purple-400", title: "Memory 5" },
  { id: 6, color: "bg-pink-400", title: "Memory 6" },
];

export default function PixelGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="relative min-h-screen py-24 px-6 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-pixel text-2xl md:text-3xl text-neutral-100 mb-4 tracking-wider">Gallery Item</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer group relative aspect-square bg-neutral-900 border-4 border-neutral-700 hover:border-pink-300 p-2 md:p-3 transition-colors shadow-[6px_6px_0_0_rgba(20,20,20,0.9)] hover:shadow-[8px_8px_0_0_rgba(255,192,203,0.3)]"
          >
            <div className={`w-full h-full ${photo.color} brightness-75 group-hover:brightness-100 transition-all duration-300 flex items-center justify-center pixelated`}>
              {/* Replace with Next Image later */}
              <span className="font-pixel text-[10px] text-neutral-900 opacity-50">IMG_{photo.id}</span>
            </div>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-950 -mt-1 -ml-1" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-950 -mt-1 -mr-1" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-950 -mb-1 -ml-1" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-950 -mb-1 -mr-1" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="absolute top-6 right-6 text-neutral-400 hover:text-white cursor-pointer z-50">
              <FaTimes size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className={`w-full max-w-3xl aspect-[4/3] md:aspect-video ${selectedPhoto.color} border-4 border-neutral-700 shadow-[12px_12px_0_0_rgba(255,192,203,0.2)] flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-pixel text-4xl text-neutral-900 opacity-80">{selectedPhoto.title}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
