"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { contactInfo } from "@/data/content"
import Image from "next/image"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20minha%20obra!`,
      "_blank"
    )
  }

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Serviços", id: "services" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Sobre", id: "about" },
    { label: "Contato", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/img/logo.png"
              alt="Logo Valdir Vieira"
              width={240}
              height={240}
              priority
              className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <span className={`text-lg sm:text-xl font-black block leading-tight transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}>
                Valdir Vieira
              </span>
              <span className={`text-xs font-semibold transition-colors ${
                isScrolled ? "text-gray-500" : "text-white/80"
              }`}>
                Construção & Reforma
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[13px] font-semibold tracking-wide transition-colors relative group ${
                  isScrolled 
                    ? "text-black hover:text-red-500" 
                    : "text-white hover:text-red-500"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className={`font-semibold px-5 py-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-black text-white shadow-sm hover:shadow-md hover:bg-black/90"
                  : "bg-white text-black shadow-sm hover:shadow-md hover:bg-white/90"
              }`}
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-premium-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-base font-bold text-black hover:text-red-500 transition-colors py-3 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("contact")
                  handleWhatsApp()
                }}
                className="w-full bg-black hover:bg-black/90 text-white font-semibold py-4 rounded-xl shadow-sm hover:shadow-md mt-2"
              >
                Orçamento
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
