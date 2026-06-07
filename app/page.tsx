"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true }); // Prevent mobile address bar show/hide from causing layout stutters

import TextReveal from "./Components/TextReveal";
import Services from "./Components/Services";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger after a short delay to calculate trigger coordinates starting from the top
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Force manual scroll restoration and scroll to top BEFORE creating any ScrollTriggers
    // This prevents scrub animations from playing in reverse on reload
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    const tl = gsap.timeline();

    // 1. Main text reveal (staggered lines sliding up)
    tl.fromTo('.hero-line',
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    )
      // 2. Subtext and button reveal
      .fromTo('.hero-sub-element',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.6" // start before main text finishes
      )
      // 3. Navbar fade in
      .fromTo('.nav-element',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );

    // 4. Hero Text Lines Horizontal Parallax
    const lines = gsap.utils.toArray('.hero-line');
    if (lines.length >= 3) {
      // Line 1 moves left
      gsap.to(lines[0] as HTMLElement, {
        x: () => window.innerWidth < 768 ? -40 : -150,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Line 2 moves right
      gsap.to(lines[1] as HTMLElement, {
        x: () => window.innerWidth < 768 ? 40 : 150,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Line 3 moves left
      gsap.to(lines[2] as HTMLElement, {
        x: () => window.innerWidth < 768 ? -40 : -150,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#078fcd] text-white relative overflow-x-hidden w-full">


      {/* Subtle modern background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-white opacity-10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="relative px-4 md:px-14 top-0 w-full flex items-center justify-between font-geist tracking-tighter h-20 z-30">
        {/* Logo */}
        <div className="nav-element flex flex-1">
          <Image src="/madewebslogo.png" alt="logo" width={80} height={80} />
        </div>

        {/* Nav Links */}
        <ul className="nav-element hidden lg:flex text-[#36454F] lg:space-x-6 text-[clamp(1.2rem,1.8vw,1.8rem)] font-light tracking-tighter items-center justify-center flex-1">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#works">Works</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Socials */}
        <ul className="nav-element hidden lg:flex flex-1 text-[1rem] font-medium space-x-6 justify-end text-white/80">
          <li><a href="https://www.linkedin.com/company/madewebs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
          <li><a href="mailto:info@madewebs.in" className="hover:text-white transition-colors duration-300">Gmail</a></li>
          <li><a href="https://wa.me/917559907591" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">WhatsApp</a></li>
        </ul>

        {/* Mobile menu button */}
        <div className="nav-element lg:hidden z-30">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-white/80 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-2.5 relative">
              <span className={`absolute left-0 top-0 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-[4px]' : 'w-[70%]'}`} />
              <span className={`absolute right-0 bottom-0 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-[4px]' : 'w-[70%]'}`} />
            </div>
          </button>
        </div>

        {/* Dropdown Menu Card (Smooth scaling animation) */}
        <div
          className={`absolute top-20 right-4 w-60 bg-white border border-[#078fcd]/10 rounded-2xl p-5 shadow-2xl z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-right lg:hidden ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
            }`}
        >
          <ul className="flex flex-col gap-4 text-[1.2rem] font-geist tracking-tight text-[#078fcd]">
            <li
              style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity block">
                Home
              </Link>
            </li>
            <li
              style={{ transitionDelay: isMobileMenuOpen ? '150ms' : '0ms' }}
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity block">
                Services
              </Link>
            </li>
            <li
              style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              <Link href="#works" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity block">
                Works
              </Link>
            </li>
            <li
              style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity block">
                Contact
              </Link>
            </li>
          </ul>

          <div
            style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
            className={`h-[1px] bg-[#078fcd]/20 my-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          />

          {/* Socials inside mobile dropdown */}
          <div
            style={{ transitionDelay: isMobileMenuOpen ? '350ms' : '0ms' }}
            className={`flex gap-4 text-[0.85rem] font-light text-[#078fcd]/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
          >
            <a href="https://www.linkedin.com/company/madewebs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#078fcd] transition-colors">LinkedIn</a>
            <a href="mailto:info@madewebs.in" className="hover:text-[#078fcd] transition-colors">Gmail</a>
            <a href="https://wa.me/917559907591" target="_blank" rel="noopener noreferrer" className="hover:text-[#078fcd] transition-colors">WhatsApp</a>
          </div>
        </div>
      </nav>

      <section className="hero-section relative z-10 px-4 md:px-14 bg-transparent flex flex-col justify-center min-h-[calc(100svh-80px)] py-4 w-full" >
        <div className="hero-parallax-wrapper flex flex-col w-full gap-4 md:gap-12">

          <h1 className="font-light text-[clamp(3rem,7vw,7.6rem)] font-melody md:max-w-[90%] tracking-tighter leading-[1.1] flex flex-col">
            <span className="block hero-line md:whitespace-nowrap leading-none">Building impactful web</span>
            <span className="block hero-line md:whitespace-nowrap leading-none">experiences, eCommerce</span>
            <span className="block hero-line md:whitespace-nowrap leading-none">stores, brands & visuals</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="hero-line font-geist text-[1.3rem] font-light md:text-[2rem] leading-[1.4rem] md:leading-[1.8rem] md:max-w-[80%]">
              MadeWebs is a digital agency specializing in web design, eCommerce, branding, and creative solutions.
            </p>
            <a href="#contact" className="hero-sub-element flex bg-white justify-center text-black p-3 text-[1rem] w-fit font-light rounded-xs">Get Started </a>
          </div>
        </div>
      </section >

      <section className="relative z-10 w-full px-4 md:px-14 py-10">
        <div className="flex h-auto md:min-h-screen justify-center items-start flex-col gap-4 w-full md:max-w-[90%]">
          <p className="font-light text-[clamp(3rem,5vw,5rem)] text-start tracking-tighter font-melody leading-[3rem] md:leading-[6rem] font-medium w-full">
            About Us
          </p>
          <TextReveal
            className="text-[clamp(1.6rem,2.8vw,2.8rem)] text-start font-geist font-light leading-[2rem] md:leading-[3rem]"
            text="MadeWebs is a creative digital agency specializing in web design, eCommerce development, branding, poster design, and digital marketing solutions. We help businesses build a strong and professional online presence through modern, user-focused experiences that blend creativity, strategy, and technology. From designing high-performing websites and online stores to creating impactful brand identities and marketing visuals, we deliver solutions that engage audiences, strengthen brand recognition, and support sustainable business growth."
          />
        </div>
      </section>

      <Services />

      <Works />

      <Contact />

      <footer className="relative z-10 text-white w-full px-4 md:px-6 pt-20 pb-8 min-h-[60vh] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full md:max-w-[80%] mx-auto">

          {/* Call to Action */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-[clamp(3rem,5.5vw,5.75rem)] font-melody tracking-tighter leading-[0.9]">
              Let's create <br /> something amazing.
            </h2>
            <a href="mailto:info@madewebs.in" className="text-[1.2rem] md:text-[1.5rem] font-geist font-light hover:opacity-70 transition-opacity border-b border-white/30 hover:border-white w-fit pb-1">
              info@madewebs.in
            </a>
          </div>

          {/* Links Grid */}
          <div className="flex gap-16 md:gap-24 font-geist font-light text-[1rem] md:text-[1.2rem]">
            <div className="flex flex-col gap-6">
              <h3 className="font-medium text-gray-900 uppercase tracking-widest text-sm">Socials</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="https://www.instagram.com/madewebs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/madewebs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
                <li><a href="mailto:info@madewebs.in" className="hover:text-gray-300 transition-colors">Gmail</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-medium text-gray-900 uppercase tracking-widest text-sm">Sitemap</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link></li>
                <li><Link href="#works" className="hover:text-gray-300 transition-colors">Works</Link></li>
                <li><Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Bottom Text & Copyright */}
        <div className="flex flex-col items-center mt-20 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row w-full justify-between items-center mt-8 border-t border-white/40 pt-6 text-sm text-gray-800 font-geist font-light md:max-w-[80%] mx-auto">
            <p>© {new Date().getFullYear()} MadeWebs. All rights reserved.</p>
            <p>Designed with passion in India</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
