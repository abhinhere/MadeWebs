"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className }: TextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Select all the individual word spans
    const words = gsap.utils.toArray(containerRef.current.querySelectorAll(".reveal-word"));
    
    // Create the buttery smooth scrub animation
    gsap.fromTo(
      words,
      { 
        opacity: 0.15,
      },
      {
        opacity: 1,
        stagger: 0.1, // Staggering creates the "reading" effect word by word
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",   // Start when the top of the text hits 80% down the screen
          end: "bottom 50%",  // Finish when the bottom of the text hits 50% of the screen
          scrub: 1.5,         // Adds 1.5 seconds of smoothing lag for that "buttery" feel
        }
      }
    );
  }, { scope: containerRef });

  // Split the text by spaces, wrapping each word in a span while preserving actual space characters
  // This ensures text wrapping and alignment (like text-center) works perfectly.
  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="reveal-word inline-block">{word}</span>
          {i !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </p>
  );
}
