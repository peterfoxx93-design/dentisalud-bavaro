"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Clock, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "18295202975";
const PHONE_DISPLAY = "(829) 520-2975";
const PHONE_ALT = "(809) 552-0165";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola!+Quisiera+agendar+una+cita+en+DentiSalud+Bávaro.`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Odontología Integral en Bávaro, Punta Cana
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-4">
              <span className="text-brand-600">DentiSalud</span>{" "}
              <span className="text-accent-500">Bávaro</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 mb-8 max-w-lg mx-auto md:mx-0">
              Tu sonrisa es nuestra prioridad. Atención dental de calidad con
              tecnología moderna y un trato cercano.
            </p>

            {/* Big Phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-white/80 uppercase tracking-wider">
                    Escríbenos ahora
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`tel:+1${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-brand-200 text-brand-600 rounded-2xl hover:bg-brand-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-semibold">Llamar</span>
              </a>
            </motion.div>

            {/* Info Chips */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-dark-500">
                <Clock className="w-4 h-4 text-brand-400" />
                Lun-Vie 9am-5pm | Sáb 9am-1pm
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-500">
                <MapPin className="w-4 h-4 text-brand-400" />
                Plaza Caribe, El Cortecito, Bávaro
              </div>
            </div>
          </motion.div>

          {/* Right — Brand Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-96 sm:h-96">
              <img
                src="/images/logo-icon.png"
                alt="DentiSalud Bávaro"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#servicios"
            className="text-dark-400 hover:text-brand-600 transition-colors"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
