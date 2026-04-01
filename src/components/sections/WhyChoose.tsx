"use client"

import { motion } from "framer-motion"
import { stats } from "@/data/content"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { WaveShape } from "@/components/ui/CurvedShape"

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://www.krona.com.br/wp-content/uploads/2021/07/obra-01.png.webp')",
          }}
        />
      </div>
      <WaveShape 
        className="top-0 left-0 w-full h-[220px] sm:h-[260px] opacity-[0.035] z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" 
        color="#DC2626"
      />
      
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
              <span className="text-sm font-bold text-red-500 bg-red-500/10 px-4 py-2 rounded-full">
                EXPERTISE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight uppercase tracking-tight">
              Por Que Você Deve Nos Escolher
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed font-medium">
              Com mais de 30 anos de experiência no mercado, oferecemos serviços de
              construção e reforma com qualidade, transparência e comprometimento.
              Nossa equipe trabalha com organização e foco na satisfação do cliente.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6" ref={ref}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                  className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl sm:rounded-3xl border-2 border-red-500/20 shadow-premium hover:shadow-premium-lg transition-all card-elevated"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-500 mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-slate-900 font-bold text-sm sm:text-base lg:text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-xl">
              <img
                src="https://i.pinimg.com/736x/1a/0a/b4/1a0ab4e00a136fbdbf475d4bc3f0b7aa.jpg"
                alt="Equipe trabalhando"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
