"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { contactInfo } from "@/data/content"

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20minha%20obra!`,
      "_blank"
    )
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          whileHover={{ opacity: 1, width: "auto", marginLeft: 8 }}
          className="overflow-hidden whitespace-nowrap font-semibold"
        >
          WhatsApp
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default WhatsAppButton
