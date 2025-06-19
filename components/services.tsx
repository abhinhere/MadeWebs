"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, PenTool, TrendingUp } from "lucide-react"

const services = [
  {
    icon: <Code className="h-12 w-12 text-cyan-400" />,
    title: "Web Development",
    description: "Portfolio sites, Business sites, landing pages with clean UI.",
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-cyan-400" />,
    title: "Social Media Marketing",
    description: "Instagram strategy, creatives, reels, and Page management.",
  },
  {
    icon: <PenTool className="h-12 w-12 text-cyan-400" />,
    title: "Branding & Design",
    description: "Logo, identity packs, post templates, and Special Day templates.",
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="services" className="py-20 bg-gray-950 relative overflow-hidden" ref={ref}>
      {/* Floating Falcon Logo */}
      <motion.div className="absolute top-10 left-10 opacity-5 pointer-events-none" style={{ y }}>
        <Image src="/falcon.png" alt="Falcon" width={150} height={150} />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ opacity }}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -20,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(6,182,212,0.2)",
              }}
            >
              <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
