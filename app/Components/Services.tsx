"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    num: "01",
    title: "Web Development",
    desc: "We build fast, scalable, and secure websites tailored to your unique business needs. From landing pages to complex web applications, we use the latest technologies to bring your vision to life.",
    image: "/services/services1.jpeg"
  },
  {
    num: "02",
    title: "eCommerce Solutions",
    desc: "Robust online stores designed to maximize conversions. We handle everything from seamless checkout experiences to inventory management integrations, ensuring your customers love shopping with you.",
    image: "/services/ecommerce.jpeg"
  },
  {
    num: "03",
    title: "Brand Identity",
    desc: "Comprehensive branding services including logo design, typography, color palettes, and visual guidelines to ensure you stand out in a crowded market.",
    image: "/services/services2.webp"
  },
  {
    num: "04",
    title: "Graphical Design",
    desc: "Eye-catching posters, social media creatives, banners, and marketing materials designed to communicate your message with clarity and visual impact across every platform.",
    image: "/services/services3.jpeg"
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rightContent = rightRef.current;
    const container = containerRef.current;
    if (!rightContent || !container) return;

    const getScrollAmount = () => {
      const lastCard = rightContent.lastElementChild as HTMLElement;
      const lastCardWidth = lastCard ? lastCard.offsetWidth : (window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.3);
      let amount = rightContent.scrollWidth - window.innerWidth / 2 - lastCardWidth / 2;

      // On mobile, reduce the vertical scroll distance required so it doesn't take forever to scroll through
      if (window.innerWidth < 768) {
        return amount * 0.75;
      }
      return amount;
    };

    // Card initial upward reveal animation runs on ALL screen sizes
    const cards = gsap.utils.toArray('.service-card');
    gsap.fromTo(cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Horizontal scroll driven by vertical scroll progress
    // This stops vertical scroll, does the horizontal scroll, then resumes vertical.
    gsap.to(rightContent, {
      x: () => {
        const lastCard = rightContent.lastElementChild as HTMLElement;
        const lastCardWidth = lastCard ? lastCard.offsetWidth : (window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.3);
        // Translate rightContent to center the last card in the viewport
        return - (rightContent.scrollWidth - window.innerWidth / 2 - lastCardWidth / 2);
      },
      ease: "none",
      force3D: true, // Force GPU hardware acceleration
      scrollTrigger: {
        trigger: container,
        start: "top top", // Pin perfectly at the top of the screen (since it's 100vh tall)
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1.5, // Smooth lag catch-up (changed from 1 to 1.5)
        anticipatePin: 1, // Smooth out the pinning transition to prevent jitters
        invalidateOnRefresh: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div id="services" className="relative">
      {/* h-[100vh] ensures the section perfectly fills the screen with no blank space above or below, and justify-center keeps the content perfectly centered! */}
      <section ref={containerRef} className="w-full px-4 md:px-14 h-[100dvh] flex flex-col justify-center items-start gap-4 md:gap-8 overflow-hidden">

        {/* Top Side - Title Section */}
        <div className="w-full shrink-0">
          <div ref={leftRef} className="flex flex-col w-full">
            <p className="text-[clamp(3rem,5vw,5rem)] font-melody tracking-tighter text-white leading-none">
              Our Services
            </p>
            <p className="font-geist font-light text-[1.1rem] md:text-[1.3rem] text-white/80 max-w-xl mt-2 md:mt-3 leading-[1.2rem] md:leading-[1.6rem]">
              We combine strategy, design, and technology to deliver solutions that drive real results.
            </p>
          </div>
        </div>

        {/* Bottom Side - GSAP Horizontal Scroll */}
        <div className="w-full mt-2 md:mt-4 overflow-hidden">
          <div ref={rightRef} className="inline-flex gap-4 md:gap-10 pr-8 md:pr-14 items-start pb-4 md:pb-0 will-change-transform">
            {servicesData.map((service, idx) => (
              <div key={idx} className="service-card flex flex-col gap-2 md:gap-4 border-t border-white/20 pt-3 md:pt-6 w-[85vw] md:w-[30vw] whitespace-normal shrink-0">
                <div className="flex justify-between items-end">
                  <h3 className="text-[2rem] md:text-[3rem] font-melody tracking-tighter text-white leading-none max-w-[40%] md:max-w-none">
                    {service.title}
                  </h3>
                  <span className="text-[1.2rem] md:text-[1.5rem] font-geist font-light text-white/40 leading-none">
                    {service.num}
                  </span>
                </div>

                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden mt-1 md:mt-2 group shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 30vw"
                    className="service-image-parallax object-cover scale-[1.3] group-hover:scale-[1.35] transition-transform duration-700 ease-out"
                  />
                </div>

                <p className="font-geist font-light text-[1rem] md:text-[1.1rem] text-white/80 leading-snug md:leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
