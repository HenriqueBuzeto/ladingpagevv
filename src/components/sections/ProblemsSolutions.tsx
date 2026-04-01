"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Users, Award, FileCheck, Shield } from "lucide-react"
import { WaveShape } from "@/components/ui/CurvedShape"
import Image from "next/image"

const ProblemsSolutions = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Qualidade Duvidosa",
      description: "Muitas vezes o resultado final não atende às expectativas, com acabamento ruim e materiais de baixa qualidade.",
      result: "Obra com retrabalho e custos extras",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Atrasos Constantes",
      description: "Prazos não cumpridos, obras que se estendem por meses além do combinado, causando transtornos.",
      result: "Projeto atrasado e frustração",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: DollarSign,
      title: "Orçamentos Ocultos",
      description: "Custos escondidos, orçamentos que aumentam durante a obra sem transparência ou justificativa.",
      result: "Gastos imprevistos e orçamento estourado",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  const solutions = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com materiais de primeira linha e equipe altamente qualificada, garantindo acabamento impecável.",
      highlight: "Economizamos até 30% do tempo com organização e competência",
    },
    {
      icon: Users,
      title: "Equipe Profissional",
      description: "Nossa equipe é treinada, experiente e comprometida com a excelência em cada etapa do projeto.",
      highlight: "Trabalho organizado e transparente do início ao fim",
    },
  ]

  return (
    <>
      {/* Problems Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tight px-2">
              Por Que Reformas Frequentemente Viram Dor de Cabeça?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Identificamos os principais problemas que nossos clientes enfrentaram antes de nos conhecer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <Card className="h-full card-elevated border-2 border-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${problem.bgColor} flex items-center justify-center mb-4 sm:mb-6`}>
                        <Icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${problem.color}`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                        {problem.title}
                      </h3>
                      <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {problem.description}
                      </p>
                      <div className="pt-4 sm:pt-6 border-t border-slate-200">
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-2">
                          O que acontece?
                        </p>
                        <p className={`font-bold ${problem.color} text-sm sm:text-base lg:text-lg`}>
                          {problem.result}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight px-2">
              Como Resolvemos Esses Problemas Definitivamente
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 aspect-[3/4] max-h-[720px] lg:aspect-auto lg:h-[860px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=900&fit=crop"
                alt="Equipe profissional"
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 560px, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-3xl p-3 sm:p-6 shadow-premium-lg border-2 border-gray-100">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-500 mb-1 sm:mb-2">30%</div>
              <div className="text-black font-bold text-xs sm:text-sm lg:text-base">Economia de Tempo</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-premium-lg border-2 border-white/20">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
                Economizamos até <span className="text-red-500 font-black">30% do tempo</span> através de 
                trabalhadores competentes e organização adequada.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                Nossa equipe é altamente qualificada e trabalha com processos 
                organizados que garantem eficiência sem comprometer a qualidade.
              </p>
            </div>

              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-premium-lg border-2 border-white/20"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-red-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-white/80 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                          {solution.description}
                        </p>
                        <div className="inline-block bg-red-500/20 text-white font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm border border-red-500/30">
                          {solution.highlight}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f056029?w=1920&h=1080&fit=crop')",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tight px-2">
              Além Disso
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center border-2 border-red-500/20"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-red-500 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <FileCheck className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-slate-900" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                Trabalhamos Apenas de Forma Oficial
              </h3>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Todos os pagamentos são documentados, garantindo transparência 
                total e segurança para você.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center border-2 border-red-500/20"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-red-500 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-slate-900" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                Trabalhamos com Supervisão
              </h3>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Cada etapa é acompanhada de perto, garantindo qualidade e 
                cumprimento de todos os padrões.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProblemsSolutions
