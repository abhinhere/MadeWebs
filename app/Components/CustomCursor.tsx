"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Track raw and smoothed mouse positions for trailing effect
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const previousAngle = useRef(0);
  const currentMode = useRef("normal");

  useGSAP(() => {
    // Hide cursor on touch devices to prevent it from getting stuck on screen
    if (window.matchMedia("(pointer: coarse)").matches) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }

    // Set initial position to center of screen
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    smoothMouse.current = { ...mouse.current };

    // Immediately set the cursor's initial position
    gsap.set(cursorRef.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      // Check if the hovered element is a text or interactive element
      const hoveringText = !!target.closest('p, h1, h2, h3, h4, h5, h6, span, a, button, li');
      // Check if we are over a white section
      const hoveringWhiteBg = !!target.closest('.bg-white');

      let newMode = "normal";
      if (hoveringText) {
        newMode = "difference-large";
      } else if (hoveringWhiteBg) {
        newMode = "difference";
      }

      if (newMode !== currentMode.current) {
        currentMode.current = newMode;
        if (cursorRef.current) {
          if (newMode === "difference-large") {
            cursorRef.current.style.mixBlendMode = "difference";
            gsap.to(cursorRef.current, { width: 60, height: 60, marginLeft: -30, marginTop: -30, duration: 0.3, overwrite: "auto", ease: "back.out(1.5)" });
          } else if (newMode === "difference") {
            cursorRef.current.style.mixBlendMode = "difference";
            gsap.to(cursorRef.current, { width: 20, height: 20, marginLeft: -10, marginTop: -10, duration: 0.3, overwrite: "auto", ease: "power2.out" });
          } else {
            cursorRef.current.style.mixBlendMode = "normal";
            gsap.to(cursorRef.current, { width: 20, height: 20, marginLeft: -10, marginTop: -10, duration: 0.3, overwrite: "auto", ease: "power2.out" });
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Ticker for silky smooth following (lerp)
    const ticker = gsap.ticker.add(() => {
      const deltaX = mouse.current.x - smoothMouse.current.x;
      const deltaY = mouse.current.y - smoothMouse.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Faster lerp (0.25) for tighter cursor following with less perceived lag
      smoothMouse.current.x += deltaX * 0.25;
      smoothMouse.current.y += deltaY * 0.25;

      // Calculate rotation angle. Only update if moving to avoid snapping back to 0.
      let angle = previousAngle.current;
      if (distance > 1) {
        angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        previousAngle.current = angle;
      }

      // Map velocity to squeeze (scale) — removed the expensive filter: blur()
      const maxVelocity = 100; // Cap for max stretch
      const normalizedVelocity = Math.min(distance / maxVelocity, 1);

      const scaleX = 1 + normalizedVelocity * 0.8; // Stretch in direction of movement
      const scaleY = 1 - normalizedVelocity * 0.4; // Squeeze perpendicular to movement

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: smoothMouse.current.x,
          y: smoothMouse.current.y,
          rotation: angle,
          scaleX: scaleX,
          scaleY: scaleY,
          transformOrigin: "center center"
        });
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block will-change-transform"
      style={{
        marginLeft: "-10px",
        marginTop: "-10px",
        backfaceVisibility: "hidden",
      }}
    />
  );
};

export default CustomCursor;
