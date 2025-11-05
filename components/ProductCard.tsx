'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, Eye, Truck, Check } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  rating: number
  reviews: number
  category: string
  inStock?: boolean
  freeShipping?: boolean
}

interface ProductCardProps {
  product: Product
  index: number
  isComparing?: boolean
  onCompareChange?: (productId: number, checked: boolean) => void
}

export default function ProductCard({ product, index, isComparing = false, onCompareChange }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Badges */}
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            SALE
          </div>
        )}
        {product.freeShipping && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
            <Truck size={12} />
            FREE SHIP
          </div>
        )}

        {/* Quick Actions - Show on Hover */}
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-2 px-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <motion.button
            className="bg-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Quick View</span>
          </motion.button>
          <motion.button
            className="bg-primary-600 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Add to Cart</span>
          </motion.button>
        </div>

        {/* Wishlist Button */}
        <motion.button
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all z-10"
          onClick={() => setIsWishlisted(!isWishlisted)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'} 
          />
        </motion.button>

        {/* Stock Status */}
        {product.inStock !== false && (
          <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
            <Check size={12} />
            In Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 md:p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide truncate">{product.category}</p>
        
        {/* Product Name */}
        <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2 h-8 sm:h-10 leading-4 sm:leading-5 hover:text-primary-600 cursor-pointer">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1 sm:mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={`sm:w-3 sm:h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2 sm:mb-3 flex-wrap">
          <span className="text-base sm:text-lg font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>

        {/* Compare Checkbox */}
        {onCompareChange && (
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
            <input
              type="checkbox"
              id={`compare-${product.id}`}
              checked={isComparing}
              onChange={(e) => onCompareChange(product.id, e.target.checked)}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label
              htmlFor={`compare-${product.id}`}
              className="text-xs text-gray-600 cursor-pointer"
            >
              Compare
            </label>
          </div>
        )}

        {/* Add to Cart Button */}
        <motion.button
          className="w-full bg-primary-600 text-white py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-primary-700 transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

