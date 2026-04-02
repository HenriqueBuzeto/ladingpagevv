"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/data/content"

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95" />
        <div className="absolute inset-0 bg-grid-faint-dark opacity-25" />
        <div className="absolute inset-0 bg-noise opacity-[0.18] mix-blend-soft-light" />
        <div className="absolute -top-52 right-[-15%] h-[560px] w-[560px] rounded-full glow-red blur-[110px]" />
        <div className="absolute -bottom-64 left-[-15%] h-[680px] w-[680px] rounded-full glow-amber blur-[130px]" />
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
              DEPOIMENTOS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight px-2">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_60px_-30px_rgba(0,0,0,0.7)]">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-red-400 mb-3 sm:mb-4 opacity-60" />
                  <p className="text-white/90 mb-4 leading-relaxed text-sm sm:text-[15px] font-medium">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-red-500 text-red-500"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover object-center border border-white/20 flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-white text-sm sm:text-base truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-white/70 font-medium truncate">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
