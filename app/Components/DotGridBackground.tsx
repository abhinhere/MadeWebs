"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DotGridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Track raw and smoothed mouse positions for buttery animation
  const mouse = useRef({ pageX: 0, pageY: 0, clientX: 0, clientY: 0 });
  const smoothMouse = useRef({ pageX: 0, pageY: 0, clientX: 0, clientY: 0 });

  useGSAP(() => {
    // Disable on touch devices to save performance and prevent scrolling lag
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    // Initial center position
    mouse.current = { 
      pageX: window.innerWidth / 2, 
      pageY: window.innerHeight / 2,
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2
    };
    smoothMouse.current = { ...mouse.current };

    let idleTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { 
        pageX: e.pageX, 
        pageY: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY
      };

      // Fade in when moving
      gsap.to(containerRef.current, { opacity: 1, duration: 0.3, overwrite: "auto" });

      // Reset idle timeout
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        // Fade out when mouse stops
        gsap.to(containerRef.current, { opacity: 0, duration: 0.6, overwrite: "auto" });
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // GSAP Ticker for smooth custom lerp animation
    const ticker = gsap.ticker.add(() => {
      // Lerp (linear interpolation) factor: 0.1 means very smooth follow
      smoothMouse.current.pageX += (mouse.current.pageX - smoothMouse.current.pageX) * 0.1;
      smoothMouse.current.pageY += (mouse.current.pageY - smoothMouse.current.pageY) * 0.1;
      smoothMouse.current.clientX += (mouse.current.clientX - smoothMouse.current.clientX) * 0.1;
      smoothMouse.current.clientY += (mouse.current.clientY - smoothMouse.current.clientY) * 0.1;

      if (containerRef.current) {
        // Update CSS variables for the spotlight mask
        containerRef.current.style.setProperty('--x', `${smoothMouse.current.pageX}px`);
        containerRef.current.style.setProperty('--y', `${smoothMouse.current.pageY}px`);
      }

      if (gridRef.current) {
        // Calculate 3D tilt based on mouse position relative to screen center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Tilt amount (max degrees). RotateX is inverted so it tilts towards the mouse.
        const rotateX = ((smoothMouse.current.clientY - centerY) / centerY) * -12;
        const rotateY = ((smoothMouse.current.clientX - centerX) / centerX) * 12;
        
        gsap.set(gridRef.current, {
          rotateX: rotateX,
          rotateY: rotateY,
        });
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimeout);
      gsap.ticker.remove(ticker);
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-0"
      style={{
        "--x": "50vw",
        "--y": "50vh",
        perspective: "1000px" // Adds depth for the 3D effect
      } as React.CSSProperties}
    >
      <div 
        ref={gridRef}
        // Make the grid slightly larger than screen so edges don't show when tilted
        className="absolute -inset-[10%] w-[120%] h-[120%]"
        style={{ transformOrigin: "center center" }}
      >
        {/* Spotlight dots - bright and pop out */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23ffffff' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            // Use standard CSS mask properties
            maskImage: "radial-gradient(circle at var(--x) var(--y), black 0%, transparent 20vw)",
            WebkitMaskImage: "radial-gradient(circle at var(--x) var(--y), black 0%, transparent 20vw)"
          }}
        />
      </div>
    </div>
  );
};

export default DotGridBackground;
