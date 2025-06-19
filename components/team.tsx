"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Full-stack developer with 8+ years of experience in creating digital solutions.",
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      github: "https://github.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Brand strategist and designer passionate about creating memorable visual experiences.",
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      instagram: "https://instagram.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Social Media Strategist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Digital marketing expert specializing in social media growth and engagement.",
    social: {
      linkedin: "https://linkedin.com/in/mikerodriguez",
      instagram: "https://instagram.com/mikerodriguez",
      twitter: "https://twitter.com/mikerodriguez",
    },
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "User experience designer focused on creating intuitive and beautiful interfaces.",
    social: {
      linkedin: "https://linkedin.com/in/emmawilson",
      instagram: "https://instagram.com/emmawilson",
      github: "https://github.com/emmawilson",
    },
  },
]

export default function Team() {
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                    >
                      <Linkedin className="h-5 w-5" />
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
                      <Twitter className="h-5 w-5" />
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
                      <Instagram className="h-5 w-5" />
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
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
