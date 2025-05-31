'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Početna' },
    { href: '/menu', label: 'Meni' },
    { href: '/about', label: 'O nama' },
    { href: '/contact', label: 'Kontakt' },
    { href: '/order', label: 'Poruči' },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-secondary hover:text-primary transition"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6"
          >
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block text-lg text-secondary hover:text-primary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="https://wolt.com"
                  target="_blank"
                  className="block text-lg text-secondary hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  Wolt
                </Link>
                <Link
                  href="https://glovo.com"
                  target="_blank"
                  className="block text-lg text-secondary hover:text-primary transition mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Glovo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu 