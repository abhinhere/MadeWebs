"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

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
    title: "Shocase website for Snapshot wedding",
    category: "Web Development",
    image: "/image/snapshot.webp?height=600&width=800",
    link: "https://snapshotweddings.co.in/", // Replace with actual social media URL
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
    title: "Company Website for Amazing Aluminum",
    category: "Web Development",
    image: "/image/amazingaluminum.webp?height=600&width=800",
    link: "https://amazingaluminum.com/", // Replace with actual project URL
  },
  {
    id: 5,
    title: "Ecommerce Website for Fitwell",
    category: "Web Development",
    image: "/image/fitwell.webp?height=600&width=800",
    link: "https://madewebs.github.io/Fitwell/", // Replace with actual social media URL
  },
  {
    id: 6,
    title: "Personal Site for Jevmax",
    category: "Web Development",
    image: "/image/jevmax.webp?height=600&width=800",
    link: "https://jevmax.in/", // Replace with actual project URL
  },
  {
    id: 7,
    title: "Agency website for Global Life Care",
    category: "Web Development",
    image: "/image/globallifecare.webp?height=600&width=800",
    link: "https://globallifecare.uk/", // Replace with actual project URL
  },
  {
    id: 8,
    title: "Personal Site for Wellbaycommunitycenter",
    category: "Web Development",
    image: "/image/Wellbaycommunitycenter.webp?height=600&width=800",
    link: "https://madewebs.github.io/wellbaycommunitycenter/", // Replace with actual project URL
  },
  {
    id: 9,
    title: "Personal Site for Abhin",
    category: "Web Development",
    image: "/image/abhinc.webp?height=600&width=800",
    link: "https://abhinc.vercel.app/", // Replace with actual project URL
  },
  {
    id: 10,
    title: "Digital Magazine for CEV Students union",
    category: "Web Development",
    image: "/image/echo.webp?height=600&width=800",
    link: "https://echocev.vercel.app/", // Replace with actual project URL
  },
  {
    id: 11,
    title: "Product website for Made Products",
    category: "Web Development",
    image: "/image/madeproducts.webp?height=600&width=800",
    link: "https://www.madeproducts.in/", // Replace with actual project URL
  },
  {
    id: 12,
    title: "Organization website for NSS Gmhss cu campus",
    category: "Web Development",
    image: "/image/nssgmhss.webp?height=600&width=800",
    link: "https://nsscucampus.github.io/2022/", // Replace with actual project URL
  },
]

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  // Create exactly 3 rows by distributing projects evenly
  const getProjectRows = () => {
    const totalRows = 3
    const projectsPerRow = Math.ceil(projects.length / totalRows)
    const rows = []

    for (let i = 0; i < totalRows; i++) {
      const startIndex = i * projectsPerRow
      const endIndex = Math.min(startIndex + projectsPerRow, projects.length)
      rows.push(projects.slice(startIndex, endIndex))
    }

    return rows
  }

  const projectRows = getProjectRows()

  return (
    <section
      id="works"
      className="py-20 bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Sliding rows container - Fixed to 3 rows */}
        <div className="space-y-4 md:space-y-6">
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <motion.div
                className={`flex gap-1 md:gap-2 ${isMobile ? "w-[400%]" : "w-[350%]"}`}
                animate={{
                  x: rowIndex % 2 === 0 ? [0, "-50%"] : ["-50%", 0],
                }}
                transition={{
                  duration: 20 + rowIndex * 2, // Different speeds for each row
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  ...(isPaused && { duration: 0 }),
                }}
              >
                {/* Duplicate the row for seamless loop */}
                {[...row, ...row].map((project, index) => (
                  <motion.div
                    key={`${project.id}-${index}`}
                    className={`group relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 ${
                      isMobile ? "w-[calc(20%-4px)]" : "w-[calc(12%-8px)]"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleProjectClick(project.link)}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <div className="aspect-[3/2] relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xs md:text-sm font-bold text-white">{project.title}</h3>
                          <p className="text-cyan-400 text-xs">{project.category}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-white opacity-80" />
                      </div>
                    </div>

                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-2 w-2 text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
