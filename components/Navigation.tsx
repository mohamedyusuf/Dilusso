'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary-700">
              Dilusso
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Shop', 'Collections', 'About', 'Contact'].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary-600 rounded-full"></span>
            </motion.button>
            <button
              className="hidden md:block p-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {['Home', 'Shop', 'Collections', 'About', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    {/* Sidebar Menu */}
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display font-bold text-primary-700">
                  Menu
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-2">
                <a
                  href="#shop"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Shop
                </a>
                <a
                  href="#offers"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Offers
                </a>
                <a
                  href="#collections"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Collections
                </a>
                <a
                  href="#about"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact
                </a>
              </nav>

              <div className="mt-8 pt-8 border-t">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {['All', 'Sofas & Armchairs', 'Tables & Desks', 'Chairs & Stools', 'Storage & Shelving', 'Beds & Mattresses', 'Wardrobes & Closets', 'Lighting', 'Textiles & Rugs', 'Dining Room', 'Kitchen', 'Outdoor', 'Decoration'].map((category) => (
                    <a
                      key={category}
                      href={`#shop`}
                      className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-sm transition-colors"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {category}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
    </>
  )
}

