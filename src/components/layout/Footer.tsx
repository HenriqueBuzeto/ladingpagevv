"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { contactInfo, professionalInfo } from "@/data/content"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20minha%20obra!`,
      "_blank"
    )
  }

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/img/logo.png" 
                alt="Logo Mestre Valdir Vieira" 
                className="h-16 w-auto"
              />
              <span className="text-xl font-black text-white">{professionalInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Construção e reforma com qualidade, prazo e transparência. 
              Transformando sonhos em realidade há mais de 30 anos.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-black mb-6 text-white">Empresa</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#hero" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-black mb-6 text-white">Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#portfolio" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-red-500 transition-colors font-semibold text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 transition-all"></span>
                  Depoimentos
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-black mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-red-500 transition-colors font-semibold text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <button onClick={handleWhatsApp} className="hover:text-red-500 transition-colors font-semibold text-left text-sm">
                  WhatsApp
                </button>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-sm">{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-sm block">{contactInfo.hours}</span>
                  {contactInfo.specialHours && (
                    <span className="text-xs text-gray-400 block mt-1">{contactInfo.specialHours}</span>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                  <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-red-500 transition-colors font-semibold text-sm">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 font-semibold text-sm">
            Copyright © {currentYear} - {professionalInfo.name}. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
