"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { contactInfo } from "@/data/content"
import { useState } from "react"
import { Toast } from "@/components/ui/toast"

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Telefone inválido"),
  workType: z.string().min(1, "Selecione o tipo de obra"),
  location: z.string().min(2, "Informe o bairro/cidade"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data)
    
    const whatsappMessage = `Olá, gostaria de um orçamento para minha obra!

Nome: ${data.name}
Telefone: ${data.phone}
Tipo de Obra: ${data.workType}
Localização: ${data.location}
Mensagem: ${data.message}`

    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )

    setToast({ message: "Formulário enviado! Redirecionando para WhatsApp...", type: "success" })
    reset()
  }

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20minha%20obra!`,
      "_blank"
    )
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-noise opacity-[0.16] mix-blend-soft-light" />
        <div className="absolute -top-56 left-[-20%] h-[720px] w-[720px] rounded-full glow-red blur-[140px]" />
        <div className="absolute -bottom-72 right-[-30%] h-[860px] w-[860px] rounded-full glow-amber blur-[160px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold text-red-500 bg-red-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              CONTATO
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight px-2">
            Solicite um Orçamento Gratuito
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Preencha o formulário abaixo e receba um orçamento personalizado em até 15 minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 xl:p-8 shadow-premium-xl"
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 uppercase">
                Deixe sua Solicitação
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Preencha o formulário e receba um orçamento personalizado.
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Seu Nome *
                </label>
                <Input
                  {...register("name")}
                  placeholder="Ex: Seu Nome"
                  className={`h-11 sm:h-12 rounded-xl border-2 ${errors.name ? "border-red-500" : "border-gray-200"} focus:border-red-500 text-sm sm:text-base`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Seu Telefone/WhatsApp *
                </label>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="Ex: (17) 99125-7686"
                  className={`h-12 rounded-xl border-2 ${errors.phone ? "border-red-500" : "border-gray-200"} focus:border-red-500 text-sm sm:text-base`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Tipo de Obra *
                </label>
                <select
                  {...register("workType")}
                  className={`w-full h-11 sm:h-12 rounded-xl border-2 ${errors.workType ? "border-red-500" : "border-gray-200"} focus:border-red-500 px-4 text-sm sm:text-base bg-white text-slate-900`}
                >
                  <option value="">Selecione o tipo de obra</option>
                  <option value="reforma-completa">Reforma Completa</option>
                  <option value="construcao-zero">Construção do Zero</option>
                  <option value="acabamento">Acabamento</option>
                  <option value="piso-revestimento">Piso/Revestimento</option>
                  <option value="telhado">Telhado</option>
                  <option value="muro-calçada">Muro/Calçada</option>
                  <option value="hidraulica">Hidráulica</option>
                  <option value="eletrica">Elétrica</option>
                  <option value="pintura">Pintura</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.workType && (
                  <p className="text-red-500 text-sm mt-1">{errors.workType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Bairro/Cidade *
                </label>
                <Input
                  {...register("location")}
                  placeholder="Ex: Centro, Colina"
                  className={`h-12 rounded-xl border-2 ${errors.location ? "border-red-500" : "border-gray-200"} focus:border-red-500 text-sm sm:text-base`}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Descreva sua Obra *
                </label>
                <Textarea
                  {...register("message")}
                  placeholder="Descreva sua obra ou dúvidas..."
                  rows={5}
                  className={`rounded-xl border-2 ${errors.message ? "border-red-500" : "border-gray-200"} focus:border-red-500 text-sm sm:text-base resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-sm hover:shadow-md group transition-all"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Card */}
              <div className="bg-white/8 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Telefone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white/90 hover:text-white transition-colors text-sm sm:text-base font-semibold block break-all"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white/8 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">WhatsApp</h3>
                    <button
                      onClick={handleWhatsApp}
                      className="text-white/90 hover:text-white transition-colors text-sm sm:text-base font-semibold text-left"
                    >
                      Falar no WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white/8 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Localização</h3>
                    <p className="text-white/90 text-sm sm:text-base font-semibold">{contactInfo.location}</p>
                    <p className="text-white/70 text-xs sm:text-sm">{contactInfo.region}</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white/8 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Horário de Atendimento</h3>
                    <p className="text-white/90 text-sm sm:text-base font-semibold">{contactInfo.hours}</p>
                    {contactInfo.specialHours && (
                      <p className="text-white/70 text-xs sm:text-sm mt-1">{contactInfo.specialHours}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/8 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/15 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">E-mail</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white/90 hover:text-white transition-colors text-sm sm:text-base font-semibold break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-sm hover:shadow-md group transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp Agora
            </Button>
          </motion.div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  )
}

export default Contact
