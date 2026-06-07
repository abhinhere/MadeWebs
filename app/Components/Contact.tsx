"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "917559907591";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");

    const text = `Hi, I'm interested in your services!

*Name:* ${name}
*Email:* ${email}
*Company:* ${company || "N/A"}
*Message:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%", // Start animating when the section enters the bottom of the viewport
        end: "top 40%",   // Finish animation when it is nearly halfway up the screen
        scrub: 1,        // Link animation to scroll position with 1 second smoothing lag
      }
    });

    tl.fromTo('.contact-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" }
    )
      .fromTo('.contact-sub',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo('.contact-field',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power2.out" },
        "-=0.3"
      );

  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="relative z-10 w-full px-4 md:px-14 py-20 md:py-32 flex flex-col justify-center items-start md:items-center">
      <div className="w-full md:max-w-[60%] flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-4 text-start md:text-center w-full items-start md:items-center">
          <h2 className="contact-title text-[clamp(3rem,5vw,5rem)] font-melody tracking-tighter text-white leading-[3rem] md:leading-[4.5rem]">
            Let's talk about your project
          </h2>
          <p className="contact-sub font-geist font-light text-[1.1rem] md:text-[1.3rem] text-white/80 leading-[1.2rem] md:leading-[1.6rem]">
            Fill out the form below and we'll get back to you within 24 hours. Let's create something amazing together.
          </p>
        </div>

        <form ref={formRef} className="flex flex-col gap-4 md:gap-6 w-full mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="contact-field flex flex-col gap-3 w-full group">
              <label className="font-geist text-xs md:text-sm text-white/90 tracking-[0.2em] uppercase group-focus-within:text-white transition-colors">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(""); }}
                className="bg-transparent border-b border-white/60 pb-3 text-white font-geist text-lg md:text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/60"
              />
            </div>
            <div className="contact-field flex flex-col gap-3 w-full group">
              <label className="font-geist text-xs md:text-sm text-white/90 tracking-[0.2em] uppercase group-focus-within:text-white transition-colors">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="bg-transparent border-b border-white/60 pb-3 text-white font-geist text-lg md:text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/60"
              />
            </div>
          </div>

          <div className="contact-field flex flex-col gap-3 w-full group">
            <label className="font-geist text-xs md:text-sm text-white/90 tracking-[0.2em] uppercase group-focus-within:text-white transition-colors">Company / Organization</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-transparent border-b border-white/60 pb-3 text-white font-geist text-lg md:text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/60"
            />
          </div>

          <div className="contact-field flex flex-col gap-3 w-full group">
            <label className="font-geist text-xs md:text-sm text-white/90 tracking-[0.2em] uppercase group-focus-within:text-white transition-colors">Message</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => { setMessage(e.target.value); setError(""); }}
              className="bg-transparent border-b border-white/60 pb-3 text-white font-geist text-lg md:text-xl focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/60"
            ></textarea>
          </div>

          <div className="contact-field flex flex-col items-start md:items-center mt-4 gap-3">
            {error && (
              <p className="text-red-300 font-geist text-sm md:text-base animate-pulse">{error}</p>
            )}
            <button type="submit" className="bg-white text-black font-light font-geist px-6 py-3 w-fit rounded-xs hover:scale-105 transition-transform duration-300 text-sm md:text-base">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
