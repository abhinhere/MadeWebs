"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const falconRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return

      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20

      scrollRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const handleScroll = () => {
      if (!falconRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      falconRef.current.style.transform = `translate3d(0, ${rate}px, 0) rotate(${scrolled * 0.1}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Falcon Logo */}
      <div ref={falconRef} className="absolute top-20 right-20 opacity-10 pointer-events-none hidden lg:block">
        <Image src="/falcon.png" alt="Falcon" width={200} height={200} className="animate-pulse" />
      </div>

      {/* 3D floating elements */}
      <div ref={scrollRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[15%] w-64 h-64 border border-cyan-500/30 rounded-lg transform rotate-12 backdrop-blur-sm animate-float"></div>
        <div className="absolute bottom-1/4 left-[15%] w-48 h-48 border border-blue-500/30 rounded-lg transform -rotate-12 backdrop-blur-sm animate-float-delayed"></div>
        <div className="absolute top-1/3 left-[20%] w-32 h-32 border border-cyan-400/20 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We can build your dreams.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Crafting websites and marketing strategies to grow your brand.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              View Our Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScroll}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-10 w-10 text-cyan-400" />
      </motion.div>
    </section>
  )
}
