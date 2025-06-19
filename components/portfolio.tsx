"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Personal Site for Afiii",
    category: "Web Development",
    image: "/image/afii.webp?height=600&width=800",
    link: "https://madewebs.github.io/Afiii/", // Replace with actual project URL
  },
  {
    id: 2,
    title: "Web Development",
    category: "Social Media Marketing",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://instagram.com/abccompany", // Replace with actual social media URL
  },
  {
    id: 3,
    title: "Personal Site for Carbon Viper",
    category: "Web Development",
    image: "/image/carbon.webp?height=600&width=800",
    link: "https://madewebs.github.io/carbonviper/", // Replace with actual project URL
  },
  {
    id: 4,
    title: "Portfolio Website for GHI",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://ghiportfolio.com", // Replace with actual project URL
  },
  {
    id: 5,
    title: "Instagram Strategy for JKL",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://instagram.com/jklbrand", // Replace with actual social media URL
  },
  {
    id: 6,
    title: "Logo Design for MNO",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://mnocompany.com", // Replace with actual project URL
  },
]

export default function Portfolio() {
  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-cyan-400">{project.category}</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-white opacity-80" />
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://www.instagram.com/made_webs">
          <p className="text-gray-400 text-sm">More</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
