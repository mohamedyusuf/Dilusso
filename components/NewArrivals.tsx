'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ProductCard from './ProductCard'

const newProducts = [
  {
    id: 1,
    name: 'Modern 3-Seater Sofa - Gray Fabric',
    price: '62,350 EGP',
    originalPrice: '76,750 EGP',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 324,
    category: 'Sofas & Armchairs',
    inStock: true,
    freeShipping: true,
    isNew: true,
  },
  {
    id: 2,
    name: 'Corner Sectional Sofa - Beige',
    price: '119,950 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 187,
    category: 'Sofas & Armchairs',
    inStock: true,
    freeShipping: true,
    isNew: true,
  },
  {
    id: 3,
    name: 'Leather Recliner Armchair - Brown',
    price: '43,150 EGP',
    originalPrice: '57,550 EGP',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 256,
    category: 'Sofas & Armchairs',
    inStock: true,
    freeShipping: false,
    isNew: true,
  },
  {
    id: 4,
    name: 'Luxury Chaise Lounge - White',
    price: '81,550 EGP',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 142,
    category: 'Sofas & Armchairs',
    inStock: true,
    freeShipping: true,
    isNew: true,
  },
  {
    id: 5,
    name: 'Modern Coffee Table - Oak Wood',
    price: '21,550 EGP',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 289,
    category: 'Tables & Desks',
    inStock: true,
    freeShipping: true,
    isNew: true,
  },
  {
    id: 6,
    name: 'Dining Table - Extendable 6-8 Seater',
    price: '62,350 EGP',
    originalPrice: '76,750 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 203,
    category: 'Tables & Desks',
    inStock: true,
    freeShipping: true,
    isNew: true,
  },
]

export default function NewArrivals() {
  const [compareProducts, setCompareProducts] = useState<number[]>([])

  const handleCompareChange = (productId: number, checked: boolean) => {
    if (checked) {
      if (compareProducts.length < 4) {
        setCompareProducts([...compareProducts, productId])
      }
    } else {
      setCompareProducts(compareProducts.filter((id) => id !== productId))
    }
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Sparkles className="text-primary-600 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900">
              New Arrivals
            </h2>
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              NEW
            </span>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm lg:text-base"
            whileHover={{ gap: 4 }}
          >
            View All
            <ArrowRight size={18} className="lg:w-5 lg:h-5" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {newProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isComparing={compareProducts.includes(product.id)}
              onCompareChange={handleCompareChange}
            />
          ))}
        </div>

        <motion.div
          className="md:hidden text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 text-primary-600 font-semibold"
            whileHover={{ gap: 4 }}
          >
            View All New Arrivals
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

