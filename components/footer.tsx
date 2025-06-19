import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 relative overflow-hidden">
      {/* Background Falcon */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <Image src="/falcon.png" alt="Falcon" width={300} height={300} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 inline-block group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/falcon.png"
                    alt="MADEWEBS Falcon Logo"
                    width={50}
                    height={50}
                    className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative">
                  <Image
                    src="/madefont.png"
                    alt="MADEWEBS"
                    width={160}
                    height={35}
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
                      width={160}
                      height={35}
                      className="blur-sm"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(84%) sepia(29%) saturate(1686%) hue-rotate(162deg) brightness(101%) contrast(101%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting websites and marketing strategies to grow your brand. We build digital experiences that people
              love.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/made_webs" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/madewebs/" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://wa.me/917559907591" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#works"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-2 inline-block"
                >
                  Branding & Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 MADEWEBS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
