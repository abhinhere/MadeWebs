"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Github } from "lucide-react"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    id: 1,
    name: " Abhin C",
    role: "Founder & Lead Developer",
    image: "/image/abhin.png?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/abhinc",
      github: "https://github.com/abhinc",
      instagram: "https://instagram.com/abhinc",
    },
  },
  {
    id: 2,
    name: "Amarnath",
    role: "Lead Developer",
    image: "/image/amarnath.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/amarnathps",
      instagram: "https://www.instagram.com/amarnathsooraj",
      github: "https://github.com/AmarnathSooraj",
    },
  },
  {
    id: 3,
    name: "Rashdhan",
    role: "Marketing Strategist",
    image: "/image/rashdhan.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/ahamed-rashdhan-au-8110b8275",
      instagram: "https://www.instagram.com/ahamed_rashdhan_au",
    },
  },
  {
    id: 4,
    name: "Anaswara",
    role: "Creative Head",
    image: "/image/anaswara.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/anaswara-a",
      instagram: "https://www.instagram.com/_anaswara__anil",
    },
  },
  {
    id: 5,
    name: "Jomin",
    role: "Full Stack Developer",
    image: "/image/jomin.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/jominbinny",
      github: "https://github.com/jominbinny",
      instagram: "https://www.instagram.com/jomi_.xn",
    },
  },
  {
    id: 6,
    name: "Nandhana",
    role: "Social Media Manager",
    image: "/image/nandhana.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/nandhana-ts",
      instagram: "https://www.instagram.com/nandana.aaa",
    },
  },
  {
    id: 6,
    name: "Devapriya",
    role: "Branding Specialist",
    image: "/image/devapriya.png?height=400&width=400",
    social: {
      instagram: "https://www.instagram.com/deva.priya.k",
    },
  },
  {
    id: 7,
    name: "Adhan",
    role: "Media Lead",
    image: "/image/adhan.png?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/adhan-hashim",
      instagram: "https://www.instagram.com/adhan_hashim",
    },
  },
]

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const itemsPerView = isMobile ? 2 : 4
  const maxIndex = Math.ceil(teamMembers.length / itemsPerView) - 1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  const getVisibleMembers = () => {
    const startIndex = currentIndex * itemsPerView
    return teamMembers.slice(startIndex, startIndex + itemsPerView)
  }

  return (
    <section id="team" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our talented team of creators, developers, and strategists work together to bring your vision to life.
          </p>
        </div>

        {/* Sliding carousel container */}
        <div className="relative overflow-hidden">
          <motion.div
            className={`grid gap-4 md:gap-8 ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {getVisibleMembers().map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="aspect-square relative overflow-hidden rounded-xl">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-3 text-sm lg:text-base">{member.role}</p>
                    <p className="text-gray-400 text-xs lg:text-sm">{member.bio}</p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                      >
                        <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                      >
                        <Twitter className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    )}
                    {member.social.instagram && (
                      <Link
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                      >
                        <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                      >
                        <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-4">
          <div className="text-gray-400 text-sm">
            {currentIndex + 1} / {maxIndex + 1}
          </div>
        </div>
      </div>
    </section>
  )
}
