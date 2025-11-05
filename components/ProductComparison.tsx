'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, XCircle } from 'lucide-react'
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

interface ProductComparisonProps {
  products: Product[]
  onClose: () => void
}

export default function ProductComparison({ products, onClose }: ProductComparisonProps) {
  const features = [
    { name: 'Price', key: 'price' },
    { name: 'Rating', key: 'rating' },
    { name: 'Reviews', key: 'reviews' },
    { name: 'In Stock', key: 'inStock' },
    { name: 'Free Shipping', key: 'freeShipping' },
    { name: 'Category', key: 'category' },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto m-2 sm:m-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-3 sm:p-4 md:p-6 flex items-center justify-between z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-900">
              Compare Products
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Comparison Table */}
          <div className="p-2 sm:p-4 md:p-6 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 font-semibold text-xs sm:text-sm md:text-base text-gray-700">Features</th>
                  {products.map((product) => (
                    <th key={product.id} className="text-center py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 min-w-[120px] sm:min-w-[150px] md:min-w-[200px]">
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900 text-center line-clamp-2">
                          {product.name}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.key}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 font-medium text-xs sm:text-sm md:text-base text-gray-700">{feature.name}</td>
                    {products.map((product) => (
                      <td key={product.id} className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 text-center">
                        {feature.key === 'price' && (
                          <div>
                            <p className="font-bold text-xs sm:text-sm md:text-base text-gray-900">{product.price}</p>
                            {product.originalPrice && (
                              <p className="text-xs text-gray-500 line-through">
                                {product.originalPrice}
                              </p>
                            )}
                          </div>
                        )}
                        {feature.key === 'rating' && (
                          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                            {product.rating} ⭐
                          </p>
                        )}
                        {feature.key === 'reviews' && (
                          <p className="text-xs sm:text-sm text-gray-600">({product.reviews})</p>
                        )}
                        {feature.key === 'inStock' && (
                          <div className="flex justify-center">
                            {product.inStock ? (
                              <Check size={16} className="sm:w-5 sm:h-5 text-green-500" />
                            ) : (
                              <XCircle size={16} className="sm:w-5 sm:h-5 text-red-500" />
                            )}
                          </div>
                        )}
                        {feature.key === 'freeShipping' && (
                          <div className="flex justify-center">
                            {product.freeShipping ? (
                              <Check size={16} className="sm:w-5 sm:h-5 text-green-500" />
                            ) : (
                              <XCircle size={16} className="sm:w-5 sm:h-5 text-red-500" />
                            )}
                          </div>
                        )}
                        {feature.key === 'category' && (
                          <p className="text-xs sm:text-sm text-gray-600">{product.category}</p>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 sm:px-6 sm:py-2 border border-gray-300 rounded-lg font-semibold text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

