"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              MadeWebs was founded in 2020 with a passion for helping brands go digital. After a short break, we're back
              stronger than ever in 2025 to build, brand, and boost your business.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team combines technical expertise with creative vision to deliver solutions that not only look great
              but also drive results. We believe in building long-term relationships with our clients, becoming true
              partners in their digital success.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full">
              {/* 3D floating elements */}
              <div className="absolute top-0 left-0 w-64 h-64 border border-cyan-500/30 rounded-lg transform rotate-12 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 border border-blue-500/30 rounded-lg transform -rotate-12 backdrop-blur-sm"></div>

              {/* Code snippet */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700 p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm">
                  <code className="text-gray-300">
                    <span className="text-cyan-400">const</span> <span className="text-blue-400">madewebs</span> = {"{"}
                    <br />
                    {"  "}
                    <span className="text-green-400">build</span>: <span className="text-yellow-300">(dream)</span>{" "}
                    {"=> {"}
                    <br />
                    {"    "}
                    <span className="text-purple-400">return</span> <span className="text-blue-400">dream</span>.
                    <span className="text-green-400">toReality</span>()<span className="text-gray-500">;</span>
                    <br />
                    {"  }"},
                    <br />
                    {"  "}
                    <span className="text-green-400">design</span>: <span className="text-yellow-300">(brand)</span>{" "}
                    {"=> {"}
                    <br />
                    {"    "}
                    <span className="text-purple-400">return</span> <span className="text-blue-400">brand</span>.
                    <span className="text-green-400">Beautiful</span>()<span className="text-gray-500">;</span>
                    <br />
                    {"  }"},
                    <br />
                    {"  "}
                    <span className="text-green-400">market</span>: <span className="text-yellow-300">(business)</span>{" "}
                    {"=> {"}
                    <br />
                    {"    "}
                    <span className="text-purple-400">return</span> <span className="text-blue-400">business</span>.
                    <span className="text-green-400">grow</span>()<span className="text-gray-500">;</span>
                    <br />
                    {"  }"}
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
