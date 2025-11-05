'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Scale } from 'lucide-react'
import ProductCard from './ProductCard'
import ProductComparison from './ProductComparison'

const categories = [
  'All', 
  'Sofas & Armchairs', 
  'Tables & Desks', 
  'Chairs & Stools', 
  'Storage & Shelving', 
  'Beds & Mattresses', 
  'Wardrobes & Closets',
  'Lighting',
  'Textiles & Rugs',
  'Dining Room',
  'Kitchen',
  'Outdoor',
  'Decoration'
]

const products = [
  // Sofas & Armchairs
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
  },
  // Tables & Desks
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
  },
  {
    id: 7,
    name: 'Standing Desk - Adjustable Height',
    price: '33,550 EGP',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 445,
    category: 'Tables & Desks',
    inStock: true,
    freeShipping: false,
  },
  {
    id: 8,
    name: 'Console Table - Modern Design',
    price: '19,150 EGP',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
    rating: 4.5,
    reviews: 167,
    category: 'Tables & Desks',
    inStock: true,
    freeShipping: true,
  },
  // Chairs & Stools
  {
    id: 9,
    name: 'Ergonomic Office Chair - Black',
    price: '14,350 EGP',
    originalPrice: '19,150 EGP',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 523,
    category: 'Chairs & Stools',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 10,
    name: 'Dining Chair Set of 4 - Upholstered',
    price: '28,750 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 312,
    category: 'Chairs & Stools',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 11,
    name: 'Bar Stool Set of 2 - Swivel',
    price: '14,350 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 198,
    category: 'Chairs & Stools',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 12,
    name: 'Accent Chair - Velvet Blue',
    price: '21,550 EGP',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 234,
    category: 'Chairs & Stools',
    inStock: true,
    freeShipping: true,
  },
  // Storage & Shelving
  {
    id: 13,
    name: 'Wall Bookshelf - 5 Tier',
    price: '9,550 EGP',
    originalPrice: '11,950 EGP',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 445,
    category: 'Storage & Shelving',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 14,
    name: 'TV Stand Media Console - 60 inch',
    price: '26,350 EGP',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 278,
    category: 'Storage & Shelving',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 15,
    name: 'Storage Cabinet - 3 Drawers',
    price: '19,150 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 356,
    category: 'Storage & Shelving',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 16,
    name: 'Floating Shelves Set - Oak',
    price: '7,150 EGP',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
    rating: 4.5,
    reviews: 289,
    category: 'Storage & Shelving',
    inStock: true,
    freeShipping: true,
  },
  // Beds & Mattresses
  {
    id: 17,
    name: 'Platform Bed Frame - King Size',
    price: '43,150 EGP',
    originalPrice: '57,550 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 412,
    category: 'Beds & Mattresses',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 18,
    name: 'Upholstered Bed Frame - Queen',
    price: '33,550 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 356,
    category: 'Beds & Mattresses',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 19,
    name: 'Memory Foam Mattress - Queen',
    price: '38,350 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 678,
    category: 'Beds & Mattresses',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 20,
    name: 'Bunk Bed - Twin Over Twin',
    price: '28,750 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 234,
    category: 'Beds & Mattresses',
    inStock: true,
    freeShipping: false,
  },
  // Wardrobes & Closets
  {
    id: 21,
    name: 'Sliding Door Wardrobe - 6 Doors',
    price: '71,950 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 189,
    category: 'Wardrobes & Closets',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 22,
    name: 'Dresser Chest - 6 Drawers',
    price: '31,150 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 267,
    category: 'Wardrobes & Closets',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 23,
    name: 'Nightstand Set of 2 - Modern',
    price: '19,150 EGP',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 312,
    category: 'Wardrobes & Closets',
    inStock: true,
    freeShipping: true,
  },
  // Lighting
  {
    id: 24,
    name: 'Floor Lamp - Modern Arc Design',
    price: '9,550 EGP',
    image: 'https://images.unsplash.com/photo-1507473885765-e6c2504c934d?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 234,
    category: 'Lighting',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 25,
    name: 'Pendant Light - Industrial Style',
    price: '7,150 EGP',
    image: 'https://images.unsplash.com/photo-1507473885765-e6c2504c934d?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 189,
    category: 'Lighting',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 26,
    name: 'Table Lamp Set - Brass',
    price: '4,275 EGP',
    image: 'https://images.unsplash.com/photo-1507473885765-e6c2504c934d?w=800&h=800&fit=crop',
    rating: 4.5,
    reviews: 167,
    category: 'Lighting',
    inStock: true,
    freeShipping: true,
  },
  // Textiles & Rugs
  {
    id: 27,
    name: 'Area Rug - 8x10 Gray Modern',
    price: '14,350 EGP',
    originalPrice: '19,150 EGP',
    image: 'https://images.unsplash.com/photo-1586075010923-a2dda7d94c42?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 445,
    category: 'Textiles & Rugs',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 28,
    name: 'Throw Pillow Set - 4 Pack',
    price: '3,790 EGP',
    image: 'https://images.unsplash.com/photo-1586075010923-a2dda7d94c42?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 523,
    category: 'Textiles & Rugs',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 29,
    name: 'Curtains Set - Thermal Blackout',
    price: '6,190 EGP',
    image: 'https://images.unsplash.com/photo-1586075010923-a2dda7d94c42?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 312,
    category: 'Textiles & Rugs',
    inStock: true,
    freeShipping: true,
  },
  // Dining Room
  {
    id: 30,
    name: 'Dining Bench - Upholstered',
    price: '11,950 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 234,
    category: 'Dining Room',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 31,
    name: 'Sideboard Buffet - 6 Drawers',
    price: '38,350 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 189,
    category: 'Dining Room',
    inStock: true,
    freeShipping: true,
  },
  // Kitchen
  {
    id: 32,
    name: 'Kitchen Island - With Storage',
    price: '62,350 EGP',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 156,
    category: 'Kitchen',
    inStock: true,
    freeShipping: false,
  },
  {
    id: 33,
    name: 'Kitchen Cart - Rolling',
    price: '9,550 EGP',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 289,
    category: 'Kitchen',
    inStock: true,
    freeShipping: true,
  },
  // Outdoor
  {
    id: 34,
    name: 'Patio Dining Set - 6 Piece',
    price: '43,150 EGP',
    originalPrice: '57,550 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 234,
    category: 'Outdoor',
    inStock: true,
    freeShipping: false,
  },
  {
    id: 35,
    name: 'Garden Bench - Teak Wood',
    price: '16,750 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.7,
    reviews: 178,
    category: 'Outdoor',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 36,
    name: 'Outdoor Sofa Set - Weather Resistant',
    price: '71,950 EGP',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 123,
    category: 'Outdoor',
    inStock: true,
    freeShipping: false,
  },
  // Decoration
  {
    id: 37,
    name: 'Wall Mirror - Large Round',
    price: '8,590 EGP',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop',
    rating: 4.6,
    reviews: 267,
    category: 'Decoration',
    inStock: true,
    freeShipping: true,
  },
  {
    id: 38,
    name: 'Decorative Vase Set - 3 Piece',
    price: '4,275 EGP',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop',
    rating: 4.5,
    reviews: 445,
    category: 'Decoration',
    inStock: true,
    freeShipping: true,
  },
]

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [compareProducts, setCompareProducts] = useState<number[]>([])
  const [showComparison, setShowComparison] = useState(false)

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const handleCompareChange = (productId: number, checked: boolean) => {
    if (checked) {
      if (compareProducts.length < 4) {
        setCompareProducts([...compareProducts, productId])
      }
    } else {
      setCompareProducts(compareProducts.filter((id) => id !== productId))
    }
  }

  const productsToCompare = products.filter((p) => compareProducts.includes(p.id))

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
            <div className="flex-1 sm:block hidden"></div>
            <div className="flex-1 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2 sm:mb-4">
                Our Collections
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Curated pieces that blend luxury with functionality
              </p>
            </div>
            <div className="flex-1 sm:flex justify-end hidden">
              {compareProducts.length > 0 && (
                <motion.button
                  onClick={() => setShowComparison(true)}
                  className="relative px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 text-white rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:bg-primary-700 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Scale size={16} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Compare</span>
                  <span className="sm:hidden">({compareProducts.length})</span>
                  {compareProducts.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
                      {compareProducts.length}
                    </span>
                  )}
                </motion.button>
              )}
            </div>
          </div>
          {/* Mobile Compare Button */}
          {compareProducts.length > 0 && (
            <div className="sm:hidden mb-4 flex justify-center">
              <motion.button
                onClick={() => setShowComparison(true)}
                className="relative px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-primary-700 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Scale size={18} />
                Compare ({compareProducts.length})
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {compareProducts.length}
                </span>
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  isComparing={compareProducts.includes(product.id)}
                  onCompareChange={handleCompareChange}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, gap: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Comparison Modal */}
      {showComparison && productsToCompare.length > 0 && (
        <ProductComparison
          products={productsToCompare}
          onClose={() => setShowComparison(false)}
        />
      )}
    </section>
  )
}

