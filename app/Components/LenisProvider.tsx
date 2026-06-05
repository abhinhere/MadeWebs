"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the device is mobile (width < 768px)
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // By rendering ReactLenis as a sibling rather than a wrapper, we can safely
  // completely unmount it on mobile without destroying the rest of the React tree!
  return (
    <>
      {!isMobile && (
        <ReactLenis root options={{ smoothWheel: true }} />
      )}
      {children}
    </>
  );
}
