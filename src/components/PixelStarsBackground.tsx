"use client";
import React, { useEffect, useRef } from "react";

export default function PixelStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number; blinkPhase: number }[] = [];

    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() < 0.9 ? 2 : 4,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random(),
          blinkPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        // Blinking effect
        star.blinkPhase += 0.02;
        const currentOpacity = 0.3 + (Math.sin(star.blinkPhase) + 1) * 0.35 * star.opacity;

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        // Pixel block drawing
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
        
        star.y -= star.speed;
        
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      initStars();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60 pixelated" />;
}
