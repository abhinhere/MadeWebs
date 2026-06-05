"use client";

import Image from "next/image";
import Link from "next/link";
import DotGridBackground from "./Components/DotGridBackground";
import TextReveal from "./Components/TextReveal";

export default function Home() {
  return (
    <main className="bg-[#078fcd] text-white overflow-hidden relative">
      <DotGridBackground />

      {/* Subtle modern background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-white opacity-10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="relative  px-2 md:px-6 top-0 w-full flex flex-1 items-center justify-between font-geist tracking-tighter h-20 z-20">
        {/* Logo */}
        <div className="flex flex-1">
          <Image src="/madewebslogo.png" alt="logo" width={80} height={80} />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-[2rem] text-[#1e1e1e] flex-1 items-center justify-center font-geist tracking-tighter">
          <li><Link href="#" className="">Home</Link></li>
          <li><Link href="#" className="">Works</Link></li>
          <li><Link href="#" className="">Contact</Link></li>
        </ul>

        {/* Socials */}
        <ul className="hidden md:flex flex-1 text-[1rem] space-x-4 justify-end font-medium">
          <li><a href="#" className="">LinkedIn</a></li>
          <li><a href="#" className="">Gmail</a></li>
          <li><a href="#" className="">WhatsApp</a></li>
        </ul>
      </nav>
      <section className="relative z-10 px-2 md:px-6 bg-transparent flex flex-col justify-center min-h-[calc(100svh-80px)] py-4 w-full" >
        <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-12">
          <p className="font-light text-[3.4rem] md:text-[5rem] lg:text-[8rem] font-melody md:max-w-[80%] tracking-tighter leading-[3rem] md:leading-[4rem] lg:leading-[6rem]">
            Building impactful web experiences, eCommerce stores, brands & visuals
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-geist text-[1.3rem] font-light md:text-[2rem] leading-[1.4rem] md:leading-[1.8rem] md:max-w-[80%]">
              MadeWebs is a digital agency specializing in web design, eCommerce, branding, and creative solutions.
            </p>
            <button className="flex bg-white justify-center text-black p-3 text-[1rem] w-fit">Get Started </button>
          </div>
        </div>
      </section >

      <section className="relative z-10 bg-white w-full px-2 md:px-6 py-10">
        <div className="flex min-h-[80svh] md:min-h-screen  justify-center items-center flex-col md:max-w-[80%] gap-4 mx-auto w-full">
          <p className="font-light text-[3rem] md:text-[4rem] lg:text-[5rem] text-start  tracking-tighter font-melody md:text-center text-black leading-[3rem] md:leading-[4rem] lg:leading-[6rem] font-medium w-full">
            About{" "}
            <span className="block md:inline-block">MadeWebs</span>
          </p>
          <TextReveal
            className="text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] text-start font-geist font-light md:text-center text-black leading-[2.4rem] md:leading-[2.8rem] lg:leading-[3.5rem]"
            text="MadeWebs is a creative digital agency specializing in web design, eCommerce development, branding, and visual marketing. We help businesses build a strong online presence through modern, user-focused digital solutions that combine creativity, strategy, and technology. Our goal is to create impactful digital experiences that strengthen brands, engage audiences, and drive business growth."
          />
        </div>
      </section>

      <footer className="relative z-10 bg-black text-white w-full px-4 md:px-6 pt-20 pb-8 min-h-[60vh] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">

          {/* Call to Action */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-[3.2rem] md:text-[4.6rem] lg:text-[6rem] font-melody tracking-tighter leading-[0.9]">
              Let's create <br /> something amazing.
            </h2>
            <a href="mailto:hello@madewebs.com" className="text-[1.2rem] md:text-[1.5rem] font-geist font-light hover:opacity-70 transition-opacity border-b border-white/30 hover:border-white w-fit pb-1">
              hello@madewebs.com
            </a>
          </div>

          {/* Links Grid */}
          <div className="flex gap-16 md:gap-24 font-geist font-light text-[1rem] md:text-[1.2rem]">
            <div className="flex flex-col gap-6">
              <h3 className="font-medium text-gray-500 uppercase tracking-widest text-sm">Socials</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Twitter</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-medium text-gray-500 uppercase tracking-widest text-sm">Sitemap</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Works</Link></li>
                <li><Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Bottom Text & Copyright */}
        <div className="flex flex-col items-center mt-20 w-full overflow-hidden">
          <h1 className="text-[8vw] tracking-tighter leading-none text-white text-center w-full select-none opacity-90">
            MadeWebs
          </h1>
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 mt-8 border-t border-white/20 pt-6 text-sm text-gray-400 font-geist font-light md:max-w-[90%] lg:max-w-[80%] mx-auto">
            <p>© {new Date().getFullYear()} MadeWebs. All rights reserved.</p>
            <p>Designed with passion in India</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
