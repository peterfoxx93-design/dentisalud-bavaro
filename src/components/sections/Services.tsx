"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Braces,
  Syringe,
  Smile,
  Stethoscope,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Dental",
    desc: "Profilaxis profesional para eliminar placa y sarro. Mantén tu sonrisa saludable.",
  },
  {
    icon: Syringe,
    title: "Blanqueamiento",
    desc: "Recupera el brillo de tu sonrisa con nuestros tratamientos de blanqueamiento seguro.",
  },
  {
    icon: Braces,
    title: "Ortodoncia",
    desc: "Alineación dental con brackets tradicionales o tratamientos estéticos.",
  },
  {
    icon: Heart,
    title: "Implantes",
    desc: "Reemplaza dientes perdidos con implantes de alta calidad. Resultados naturales.",
  },
  {
    icon: Smile,
    title: "Diseño de Sonrisa",
    desc: "Transforma tu sonrisa con carillas, coronas y rehabilitación estética.",
  },
  {
    icon: Stethoscope,
    title: "Odontología General",
    desc: "Extracciones, endodoncia, resinas y todos tus cuidados dentales.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Nuestros <span className="text-brand-600">Servicios</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Ofrecemos odontología integral para toda la familia. Desde limpieza
            de rutina hasta tratamientos especializados.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-6 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <service.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-dark-500">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
