"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import SplashScreen from "./SplashScreen";
import ThemeMusicPlayer from "./ThemeMusicPlayer";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import Timeline from "./Timeline";
import PixelGallery from "./PixelGallery";
import MainMessage from "./MainMessage";
import Footer from "./Footer";
import PixelStarsBackground from "./PixelStarsBackground";

export default function GreetingApp() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior});
  };

  if (!isMounted) return <div className="h-screen bg-[#0a0a0a]" />;

  return (
    <>
      <PixelStarsBackground />
      
      <AnimatePresence>
        {!isOpened && <SplashScreen key="splash" onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpened && (
        <div className="relative z-10">
          <ThemeMusicPlayer isPlayingInitially={true} />
          <HeroSection />
          <StorySection />
          <Timeline />
          <PixelGallery />
          <MainMessage />
          <Footer onReplay={handleReplay} />
        </div>
      )}
    </>
  );
}
