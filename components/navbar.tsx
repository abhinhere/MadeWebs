"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Optional: Also reload the page after a short delay
    // setTimeout(() => {
    //   window.location.reload()
    // }, 500)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/20 py-2"
          : "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <Image
                src="/falcon.png"
                alt="MADEWEBS Falcon Logo"
                width={scrolled ? 35 : 45}
                height={scrolled ? 35 : 45}
                className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <Image
                src="/madefont.png"
                alt="MADEWEBS"
                width={scrolled ? 120 : 140}
                height={scrolled ? 25 : 30}
                className="transition-all duration-300 group-hover:brightness-125 filter"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(84%) sepia(29%) saturate(1686%) hue-rotate(162deg) brightness(101%) contrast(101%)",
                }}
              />
              {/* Subtle glow effect on text hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/madefont.png"
                  alt="MADEWEBS"
                  width={scrolled ? 120 : 140}
                  height={scrolled ? 25 : 30}
                  className="blur-sm"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(84%) sepia(29%) saturate(1686%) hue-rotate(162deg) brightness(101%) contrast(101%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#works" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Link href="https://wa.me/917559907591?text=Website%20Enquiry">
          <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300">
            Get Quote
          </Button>
        </Link>
          {/* Mobile Navigation - Direct Links */}
          <nav className="md:hidden flex items-center space-x-4">
            <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
              About
            </Link>
            <Link href="#works" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
              Works
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
