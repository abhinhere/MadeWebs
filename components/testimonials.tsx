"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "David Thompson",
    role: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "MADEWEBS transformed our online presence completely. Their team delivered a stunning website that perfectly captures our brand identity. The results speak for themselves - 300% increase in leads!",
    rating: 5,
    company: "TechStart Inc.",
  },
  {
    id: 2,
    name: "Lisa Martinez",
    role: "Marketing Director, Fashion Forward",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with MADEWEBS was a game-changer for our social media strategy. They created engaging content that resonated with our audience and helped us grow our Instagram following by 500%.",
    rating: 5,
    company: "Fashion Forward",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Founder, Local Eats",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The e-commerce platform MADEWEBS built for us is incredible. It's user-friendly, fast, and has all the features we needed. Our online sales have tripled since the launch!",
    rating: 5,
    company: "Local Eats",
  },
  {
    id: 4,
    name: "Rachel Green",
    role: "Creative Director, Art Studio",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "MADEWEBS understood our vision perfectly. They created a brand identity that truly represents who we are as artists. The logo and brand materials are absolutely beautiful.",
    rating: 5,
    company: "Art Studio",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Owner, Fitness Plus",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at MADEWEBS is professional, creative, and delivers on time. Our new website has helped us attract more clients and establish credibility in our industry.",
    rating: 5,
    company: "Fitness Plus",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
              >
                <div className="flex items-center justify-center mb-8">
                  <Quote className="h-12 w-12 text-cyan-400 opacity-50" />
                </div>

                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover rounded-full border-2 border-cyan-500/30"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50 hidden md:flex"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50 hidden md:flex"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyan-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50"
              onClick={nextTestimonial}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
