"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

export default function ThemeMusicPlayer({ isPlayingInitially }: { isPlayingInitially: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(isPlayingInitially);
  const [hasAudioContext, setHasAudioContext] = useState(false);

  useEffect(() => {
    if (isPlayingInitially && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed, user interaction may be required', e));
      setIsPlaying(true);
    }
  }, [isPlayingInitially]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log(e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-neutral-900 border-2 border-neutral-700 p-3 flex items-center gap-4 bg-opacity-80 backdrop-blur-sm shadow-[4px_4px_0_0_rgba(10,10,10,0.8)]">
      <audio
        ref={audioRef}
        src="/Terbuang Dalam Waktu-Barasuara.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-center gap-3 overflow-hidden">
        <FaMusic className={`text-pink-300 ${isPlaying ? 'animate-bounce' : ''}`} size={16} />
        <div className="hidden sm:block font-pixel text-[10px] text-neutral-300 w-24 overflow-hidden whitespace-nowrap relative">
          <motion.div
            animate={{ x: [100, -100] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            Terbuang Dalam Waktu-Barasuara.mp3
          </motion.div>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="font-pixel text-xs bg-neutral-800 border border-neutral-600 p-2 hover:bg-neutral-700 hover:text-pink-200 transition-colors cursor-pointer"
      >
        {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
      </button>
    </div>
  );
}
