"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Phone, BadgeCheck, Clock, MapPin } from "lucide-react"
import { contactInfo, professionalInfo } from "@/data/content"
import Particles from "@/components/ui/Particles"

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20minha%20obra!`,
      "_blank"
    )
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
          style={{
            backgroundImage: "url('/img/prancheta na obra.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <Particles
          className="absolute inset-0"
          density={36}
          speed={0.22}
          color="255,255,255"
          opacity={0.12}
          linkDistance={180}
          linkOpacity={0.06}
        />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500 z-30"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-20 pt-24 sm:pt-28 pb-16 sm:pb-18 lg:pt-32 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block text-red-500 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              Construção Premium
            </span>
          </motion.div>

          {/* Main Headline - Clean and Impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-5 lg:mb-6 text-white leading-[1.08] tracking-tight px-2"
          >
            Construção e Reforma com{" "}
            <span className="text-red-500">Qualidade</span> e Prazo
          </motion.h1>

          {/* Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 font-light leading-relaxed max-w-3xl mx-auto px-4"
          >
            Transformamos seu projeto em realidade com profissionalismo, 
            organização e acabamento de primeira linha.
          </motion.p>

          {/* Professional Legend About the Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 sm:mb-8 lg:mb-10 px-4"
          >
            <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 lg:p-6 max-w-2xl mx-auto">
              <p className="text-white/95 text-sm sm:text-base lg:text-base leading-relaxed font-medium">
                <span className="text-red-500 font-bold">{professionalInfo.name}</span>{" "}
                é um mestre de obras com mais de 30 anos de experiência 
                em construção e reforma. Especializado em obras residenciais e comerciais, 
                trabalha com transparência total, cumprimento rigoroso de prazos e 
                garantia completa em todos os serviços prestados.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-5 px-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 shadow-sm hover:shadow-md group w-full sm:w-auto"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border border-white/50 text-white hover:bg-white hover:text-black font-semibold text-sm sm:text-base px-6 sm:px-9 py-4 sm:py-5 transition-all group w-full sm:w-auto bg-transparent"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-x-4 sm:gap-y-2 text-white/80 text-xs sm:text-sm px-4 mb-5 max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <BadgeCheck className="h-4 w-4 text-red-400" />
              <span>30+ anos de experiência</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <Clock className="h-4 w-4 text-red-400" />
              <span>Orçamento rápido via WhatsApp</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <MapPin className="h-4 w-4 text-red-400" />
              <span>Atendimento em Colina e região</span>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 mt-2"
          >
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-sm sm:text-base font-semibold">{contactInfo.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Red Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 z-30"></div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden xl:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/50 text-xs font-medium uppercase tracking-wider">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
