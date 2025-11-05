'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  shop: ['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor'],
  company: ['About Us', 'Careers', 'Press', 'Blog'],
  support: ['Contact', 'Shipping', 'Returns', 'FAQ'],
  legal: ['Privacy', 'Terms', 'Cookies', 'Accessibility'],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Dilusso
            </motion.h2>
            <p className="mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Transforming spaces with elegant, modern furniture. Discover
              premium pieces that bring your vision to life.
            </p>
            <div className="flex gap-2 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-1.5 sm:p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dilusso. All rights reserved.
          </p>
          <p className="text-sm">
            Made with <span className="text-primary-400">❤</span> for modern
            living
          </p>
        </div>
      </div>
    </footer>
  )
}

