"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `For Enquiry%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`

    // WhatsApp number (replace with your actual WhatsApp number)
    const whatsappNumber = "917559907591" // Replace with your WhatsApp number

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

    // Reset form
    setFormData({ name: "", email: "", message: "" })

    // Show success message
    alert("Redirecting to WhatsApp to send your message!")
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">madewebs20@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">calicut university, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <p className="text-gray-400">+91 75599 07591</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
              onClick={() => window.open("https://wa.me/917559907591", "_blank")}
            >
              <MessageSquare className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
