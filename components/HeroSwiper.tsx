'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: 'Summer Collection Sale',
    subtitle: 'Up to 50% OFF',
    description: 'On all living room furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop',
    buttonText: 'Shop Now',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Free Shipping',
    description: 'On orders over 24,000 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    buttonText: 'Explore',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Bedroom Bundle Deal',
    subtitle: 'Save 24,000 EGP',
    description: 'Complete bedroom sets',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop',
    buttonText: 'Shop Now',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Flash Sale',
    subtitle: 'Limited Time',
    description: 'Selected items only - 24 hours left',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=600&fit=crop',
    buttonText: 'Shop Now',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function HeroSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % offers.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % offers.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden bg-gray-100 mt-20">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${offers[currentIndex].image})`,
              }}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${offers[currentIndex].color} opacity-85`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2 md:mb-4">
                      {offers[currentIndex].title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
                      {offers[currentIndex].subtitle}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 opacity-90">
                      {offers[currentIndex].description}
                    </p>
                    <motion.button
                      className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {offers[currentIndex].buttonText}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} className="sm:w-6 sm:h-6 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={18} className="sm:w-6 sm:h-6 text-gray-900" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 sm:w-8 bg-white'
                  : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

