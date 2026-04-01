"use client"

import { motion } from "framer-motion"
import { portfolio } from "@/data/content"
import { ArrowRight } from "lucide-react"

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-red-500 bg-red-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              PORTFÓLIO
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight px-2">
            Especialidade em Obras Residenciais e Comerciais
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Confira alguns dos nossos projetos realizados com excelência e
            dedicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 card-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-red-500 text-xs sm:text-sm font-bold mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4">{item.title}</h3>
                <button className="flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors group/btn text-sm sm:text-base">
                  Ver Detalhes
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Overlay badge */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 py-1 sm:px-4 sm:py-2 shadow-premium">
                <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
