"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

const About = () => {
  const features = [
    "Cumprimento de prazo garantido",
    "Orçamento transparente e detalhado",
    "Equipe qualificada e experiente",
    "Materiais de primeira qualidade",
    "Acompanhamento constante do cliente",
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
          }}
        />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-red-600 bg-red-500/10 px-3 py-1.5 rounded-full">
                SOBRE NÓS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight uppercase tracking-tight">
              Trabalhando com Precisão, Segurança e Capricho
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">
              Com mais de 30 anos de experiência no mercado, 
              oferecemos serviços de construção e reforma com excelência, 
              comprometimento e atenção aos detalhes. Nossa equipe trabalha 
              com organização, transparência e foco na satisfação do cliente.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 group-hover:bg-red-500/15 transition-colors flex items-center justify-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 transition-colors" />
                  </div>
                  <span className="text-slate-900 text-sm sm:text-base lg:text-lg font-semibold leading-snug">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full max-w-[520px] lg:max-w-[560px] aspect-[4/5] max-h-[520px] lg:max-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-lg"
            >
              <Image
                src="/img/Prancheta%201080x1920.png"
                alt="Mestre de Obras - Trabalhando"
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
                className="object-cover object-center"
              />
              {/* Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-2xl bg-white/85 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 shadow-sm ring-1 ring-black/10">
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-none">Experiência</div>
                <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">30+ anos</div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 sm:w-48 sm:h-48 bg-red-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
