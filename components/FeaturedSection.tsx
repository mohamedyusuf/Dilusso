'use client'

import { motion } from 'framer-motion'
import { Sparkles, Award, Truck, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Handcrafted with attention to detail and premium materials',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over 24,000 EGP, worldwide shipping available',
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: '5-year warranty on all furniture pieces for your peace of mind',
  },
  {
    icon: Award,
    title: 'Designer Collection',
    description: 'Curated by world-renowned interior designers and architects',
  },
]

export default function FeaturedSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2 sm:mb-4">
            Why Choose Dilusso
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Excellence in every aspect of your furniture shopping experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 rounded-full mb-3 sm:mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

