"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile: touch-capable + small screen
    // Lenis touch handling breaks position:sticky and ScrollTrigger on real mobile browsers
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch && isSmallScreen);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {!isMobile && (
        <ReactLenis
          root
          options={{
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Buttery smooth exponential deceleration
            smoothWheel: true,
          }}
        />
      )}
      {children}
    </>
  );
}
