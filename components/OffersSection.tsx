'use client'

import { motion } from 'framer-motion'
import { Percent, Gift, Truck, Clock } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: 'Summer Sale',
    discount: '30% OFF',
    description: 'On all living room furniture',
    icon: Percent,
    color: 'bg-red-500',
    expires: 'Ends in 5 days',
  },
  {
    id: 2,
    title: 'New Arrivals',
    discount: 'Free Shipping',
    description: 'On orders over 24,000 EGP',
    icon: Truck,
    color: 'bg-blue-500',
    expires: 'Limited time',
  },
  {
    id: 3,
    title: 'Bundle Deal',
    discount: 'Save 24,000 EGP',
    description: 'Bedroom sets bundle',
    icon: Gift,
    color: 'bg-green-500',
    expires: 'Ends in 3 days',
  },
  {
    id: 4,
    title: 'Flash Sale',
    discount: '50% OFF',
    description: 'Selected items only',
    icon: Clock,
    color: 'bg-orange-500',
    expires: '24 hours left',
  },
]

export default function OffersSection() {
  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2 sm:mb-4">
            Special Offers
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Don&apos;t miss out on these exclusive deals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <motion.div
                key={offer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`${offer.color} p-4 sm:p-6 text-white`}>
                  <Icon size={32} className="sm:w-10 sm:h-10 mb-2 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{offer.title}</h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{offer.discount}</p>
                  <p className="text-xs sm:text-sm opacity-90">{offer.description}</p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{offer.expires}</p>
                  <motion.button
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

