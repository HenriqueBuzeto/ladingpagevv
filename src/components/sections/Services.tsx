"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/data/content"
import * as Icons from "lucide-react"
import { ArrowRight } from "lucide-react"

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.HardHat
    return IconComponent
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95" />
        <div className="absolute inset-0 bg-grid-faint-dark opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-[0.18] mix-blend-soft-light" />
        <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full glow-red blur-[90px]" />
        <div className="absolute -bottom-56 right-[-20%] h-[640px] w-[640px] rounded-full glow-amber blur-[110px]" />
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
              NOSSOS SERVIÇOS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight px-2">
            Serviços Especializados
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Oferecemos uma gama completa de serviços de construção e reforma
            para atender todas as suas necessidades com excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon)
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_60px_-30px_rgba(0,0,0,0.7)]">
                  <CardHeader className="p-4 sm:p-5 lg:p-6 pb-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-500/15 flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-red-500/25">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-red-300 transition-colors group-hover:text-red-200" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 lg:p-6 pt-0">
                    <CardDescription className="text-white/70 mb-4 text-sm sm:text-[15px] leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl py-3.5 sm:py-4 group/btn transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Side CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-sm border border-white/15">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Qualidade é Nossa Especialidade
            </h3>
            <Button
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-sm hover:shadow-md group"
            >
              Ver Mais Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
