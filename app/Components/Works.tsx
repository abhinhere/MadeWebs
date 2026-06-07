"use client";

import Image from "next/image";
import { worksData } from "../data/works";

export default function Works() {
  return (
    <section id="works" className="relative z-10 w-full px-4 md:px-8 lg:px-14 py-10 md:py-12 flex flex-col justify-center items-start gap-4 lg:gap-8 overflow-hidden">

      <div className="w-full flex flex-col items-start gap-4">
        <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-melody tracking-tighter text-white leading-none">
          Our Works
        </h2>
        <p className="font-geist font-light text-[1.1rem] md:text-[1.3rem] text-white/80 max-w-xl leading-[1.2rem] md:leading-[1.6rem]">
          A showcase of our recent projects. We take pride in delivering exceptional digital experiences that drive growth.
        </p>
        {/* Mobile slide indicator */}
        <div className="flex items-center gap-2 text-white/50 font-geist text-xs tracking-wider uppercase mt-1 md:hidden">
          <span className="animate-pulse">Slide to see more →</span>
        </div>
      </div>

      <div className="w-full mt-4 md:mt-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-row md:flex-wrap md:justify-center gap-6 md:gap-10 w-[max-content] md:w-full pr-8 md:pr-0">
          {worksData.map((work, idx) => (
            <a key={idx} href={work.link} target="_blank" rel="noopener noreferrer" className="relative w-[75vw] md:w-[28vw] lg:w-[22vw] xl:w-[20vw] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 group cursor-pointer">
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 75vw, (max-width: 1024px) 28vw, 22vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
                <h3 className="text-white font-melody text-[1.4rem] md:text-[2rem] tracking-tighter leading-none">{work.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
