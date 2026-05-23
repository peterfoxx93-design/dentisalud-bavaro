"use client";

import { motion } from "motion/react";

const galleryItems = [
  {
    src: "/images/clinic-interior.jpg",
    alt: "Consultorio moderno DentiSalud Bávaro",
    label: "Instalaciones Modernas",
  },
  {
    src: "/images/smile-beautiful.jpg",
    alt: "Sonrisa saludable",
    label: "Diseño de Sonrisa",
  },
  {
    src: "/images/doctor-patient.jpg",
    alt: "Atención personalizada",
    label: "Atención Personalizada",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
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
            Tu Sonrisa en <span className="text-brand-600">Buenas Manos</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Contamos con instalaciones modernas y un equipo comprometido con tu
            salud dental.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-brand-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white font-medium text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
